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
  authors: [{ name: "Dr. Piyush Kumar Bansal" }, { name: "Dr. Manisha Bansal" }],
  creator: "Bansal Healthcare Clinic",
  publisher: "Bansal Healthcare Clinic",
  alternates: {
    canonical: clinicData.seo.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        "alternateName": [
          "Bansal Clinic",
          "Bansal Healthcare Clinic",
          "Bansal Healthcare",
          "Child Clinic Jagatpura"
        ],
        "url": clinicData.seo.url,
        "logo": `${clinicData.seo.url}/images/logo.png`,
        "image": `${clinicData.seo.url}/images/og-image.jpg`,
        "description": clinicData.seo.description,
        "keywords": clinicData.seo.keywords.join(", "),
        "medicalSpecialty": ["Pediatrics", "Physiotherapy", "Child Healthcare"],
        "knowsAbout": [
          "Bansal clinic",
          "Child clinic",
          "Bansal healthcare clinic",
          "Dr piyush kumar bansal",
          "Dr Manisha Bansal",
          "Physiotherapy",
          "Pediatrics",
          "Child healthcare"
        ],
        "hasMap": clinicData.mapUrl,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": `${clinicData.address.street}, ${clinicData.address.landmark}`,
          "addressLocality": clinicData.address.area,
          "addressRegion": clinicData.address.city,
          "postalCode": clinicData.address.pincode,
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
        "name": "Dr. Piyush Kumar Bansal",
        "jobTitle": "Consultant Pediatrician",
        "medicalSpecialty": "Pediatrics",
        "knowsAbout": [
          "Pediatrics",
          "Child healthcare",
          "Child clinic",
          "Newborn & Infant Care",
          "Immunization & Vaccination"
        ],
        "telephone": clinicData.doctors[0].phone,
        "hasMap": clinicData.mapUrl,
        "worksFor": {
          "@type": "MedicalClinic",
          "@id": `${clinicData.seo.url}/#clinic`
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": `${clinicData.address.street}, ${clinicData.address.landmark}`,
          "addressLocality": clinicData.address.area,
          "addressRegion": clinicData.address.city,
          "postalCode": clinicData.address.pincode,
          "addressCountry": "IN"
        }
      },
      {
        "@type": "Physician",
        "@id": `${clinicData.seo.url}/#dr-manisha-bansal`,
        "name": "Dr. Manisha Bansal",
        "jobTitle": "Consultant Physiotherapist",
        "medicalSpecialty": "Physiotherapy",
        "knowsAbout": [
          "Physiotherapy",
          "Physical Rehabilitation",
          "Pain Management",
          "Orthopedic Physiotherapy"
        ],
        "telephone": clinicData.doctors[1].phone,
        "hasMap": clinicData.mapUrl,
        "worksFor": {
          "@type": "MedicalClinic",
          "@id": `${clinicData.seo.url}/#clinic`
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": `${clinicData.address.street}, ${clinicData.address.landmark}`,
          "addressLocality": clinicData.address.area,
          "addressRegion": clinicData.address.city,
          "postalCode": clinicData.address.pincode,
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
