import Contact from '../models/Contact.js';

export async function createContact({ fullName, email, phone, service, message }) {
  return Contact.create({ fullName, email, phone: phone || undefined, service, message });
}
