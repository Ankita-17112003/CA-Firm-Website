export const inputClass =
  'block w-full rounded-sm border border-navy/25 bg-white px-4 py-3 text-base text-charcoal placeholder:text-charcoal/50 focus:border-navy aria-[invalid=true]:border-red-700';

// Label + control + error message, wired together for screen readers.
// Pass the control as children and give it id={id}, aria-invalid and aria-describedby={`${id}-error`}.
export default function FormField({ id, label, required = false, error, hint, children }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-navy">
        {label}
        {required ? <span className="text-red-700"> *</span> : <span className="font-normal text-charcoal/60"> (optional)</span>}
      </label>
      <div className="mt-2">{children}</div>
      {hint && !error && <p className="mt-1.5 text-xs text-charcoal/60">{hint}</p>}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
