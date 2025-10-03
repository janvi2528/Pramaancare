import type {Metadata} from 'next';
import './globals.css';
import './optimized.css';
import { Toaster } from "@/components/ui/toaster"
import { StructuredData } from "@/components/structured-data"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { PerformanceOptimizerV2 } from "@/components/performance-optimizer-v2"
import { MobilePerformance } from "@/components/mobile-performance"
import { CriticalPerformance } from "@/components/critical-performance"
import LenisProvider from "@/components/lenis-provider"

export const metadata: Metadata = {
  title: 'Clinical Psychologist in Gurgaon & Delhi NCR | Pramaan Care',
  description: 'RCI-registered clinical psychologist offering counselling in Gurgaon & East of Kailash, Delhi NCR, plus secure online therapy across India. Book a session today.',
  keywords: [
    'clinical psychologist Gurgaon',
    'counselling Delhi NCR',
    'online therapy India',
    'couples therapy Gurgaon',
    'adolescent counselling',
    'psychological assessment'
  ],
  authors: [{ name: 'Pramaan Care' }],
  creator: 'Pramaan Care',
  publisher: 'Pramaan Care',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.pramaancare.com/',
    title: 'Clinical Psychologist in Gurgaon & Delhi NCR | Pramaan Care',
    description: 'RCI-registered clinical psychologist offering counselling in Gurgaon & East of Kailash, Delhi NCR, plus secure online therapy across India. Book a session today.',
    siteName: 'Pramaan Care',
    images: [
      {
        url: '/images/light logo.svg',
        width: 1200,
        height: 630,
        alt: 'Pramaan Care – Clinical Psychology & Counselling',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clinical Psychologist in Gurgaon & Delhi NCR | Pramaan Care',
    description: 'Compassionate counselling & online therapy by an RCI-registered clinical psychologist.',
    images: ['/images/light logo.svg'],
  },
  verification: {
    // Add verification codes when available
    // google: 'your-google-verification-code',
    // bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: 'https://www.pramaancare.com/',
  },
  category: 'health',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.pramaancare.com/" />
        <link rel="alternate" href="https://www.pramaancare.com/" hrefLang="en-in" />
        <link rel="alternate" href="https://www.pramaancare.com/" hrefLang="x-default" />
        <link rel="icon" href="/images/Fevicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preload" href="/images/about-prerna.webp" as="image" />
        <link rel="preload" href="https://cdn.shopify.com/s/files/1/0581/7198/1896/files/Three.png?v=1756186294" as="image" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://cdn.shopify.com" />
        <style dangerouslySetInnerHTML={{__html: `
          @font-face {
            font-family: 'Forum';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/forum/v18/6aey4Ky-Vb8Ew_IWMJMa3mnT.woff2) format('woff2');
          }
          @font-face {
            font-family: 'Plus Jakarta Sans';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_qU79TR_VbQ.woff2) format('woff2');
          }
        `}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
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
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
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
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
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
        })}} />
      </head>
      <body className="font-body antialiased">
        <LenisProvider>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:px-4 focus:py-2 focus:bg-background focus:text-foreground">
            Skip to main content
          </a>
          {children}
          <Toaster />
          <StructuredData />
          <Analytics />
          <SpeedInsights />
          <PerformanceOptimizerV2 />
          <MobilePerformance />
          <CriticalPerformance />
        </LenisProvider>
      </body>
    </html>
  );
}
