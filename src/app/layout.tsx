import type {Metadata} from 'next';
import './globals.css';
import './optimized.css';
import { Toaster } from "@/components/ui/toaster"
import { StructuredData } from "@/components/structured-data"
import { Analytics } from "@vercel/analytics/next"
import { PerformanceOptimizerV2 } from "@/components/performance-optimizer-v2"
import { MobilePerformance } from "@/components/mobile-performance"
import { CriticalPerformance } from "@/components/critical-performance"
import LenisProvider from "@/components/lenis-provider"

export const metadata: Metadata = {
  title: {
    default: 'Pramaan Care - Professional Mental Health & Counseling Services',
    template: '%s | Pramaan Care'
  },
  description: 'Professional mental health counseling and psychological services in Delhi & Gurgaon. Individual therapy, couples counseling, family therapy, corporate wellness, and psychological assessments. Both in-person and online sessions available.',
  keywords: [
    'mental health counseling',
    'therapy Delhi',
    'psychology services Gurgaon',
    'couples therapy',
    'family counseling',
    'corporate wellness',
    'psychological assessment',
    'online therapy India',
    'mental health support',
    'counseling services'
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
    url: 'https://pramaancare.com',
    title: 'Pramaan Care - Professional Mental Health & Counseling Services',
    description: 'Professional mental health counseling and psychological services in Delhi & Gurgaon. Individual therapy, couples counseling, family therapy, corporate wellness, and psychological assessments.',
    siteName: 'Pramaan Care',
    images: [
      {
        url: '/images/light logo.svg',
        width: 1200,
        height: 630,
        alt: 'Pramaan Care - Mental Health Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pramaan Care - Professional Mental Health & Counseling Services',
    description: 'Professional mental health counseling and psychological services in Delhi & Gurgaon.',
    images: ['/images/light logo.svg'],
  },
  verification: {
    // Add verification codes when available
    // google: 'your-google-verification-code',
    // bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: 'https://pramaancare.com',
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
        <link rel="icon" href="/images/Fevicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preload" href="/images/Meet Ms. Prerna Sethi.jpg" as="image" />
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
          <PerformanceOptimizerV2 />
          <MobilePerformance />
          <CriticalPerformance />
        </LenisProvider>
      </body>
    </html>
  );
}
