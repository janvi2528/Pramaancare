"use client";

export function StructuredData() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.pramaancare.com/#website",
    "url": "https://www.pramaancare.com/",
    "name": "Pramaancare",
    "inLanguage": "en",
    "publisher": { "@id": "https://www.pramaancare.com/#org" },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.pramaancare.com/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization","MedicalOrganization","LocalBusiness","ProfessionalService"],
    "@id": "https://www.pramaancare.com/#org",
    "name": "Pramaancare",
    "url": "https://www.pramaancare.com/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.pramaancare.com/images/light%20logo.svg"
    },
    "image": "https://www.pramaancare.com/images/about-prerna.webp",
    "description": "Clinical Psychologist led counselling & psychotherapy in Gurgaon, Delhi NCR & online across India.",
    "telephone": "+91-8860590449",
    "email": "info@pramaancare.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Gurgaon Office Address",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "postalCode": "122001",
      "addressCountry": "IN"
    },
    "areaServed": ["Gurugram","Delhi NCR","India","Online"],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens": "10:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "15:00"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "telephone": "+91-8860590449",
      "email": "info@pramaancare.com",
      "areaServed": "IN",
      "availableLanguage": ["en","hi"]
    },
    "sameAs": [
      "https://www.facebook.com/pramaancare",
      "https://www.instagram.com/pramaancare",
      "https://www.linkedin.com/company/pramaancare",
      "https://maps.google.com/?cid=YOUR_GBP_CID"
    ]
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.pramaancare.com/#practitioner",
    "name": "Ms. Prerna Sethi",
    "jobTitle": "Clinical Psychologist",
    "description": "Experienced Clinical Psychologist specializing in anxiety, depression, relationship issues, stress management and psychological assessments.",
    "worksFor": { "@id": "https://www.pramaancare.com/#org" },
    "url": "https://www.pramaancare.com/about/",
    "image": "https://www.pramaancare.com/images/Meet%20Ms.%20Prerna%20Sethi.jpg",
    "sameAs": [
      "https://www.linkedin.com/in/prerna-sethi-clinical-psychologist",
      "https://www.pramaancare.com/about/"
    ]
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Counselling & Therapy Services",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "Individual Counselling & Psychotherapy",
        "url": "https://www.pramaancare.com/services/individual-counselling/",
        "provider": { "@id": "https://www.pramaancare.com/#org" },
        "description": "One-to-one therapy with a Clinical Psychologist for anxiety, depression, stress, trauma, mood & sleep issues."
      },
      {
        "@type": "Service",
        "name": "Couples & Relationship Counselling",
        "url": "https://www.pramaancare.com/services/couples-therapy/",
        "provider": { "@id": "https://www.pramaancare.com/#org" },
        "description": "Therapy for communication issues, conflict resolution, trust, intimacy, and premarital counselling."
      },
      {
        "@type": "Service",
        "name": "Family & Teen Counselling",
        "url": "https://www.pramaancare.com/services/family-teen-counselling/",
        "provider": { "@id": "https://www.pramaancare.com/#org" },
        "description": "Support for family dynamics, parenting challenges and adolescent mental health."
      },
      {
        "@type": "Service",
        "name": "Online Therapy & Tele-Counselling",
        "url": "https://www.pramaancare.com/services/online-therapy/",
        "provider": { "@id": "https://www.pramaancare.com/#org" },
        "description": "Secure online sessions with a Clinical Psychologist for clients across India."
      },
      {
        "@type": "Service",
        "name": "Psychological Assessments",
        "url": "https://www.pramaancare.com/services/assessments/",
        "provider": { "@id": "https://www.pramaancare.com/#org" },
        "description": "Standardized assessments for personality, cognitive functions, emotional/behavioral concerns and diagnosis."
      },
      {
        "@type": "Service",
        "name": "Corporate Wellness & EAP",
        "url": "https://www.pramaancare.com/services/corporate-wellness/",
        "provider": { "@id": "https://www.pramaancare.com/#org" },
        "description": "Workplace mental health programs, workshops and employee assistance services."
      }
    ]
  };

  const breadcrumbsSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pramaancare.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.pramaancare.com/services/" },
      { "@type": "ListItem", "position": 3, "name": "About", "item": "https://www.pramaancare.com/about/" },
      { "@type": "ListItem", "position": 4, "name": "Contact", "item": "https://www.pramaancare.com/contact/" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you offer online counselling with a Clinical Psychologist?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We provide secure online therapy sessions with a qualified Clinical Psychologist for clients across India and abroad."
        }
      },
      {
        "@type": "Question",
        "name": "How long is a counselling session and how many sessions will I need?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A typical session lasts 45–60 minutes. The number of sessions varies by concern, but many clients see progress within 6–12 sessions."
        }
      },
      {
        "@type": "Question",
        "name": "Is my therapy confidential?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. All sessions are confidential and handled according to professional ethics and privacy standards, except where safety or legal obligations apply."
        }
      },
      {
        "@type": "Question",
        "name": "What concerns do you treat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We support anxiety, depression, relationship issues, stress and burnout, trauma, self-esteem concerns, and more. Psychological assessments are also available."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}