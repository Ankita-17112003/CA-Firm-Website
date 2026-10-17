// Placeholder photography (Unsplash). Replace each `src` with the firm's own photos
// (put files in client/public/images and use '/images/your-file.jpg').
// Every <Photo /> falls back to a plain tonal block if an image fails to load.
const u = (id, w = 1600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  hero: { src: u('photo-1486406146926-c627a92ad1ab'), alt: 'Modern glass office building against the sky' },
  office: { src: u('photo-1497366216548-37526070297c'), alt: 'Bright, minimal professional office interior' },
  advisory: { src: u('photo-1454165804606-c3d57bc86b40'), alt: 'Financial documents and a laptop on a desk' },
  meeting: { src: u('photo-1521737604893-d14cc237f11d'), alt: 'Professionals in a discussion around a table' },
  facade: { src: u('photo-1554469384-e58fac16e23a'), alt: 'Architectural facade of a corporate building' },
};
