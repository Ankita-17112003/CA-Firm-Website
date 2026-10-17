// Strips HTML tags and control characters, trims surrounding whitespace.
// React escapes output, so we do not HTML-escape here (that would store "&amp;").
export function sanitizeText(value) {
  if (typeof value !== 'string') return value;
  return value
    .replace(/<[^>]*>/g, '')
    // eslint-disable-next-line no-control-regex
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .trim();
}
