import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords = "Clothing Store in North Lakhimpur, Best Fashion Store in Assam, Family Clothing Store Near Me, Lifestyle Family Store",
  image = "/og-image.jpg",
  url = "https://lifestylefamilystore.com"
}) => {
  const fullTitle = `${title} | Lifestyle – Family Store`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ClothingStore",
          "name": "Lifestyle – Family Store",
          "image": image,
          "@id": "",
          "url": url,
          "telephone": "+91 70029 70905",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "NT Rd",
            "addressLocality": "North Lakhimpur",
            "addressRegion": "Assam",
            "postalCode": "787001",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 27.2315,
            "longitude": 94.1040
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "10:00",
            "closes": "21:00"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.6",
            "reviewCount": "36"
          }
        })}
      </script>
    </Helmet>
  );
};
