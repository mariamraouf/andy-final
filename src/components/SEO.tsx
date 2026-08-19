import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  articleSchema?: Record<string, any>;
}

const DEFAULT_TITLE = "Cruzian | B2B Lead Generation & Growth Systems";
const DEFAULT_DESCRIPTION =
  "We help overlooked businesses become impossible to ignore. Predictable lead pipelines, modern websites, and paid ads in Jacksonville, FL.";
const DEFAULT_CANONICAL = "https://www.thecruzian.com/";
const DEFAULT_OG_IMAGE = "https://www.thecruzian.com/og-image.jpg";

export const SEO: React.FC<SEOProps> = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords = "B2B lead generation, Jacksonville marketing agency, SEO services, local business growth, GoHighLevel CRM setup, Apollo lead sourcing, missed call recovery, paid ads management, digital marketing Jacksonville",
  canonical = DEFAULT_CANONICAL,
  ogImage = DEFAULT_OG_IMAGE,
  articleSchema,
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content="Cruzian" />
      <meta property="og:type" content={articleSchema ? "article" : "website"} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Optional Article Structured Data */}
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}
    </Helmet>
  );
};