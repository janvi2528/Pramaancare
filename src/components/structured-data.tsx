"use client";

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Pramaan Care",
    "description": "Professional mental health counseling and psychological services in Delhi & Gurgaon.",
    "url": "https://pramaancare.com",
    "logo": "https://pramaancare.com/images/light logo.svg",
    "image": "https://pramaancare.com/images/light logo.svg",
    "telephone": "+91-XXXXXXXXXX", // Replace with actual phone number
    "email": "contact@pramaancare.com", // Replace with actual email
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Gurgaon Office Address", // Replace with actual address
        "addressLocality": "Gurgaon",
        "addressRegion": "Haryana",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "East of Kailash Office Address", // Replace with actual address
        "addressLocality": "East of Kailash",
        "addressRegion": "Delhi",
        "addressCountry": "IN"
      }
    ],
    "geo": [
      {
        "@type": "GeoCoordinates",
        "latitude": "28.4595", // Gurgaon coordinates - replace with actual
        "longitude": "77.0266"
      },
      {
        "@type": "GeoCoordinates",
        "latitude": "28.5494", // Delhi coordinates - replace with actual
        "longitude": "77.2483"
      }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "serviceType": [
      "Mental Health Counseling",
      "Individual Therapy",
      "Couples Therapy",
      "Family Therapy",
      "Corporate Wellness",
      "Psychological Assessments",
      "Online Therapy"
    ],
    "medicalSpecialty": [
      "Clinical Psychology",
      "Counseling Psychology",
      "Mental Health"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Mental Health Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Individual Therapy",
            "description": "Personalized one-on-one counseling sessions for mental health support"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Couples Therapy",
            "description": "Professional counseling for relationship challenges and communication"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Family Therapy",
            "description": "Family counseling and support for teenagers and parent-child relationships"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Wellness",
            "description": "Employee assistance programs and workplace mental health solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Psychological Assessments",
            "description": "Comprehensive psychological testing and evaluation services"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8", // Update with actual rating
      "reviewCount": "50", // Update with actual review count
      "bestRating": "5",
      "worstRating": "1"
    },
    "priceRange": "$$", // Update as appropriate
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, Credit Card, Online Payment",
    "areaServed": [
      {
        "@type": "City",
        "name": "Delhi"
      },
      {
        "@type": "City", 
        "name": "Gurgaon"
      },
      {
        "@type": "Country",
        "name": "India"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}