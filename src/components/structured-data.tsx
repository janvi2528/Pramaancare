"use client";

import { useEffect } from "react";

export function StructuredData() {
  useEffect(() => {
    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": ["Organization","MedicalOrganization","LocalBusiness"],
        "name": "Pramaan Care",
        "url": "https://www.pramaancare.com/",
        "email": "info@pramaancare.com",
        "telephone": "+91-8860590449",
        "logo": "https://www.pramaancare.com/images/light logo.svg",
        "image": "https://www.pramaancare.com/images/light logo.svg",
        "areaServed": [
          {"@type":"AdministrativeArea","name":"Gurgaon"},
          {"@type":"AdministrativeArea","name":"Delhi NCR"},
          {"@type":"Country","name":"India"},
          {"@type":"Country","name":"International"}
        ],
        "medicalSpecialty": "Psychiatric",
        "contactPoint": [{
          "@type": "ContactPoint",
          "contactType": "Patient enquiries",
          "telephone": "+91-8860590449",
          "email": "info@pramaancare.com",
          "areaServed": "IN",
          "availableLanguage": ["en","hi"]
        }]
      },
      {
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
      },
      {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Service",
            "name": "Individual Counselling",
            "serviceType": "Psychological therapy",
            "provider": {"@type":"Organization","name":"Pramaan Care"},
            "areaServed": "India"
          },
          {
            "@type": "Service",
            "name": "Couples / Relationship Counselling",
            "serviceType": "Psychological therapy",
            "provider": {"@type":"Organization","name":"Pramaan Care"},
            "areaServed": "India"
          },
          {
            "@type": "Service",
            "name": "Family & Teen Counselling",
            "serviceType": "Psychological therapy",
            "provider": {"@type":"Organization","name":"Pramaan Care"},
            "areaServed": "India"
          },
          {
            "@type": "Service",
            "name": "Corporate Mental Health & Wellbeing Programs",
            "serviceType": "Corporate wellbeing & assessments",
            "provider": {"@type":"Organization","name":"Pramaan Care"},
            "areaServed": "India"
          },
          {
            "@type": "Service",
            "name": "Psychological Assessments",
            "serviceType": "Clinical assessment",
            "provider": {"@type":"Organization","name":"Pramaan Care"},
            "areaServed": "India"
          }
        ]
      }
    ];

    schemas.forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      script.id = `schema-${index}`;
      document.head.appendChild(script);
    });

    return () => {
      schemas.forEach((_, index) => {
        const script = document.getElementById(`schema-${index}`);
        if (script) script.remove();
      });
    };
  }, []);

  return null;
}