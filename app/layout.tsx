import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';

export const metadata: Metadata = {
  title: 'Strachwitz Consulting - Ihr Partner für nachhaltiges Wachstum im Mittelstand',
  description: 'Interim Management, KI-Beratung und Geschäftsentwicklung für den deutschen Mittelstand. Expertise in Vertriebsführung, Digitalisierung und Internationalisierung.',
  keywords: 'Interim Management, KI-Beratung, Geschäftsentwicklung, Mittelstand, Vertriebsführung, Digitalisierung, Internationalisierung',
  authors: [{ name: 'António Freiherr von Strachwitz' }],
  creator: 'Strachwitz Consulting',
  publisher: 'Strachwitz Consulting',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://strachwitz-consulting.de'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Strachwitz Consulting - Ihr Partner für nachhaltiges Wachstum im Mittelstand',
    description: 'Interim Management, KI-Beratung und Geschäftsentwicklung für den deutschen Mittelstand.',
    url: 'https://strachwitz-consulting.de',
    siteName: 'Strachwitz Consulting',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strachwitz Consulting - Ihr Partner für nachhaltiges Wachstum im Mittelstand',
    description: 'Interim Management, KI-Beratung und Geschäftsentwicklung für den deutschen Mittelstand.',
  },
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de-DE">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#001f3f" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <CookieBanner />
        
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Strachwitz Consulting",
              "url": "https://strachwitz-consulting.de",
              "logo": "https://strachwitz-consulting.de/logo.png",
              "description": "Interim Management, KI-Beratung und Geschäftsentwicklung für den deutschen Mittelstand",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Castell",
                "addressRegion": "Bayern",
                "addressCountry": "DE"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "German"
              },
              "sameAs": [
                "https://www.linkedin.com/company/strachwitz-consulting"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
