import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { ChevronDown, CircleAlert, CircleCheck } from 'lucide-react';
import Button from './Button.jsx';
import FormField from './FormField.jsx';
import api from '../../services/api.js';
import { serviceOptions } from '../../data/serviceOptions.js';

const emptyValues = { fullName: '', email: '', phone: '', service: '', message: '' };

// Filled-field style (light background, border appears on hover/focus).
// 16px text stops iOS zoom, 48px height is easy to tap, focus ring stays visible for keyboard users.
const fieldClass =
  'block min-h-12 w-full rounded-sm border border-transparent bg-mist px-4 py-3 text-base text-charcoal placeholder:text-charcoal/55 transition-colors duration-150 hover:border-navy/30 focus:border-navy focus:bg-white focus:outline focus:outline-2 focus:outline-transparent focus:ring-2 focus:ring-navy/20 aria-[invalid=true]:border-red-700 aria-[invalid=true]:bg-white aria-[invalid=true]:focus:ring-red-700/20 disabled:cursor-not-allowed disabled:text-charcoal/60';
const textareaClass = `${fieldClass} min-h-40 resize-y`;
const selectClass = `${fieldClass} appearance-none pr-11`;

export default function ContactForm() {
  const [searchParams] = useSearchParams();
  const preselected = searchParams.get('service');
  const [submitError, setSubmitError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    setError,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: emptyValues, mode: 'onTouched' });

  // Pre-fill the service when arriving from a "Discuss this service" button.
  useEffect(() => {
    if (preselected && serviceOptions.includes(preselected)) setValue('service', preselected);
  }, [preselected, setValue]);

  const messageLength = watch('message')?.length || 0;

  const onSubmit = async (values) => {
    setSubmitError('');
    try {
      // Success is shown only after the server confirms the inquiry was saved.
      const { data } = await api.post('/contact', values);
      setSuccessMessage(data.message);
      reset(emptyValues);
    } catch (err) {
      let mapped = false;
      (err.fieldErrors || []).forEach(({ field, message }) => {
        if (field in emptyValues) {
          setError(field, { type: 'server', message });
          mapped = true;
        }
      });
      setSubmitError(mapped ? 'Please correct the highlighted fields and try again.' : err.message);
    }
  };

  if (successMessage) {
    return (
      <div role="status" className="border border-sage bg-sage-50 p-6 sm:p-8">
        <CircleCheck className="size-8 text-navy sm:size-9" strokeWidth={1.5} aria-hidden="true" />
        <h2 className="mt-4 font-display text-2xl leading-tight sm:text-3xl">Inquiry received</h2>
        <p className="mt-3 break-words text-[15px] leading-relaxed text-charcoal/85 sm:text-base">{successMessage}</p>
        <Button
          variant="secondary"
          className="mt-6 w-full justify-center sm:w-auto"
          onClick={() => setSuccessMessage('')}
        >
          Send another inquiry
        </Button>
      </div>
    );
  }

  const describe = (name) => (errors[name] ? `${name}-error` : undefined);

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5 sm:space-y-6" aria-label="Contact form">
      {submitError && (
        <div
          role="alert"
          className="flex gap-3 border border-red-700/40 bg-red-50 p-4 text-[15px] leading-relaxed text-red-900 sm:text-sm"
        >
          <CircleAlert className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
          <p className="min-w-0 break-words">{submitError}</p>
        </div>
      )}

      {/* Row 1: name + email */}
      <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
        <FormField id="fullName" label="Full Name" required error={errors.fullName?.message}>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            autoCapitalize="words"
            enterKeyHint="next"
            maxLength={100}
            placeholder="Enter your name"
            className={fieldClass}
            aria-invalid={!!errors.fullName}
            aria-describedby={describe('fullName')}
            {...register('fullName', {
              required: 'Please enter your full name',
              validate: (v) => v.trim().length >= 2 || 'Full name must be at least 2 characters',
            })}
          />
        </FormField>

        <FormField id="email" label="Email" required error={errors.email?.message}>
          <input
            id="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            autoCapitalize="none"
            spellCheck={false}
            enterKeyHint="next"
            maxLength={254}
            placeholder="Enter your email"
            className={fieldClass}
            aria-invalid={!!errors.email}
            aria-describedby={describe('email')}
            {...register('email', {
              required: 'Please enter your email address',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Please enter a valid email address' },
            })}
          />
        </FormField>
      </div>

      {/* Row 2: service + phone */}
      <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
        <FormField id="service" label="Service Required" required error={errors.service?.message}>
          <div className="relative">
            <select
              id="service"
              className={selectClass}
              aria-invalid={!!errors.service}
              aria-describedby={describe('service')}
              {...register('service', { required: 'Please select a service' })}
            >
              <option value="">Select a service</option>
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-charcoal/60"
              aria-hidden="true"
            />
          </div>
        </FormField>

        <FormField id="phone" label="Phone" error={errors.phone?.message}>
          <input
            id="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            enterKeyHint="next"
            maxLength={20}
            placeholder="Enter your phone"
            className={fieldClass}
            aria-invalid={!!errors.phone}
            aria-describedby={describe('phone')}
            {...register('phone', {
              pattern: { value: /^\+?[0-9\s-]{7,18}$/, message: 'Enter a valid phone number, for example +91 98765 43210' },
            })}
          />
        </FormField>
      </div>

      <FormField
        id="message"
        label="Message"
        required
        error={errors.message?.message}
        hint={`${messageLength} / 2000 characters`}
      >
        <textarea
          id="message"
          rows={6}
          maxLength={2000}
          placeholder="How can we help you?"
          className={textareaClass}
          aria-invalid={!!errors.message}
          aria-describedby={describe('message')}
          {...register('message', {
            required: 'Please tell us how we can help',
            validate: (v) => v.trim().length >= 10 || 'Message must be at least 10 characters',
          })}
        />
      </FormField>

      {/* Send + Reset (stacked and full width on phones, side by side from sm up) */}
      <div className="flex flex-col gap-3 pt-1 sm:flex-row">
        <Button type="submit" loading={isSubmitting} className="min-h-12 w-full justify-center sm:w-auto sm:min-w-44">
          {isSubmitting ? 'Sending' : 'Send Inquiry'}
        </Button>
        <Button
          type="button"
          variant="secondary"
          className="min-h-12 w-full justify-center sm:w-auto sm:min-w-32"
          onClick={() => {
            reset(emptyValues);
            setSubmitError('');
          }}
        >
          Reset
        </Button>
      </div>
    </form>
  );
}