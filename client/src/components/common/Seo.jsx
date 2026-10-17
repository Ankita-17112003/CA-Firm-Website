import { Helmet } from 'react-helmet-async';
import { site } from '../../config/site.js';

export default function Seo({ title, description = site.description, noIndex = false }) {
  const fullTitle = title ? `${title} | ${site.name}` : site.name;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {noIndex && <meta name="robots" content="noindex" />}
    </Helmet>
  );
}
