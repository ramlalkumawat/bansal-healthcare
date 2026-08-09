export interface Doctor {
  id: string;
  name: string;
  qualifications: string;
  title: string;
  availabilityNote: string;
  schedule: {
    weekdays: string[];
    sunday: string[];
  };
  imagePlaceholder: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: 'Baby' | 'HeartPulse' | 'Stethoscope';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const clinicData = {
  name: "Dr Bansal's Child & Physiotherapy Clinic",
  brandName: "Bansal Healthcare",
  phone: "+919214678687",
  whatsapp: "+919214678687",
  address: {
    street: "247, Kusum Vihar, Gali No. 5",
    landmark: "SKIT Road, Near 7 No. Chauraha",
    area: "Jagatpura",
    city: "Jaipur",
    state: "Rajasthan",
    country: "India",
    fullAddress: "247, Kusum Vihar, Gali No. 5, SKIT Road, Near 7 No. Chauraha, Jagatpura, Jaipur, Rajasthan, India"
  },
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Dr+Bansals+Child+Physiotherapy+Clinic+Jagatpura+Jaipur",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=247,+Kusum+Vihar,+Gali+No.+5,+SKIT+Road,+Near+7+No.+Chauraha,+Jagatpura,+Jaipur",
  timingsNote: "Please confirm availability before visiting.",
  doctors: [
    {
      id: "dr-piyush-bansal",
      name: "Dr. Piyush Bansal",
      qualifications: "MBBS, DCH, MIAP",
      title: "Consultant Pediatrician",
      availabilityNote: "Available for Child Healthcare & Medical Consultation",
      schedule: {
        weekdays: [
          "07:00 AM – 08:00 AM",
          "04:00 PM – 05:00 PM",
          "08:00 PM – 09:00 PM"
        ],
        sunday: [
          "07:30 AM – 08:30 AM",
          "01:00 PM – 02:00 PM"
        ]
      },
      imagePlaceholder: "dr_piyush_bansal"
    },
    {
      id: "dr-mahima-bansal",
      name: "Dr. Mahima Bansal",
      qualifications: "Dr Bansal's Child & Physiotherapy Clinic",
      title: "Consultant Physiotherapist",
      availabilityNote: "Available for Physiotherapy & Pediatric Care",
      schedule: {
        weekdays: [
          "09:00 AM – 01:00 PM",
          "04:00 PM – 08:00 PM"
        ],
        sunday: [
          "11:00 AM – 01:00 PM"
        ]
      },
      imagePlaceholder: "dr_mahima_bansal"
    }
  ] as Doctor[],
  services: [
    {
      id: "child-healthcare",
      title: "Child Healthcare",
      description: "Professional child-focused healthcare consultation.",
      iconName: "Baby"
    },
    {
      id: "physiotherapy",
      title: "Physiotherapy",
      description: "Physiotherapy care available through Dr Bansal's Child & Physiotherapy Clinic.",
      iconName: "HeartPulse"
    },
    {
      id: "medical-consultation",
      title: "Medical Consultation",
      description: "Consultation with Dr. Piyush Bansal.",
      iconName: "Stethoscope"
    }
  ] as Service[],
  faqs: [
    {
      id: "faq-location",
      question: "Where is Dr Bansal's Child & Physiotherapy Clinic located?",
      answer: "The clinic is located at 247, Kusum Vihar, Gali No. 5, SKIT Road, Near 7 No. Chauraha, Jagatpura, Jaipur, Rajasthan, India."
    },
    {
      id: "faq-timings-dr-piyush",
      question: "What are Dr. Piyush Bansal's consultation timings?",
      answer: "Dr. Piyush Bansal is available: Monday to Saturday: 7:00 AM – 8:00 AM, 4:00 PM – 5:00 PM, and 8:00 PM – 9:00 PM. Sunday: 7:30 AM – 8:30 AM and 1:00 PM – 2:00 PM."
    },
    {
      id: "faq-timings-clinic",
      question: "What are the clinic timings?",
      answer: "The general clinic timings (Dr. Mahima Bansal / Physiotherapy) are: Monday to Saturday: 9:00 AM – 1:00 PM and 4:00 PM – 8:00 PM. Sunday: 11:00 AM – 1:00 PM."
    },
    {
      id: "faq-doctors",
      question: "Who are the doctors at the clinic?",
      answer: "The clinic features Dr. Piyush Bansal (MBBS, DCH, MIAP) specializing in child healthcare, and Dr. Mahima Bansal providing physiotherapy and child care."
    },
    {
      id: "faq-confirm",
      question: "Should I confirm the timing before visiting?",
      answer: "Yes, availability can change. We highly recommend confirming timings before visiting the clinic."
    }
  ] as FAQItem[],
  seo: {
    title: "Bansal Healthcare | Child & Physiotherapy Clinic in Jagatpura, Jaipur",
    description: "Dr Bansal's Child & Physiotherapy Clinic in Jagatpura, Jaipur. View doctors, clinic timings, services, location and appointment information.",
    keywords: [
      "Child clinic in Jagatpura Jaipur",
      "Child doctor in Jagatpura Jaipur",
      "Pediatric consultation Jagatpura",
      "Physiotherapy clinic Jagatpura Jaipur",
      "Dr Piyush Bansal Jaipur",
      "Dr Mahima Bansal Jaipur",
      "Bansal Healthcare Jaipur",
      "Child & Physiotherapy Clinic Jaipur"
    ],
    url: "https://bansalhealthcare.co.in", // Placeholder production URL
    ogImage: "/images/og-image.jpg"
  }
};
