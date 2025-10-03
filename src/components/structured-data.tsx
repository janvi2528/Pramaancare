"use client";

export function StructuredData() {
  // Organization + Local Business Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "MedicalOrganization", "LocalBusiness"],
    "name": "Pramaan Care",
    "url": "https://www.pramaancare.com/",
    "email": "info@pramaancare.com",
    "telephone": "+91-8860590449",
    "logo": "https://www.pramaancare.com/images/light logo.svg",
    "image": "https://www.pramaancare.com/images/Pramaan Logo.jpeg",
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Gurgaon" },
      { "@type": "AdministrativeArea", "name": "Delhi NCR" },
      { "@type": "Country", "name": "India" },
      { "@type": "Country", "name": "International" }
    ],
    "medicalSpecialty": "Psychiatric",
    "potentialAction": {
      "@type": "ScheduleAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.pramaancare.com/#book-appointment",
        "inLanguage": "en-IN",
        "actionPlatform": [
          "https://schema.org/DesktopWebPlatform",
          "https://schema.org/MobileWebPlatform"
        ]
      },
      "result": { "@type": "Event", "name": "Therapy Session" }
    },
    "contactPoint": [{
      "@type": "ContactPoint",
      "contactType": "Patient enquiries",
      "telephone": "+91-8860590449",
      "email": "info@pramaancare.com",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi"]
    }]
  };

  // Lead Clinician Schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ms. Prerna Sethi",
    "jobTitle": "RCI-Registered Clinical Psychologist",
    "affiliation": {
      "@type": "Organization",
      "name": "Pramaan Care",
      "url": "https://www.pramaancare.com/"
    },
    "hasCredential": "RCI Registration; M.Phil. Clinical Psychology",
    "knowsAbout": [
      "Cognitive Behavioral Therapy (CBT)",
      "Dialectical Behavior Therapy (DBT)",
      "Exposure and Response Prevention (ERP)",
      "Motivational Enhancement Therapy (MET)",
      "Expressive Arts Therapy"
    ]
  };

  // Services Schema
  const servicesSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Individual Counselling",
        "serviceType": "Psychological therapy",
        "provider": { "@type": "Organization", "name": "Pramaan Care" },
        "areaServed": "India"
      },
      {
        "@type": "Service",
        "name": "Couples / Relationship Counselling",
        "serviceType": "Psychological therapy",
        "provider": { "@type": "Organization", "name": "Pramaan Care" },
        "areaServed": "India"
      },
      {
        "@type": "Service",
        "name": "Family & Teen Counselling",
        "serviceType": "Psychological therapy",
        "provider": { "@type": "Organization", "name": "Pramaan Care" },
        "areaServed": "India"
      },
      {
        "@type": "Service",
        "name": "Corporate Mental Health & Wellbeing Programs",
        "serviceType": "Corporate wellbeing & assessments",
        "provider": { "@type": "Organization", "name": "Pramaan Care" },
        "areaServed": "India"
      },
      {
        "@type": "Service",
        "name": "Psychological Assessments",
        "serviceType": "Clinical assessment",
        "provider": { "@type": "Organization", "name": "Pramaan Care" },
        "areaServed": "India"
      }
    ]
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What should I expect in my first counselling session?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your first session focuses on understanding your concerns, goals, and history, followed by an initial plan for therapy."
        }
      },
      {
        "@type": "Question",
        "name": "How many sessions will I need?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Duration varies by concern and goals. Many clients notice progress within a few sessions; your therapist will review progress regularly."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer online counselling?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes—secure, end-to-end encrypted sessions are available across India and internationally."
        }
      },
      {
        "@type": "Question",
        "name": "Are these services for crisis or emergencies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. For emergencies, please contact local emergency services or a crisis helpline."
        }
      },
      {
        "@type": "Question",
        "name": "Is therapy confidential?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Sessions are confidential within ethical and legal limits which your therapist will explain."
        }
      }
    ]
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Pramaan Care",
    "url": "https://www.pramaancare.com/",
    "inLanguage": "en-IN"
  };

  return (
    <>
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}