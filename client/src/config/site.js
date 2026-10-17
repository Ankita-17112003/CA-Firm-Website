// Replace these placeholders with the firm's real details (or set the VITE_* variables in client/.env).
const env = import.meta.env;

export const site = {
  name: '[CA FIRM NAME]',
  description:
    'Trusted financial, taxation, audit and business advisory services for individuals and businesses in India.',
  email: env.VITE_FIRM_EMAIL || '[firm-email@example.com]',
  phone: env.VITE_FIRM_PHONE || '[+91 00000 00000]',
  address: env.VITE_FIRM_ADDRESS || '[Office address, City, State, PIN]',
  whatsappNumber: (env.VITE_WHATSAPP_NUMBER || '').replace(/\D/g, ''),
  mapsEmbedUrl: env.VITE_MAPS_EMBED_URL || '',
};

export const hasRealEmail = Boolean(env.VITE_FIRM_EMAIL);
export const hasRealPhone = Boolean(env.VITE_FIRM_PHONE);

// Returns null until a real WhatsApp number is configured, so we never link to a wrong number.
export function whatsappLink(text = 'Hello, I would like to enquire about your services.') {
  if (!site.whatsappNumber) return null;
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/industries', label: 'Industries' },
  { to: '/insights', label: 'Insights' },
  { to: '/contact', label: 'Contact' },
];
