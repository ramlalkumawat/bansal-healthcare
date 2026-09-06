import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { clinicData } from "@/data/clinic";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(clinicData.seo.url),
  title: clinicData.seo.title,
  description: clinicData.seo.description,
  keywords: clinicData.seo.keywords,
  alternates: {
    canonical: clinicData.seo.url,
  },
  openGraph: {
    title: clinicData.seo.title,
    description: clinicData.seo.description,
    url: clinicData.seo.url,
    siteName: clinicData.brandName,
    images: [
      {
        url: clinicData.seo.ogImage,
        width: 1200,
        height: 630,
        alt: clinicData.name,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: clinicData.seo.title,
    description: clinicData.seo.description,
    images: [clinicData.seo.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Define local SEO Structured Data JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": `${clinicData.seo.url}/#clinic`,
        "name": clinicData.name,
        "alternateName": clinicData.brandName,
        "url": clinicData.seo.url,
        "logo": `${clinicData.seo.url}/images/logo.png`,
        "image": `${clinicData.seo.url}/images/og-image.jpg`,
        "description": clinicData.seo.description,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": `${clinicData.address.street}, ${clinicData.address.landmark}`,
          "addressLocality": clinicData.address.area,
          "addressRegion": clinicData.address.city,
          "addressCountry": "IN"
        },
        "telephone": clinicData.phone || undefined,
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "07:00",
            "closes": "21:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Sunday",
            "opens": "07:30",
            "closes": "20:00"
          }
        ]
      },
      {
        "@type": "Physician",
        "@id": `${clinicData.seo.url}/#dr-piyush-bansal`,
        "name": "Dr. Piyush Bansal",
        "medicalSpecialty": "Pediatric",
        "worksFor": {
          "@type": "MedicalClinic",
          "@id": `${clinicData.seo.url}/#clinic`
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": `${clinicData.address.street}, ${clinicData.address.landmark}`,
          "addressLocality": clinicData.address.area,
          "addressRegion": clinicData.address.city,
          "addressCountry": "IN"
        }
      },
      {
        "@type": "Physician",
        "@id": `${clinicData.seo.url}/#dr-manisha-bansal`,
        "name": "Dr. Manisha Bansal",
        "medicalSpecialty": "Physiotherapy",
        "worksFor": {
          "@type": "MedicalClinic",
          "@id": `${clinicData.seo.url}/#clinic`
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": `${clinicData.address.street}, ${clinicData.address.landmark}`,
          "addressLocality": clinicData.address.area,
          "addressRegion": clinicData.address.city,
          "addressCountry": "IN"
        }
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Inject JSON-LD structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
