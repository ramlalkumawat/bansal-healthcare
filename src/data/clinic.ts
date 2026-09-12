export interface DoctorDetail {
  degrees: string[];
  currentWork: string;
  memberships: string[];
  experienceYears: number;
  aboutText: string;
  specializations: string[];
}

export interface Doctor {
  id: string;
  name: string;
  qualifications: string;
  title: string;
  availabilityNote: string;
  phone?: string;
  whatsapp?: string;
  schedule: {
    weekdays: string[];
    sunday: string[];
  };
  imagePlaceholder: string;
  details?: DoctorDetail;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: 'Baby' | 'Activity' | 'HeartPulse' | 'Stethoscope' | 'Syringe';
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
    doctorName: "Dr Piyush Bansal",
    street: "247, Kusum Vihar, Lane 5",
    landmark: "Junction, SKIT Road, near 7",
    area: "Jagatpura",
    city: "Jaipur",
    state: "Rajasthan",
    pincode: "302017",
    country: "India",
    fullAddress: "Dr Piyush Bansal, 247, Kusum Vihar, Lane 5, Junction, SKIT Road, near 7, Jagatpura, Jaipur, Rajasthan 302017"
  },
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Dr+Piyush+Bansal,+247,+Kusum+Vihar,+Lane+5,+Junction,+SKIT+Road,+near+7,+Jagatpura,+Jaipur,+Rajasthan+302017",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Dr+Piyush+Bansal,+247,+Kusum+Vihar,+Lane+5,+Junction,+SKIT+Road,+near+7,+Jagatpura,+Jaipur,+Rajasthan+302017",
  mapEmbedUrl: "https://maps.google.com/maps?q=Dr+Piyush+Bansal,+247,+Kusum+Vihar,+Lane+5,+Junction,+SKIT+Road,+near+7,+Jagatpura,+Jaipur,+Rajasthan+302017&t=&z=16&ie=UTF8&iwloc=&output=embed",
  timingsNote: "Please confirm availability before visiting.",
  doctors: [
    {
      id: "dr-piyush-bansal",
      name: "Dr. Piyush Kumar Bansal",
      qualifications: "MBBS, DCH, MIAP",
      title: "Consultant Pediatrician",
      availabilityNote: "Available for Child Healthcare & Medical Consultation",
      phone: "+919214678687",
      whatsapp: "+919214678687",
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
      imagePlaceholder: "dr_piyush_bansal",
      details: {
        degrees: [
          "MBBS (SMS Medical College, Jaipur)",
          "DCH (S.P. Medical College, Bikaner)"
        ],
        currentWork: "Currently working in J K Lon Hospital (SMS Medical College), Jaipur since July 2018 as a Consultant Pediatrician.",
        memberships: [
          "Life Member - Indian Academy of Pediatrics (IAP)"
        ],
        experienceYears: 11,
        aboutText: "Dr. Piyush Kumar Bansal is a highly accomplished Consultant Pediatrician with 11 years of professional experience in pediatric care. He is dedicated to providing comprehensive and compassionate medical care for infants, children, and adolescents. Currently serving as a Consultant Pediatrician at J K Lon Hospital (SMS Medical College), Jaipur, he is recognized for his expert clinical diagnostics and patient-first approach to child health.",
        specializations: [
          "Newborn & Infant Care",
          "Child Growth & Development Monitoring",
          "Immunization & Vaccination",
          "Pediatric Asthma & Allergy Care",
          "Childhood Nutrition & Diet Advice",
          "Common Childhood Infection Treatment"
        ]
      }
    },
    {
      id: "dr-manisha-bansal",
      name: "Dr. Manisha Bansal",
      qualifications: "BPT, MIAP, DNHE",
      title: "Consultant Physiotherapist",
      availabilityNote: "Available for Physiotherapy & Pediatric Care",
      phone: "+919214678687",
      whatsapp: "+919214678687",
      schedule: {
        weekdays: [
          "09:00 AM – 01:00 PM",
          "04:00 PM – 08:00 PM"
        ],
        sunday: [
          "11:00 AM – 01:00 PM"
        ]
      },
      imagePlaceholder: "dr_manisha_bansal",
      details: {
        degrees: [
          "BPT (Bachelor of Physiotherapy)",
          "DNHE (Diploma in Nutrition and Health Education)"
        ],
        currentWork: "Consultant Physiotherapist at Dr Bansal's Child & Physiotherapy Clinic, specializing in pediatric rehabilitation, pain management, and nutritional guidance.",
        memberships: [
          "Member - Indian Association of Physiotherapists (MIAP)"
        ],
        experienceYears: 8,
        aboutText: "Dr. Manisha Bansal is a skilled Consultant Physiotherapist with a warm and patient-focused treatment approach. She specializes in designing personalized physical therapy and rehabilitation programs for children and adults. With 8 years of experience, she helps patients restore strength, mobility, and function following injuries, surgeries, or neuromusculoskeletal disorders.",
        specializations: [
          "Pediatric Physical Therapy",
          "Post-Surgical Rehabilitation",
          "Orthopedic Physical Therapy",
          "Neurological Rehabilitation",
          "Joint Pain & Arthritis Management",
          "Posture & Spinal Care Correction"
        ]
      }
    }
  ] as Doctor[],
  services: [
    {
      id: "child-healthcare",
      title: "Child Healthcare",
      description: "Professional child-focused healthcare consultation offered by Dr. Piyush Bansal.",
      iconName: "Baby"
    },
    {
      id: "physiotherapy",
      title: "Physiotherapy",
      description: "Physiotherapy care available through Dr Manisha Bansal's Child & Physiotherapy Clinic.",
      iconName: "Activity"
    },
    {
      id: "vaccination",
      title: "Vaccination",
      description: "Child vaccination services provided by Dr. Piyush Bansal.",
      iconName: "Syringe"
    }
  ] as Service[],
  faqs: [
    {
      id: "faq-location",
      question: "Where is Dr Bansal's Child & Physiotherapy Clinic located?",
      answer: "The clinic is located at Dr Piyush Bansal, 247, Kusum Vihar, Lane 5, Junction, SKIT Road, near 7, Jagatpura, Jaipur, Rajasthan 302017."
    },
    {
      id: "faq-timings-dr-piyush",
      question: "What are Dr. Piyush Bansal's consultation timings?",
      answer: "Dr. Piyush Bansal is available: Monday to Saturday: 7:00 AM – 8:00 AM, 4:00 PM – 5:00 PM, and 8:00 PM – 9:00 PM. Sunday: 7:30 AM – 8:30 AM and 1:00 PM – 2:00 PM."
    },
    {
      id: "faq-timings-clinic",
      question: "What are the clinic timings?",
      answer: "The general clinic timings (Dr. Manisha Bansal / Physiotherapy) are: Monday to Saturday: 9:00 AM – 1:00 PM and 4:00 PM – 8:00 PM. Sunday: 11:00 AM – 1:00 PM."
    },
    {
      id: "faq-doctors",
      question: "Who are the doctors at the clinic?",
      answer: "The clinic features Dr. Piyush Bansal (MBBS, DCH, MIAP) specializing in child healthcare, and Dr. Manisha Bansal (BPT, MIAP, DNHE) providing physiotherapy and rehabilitation care."
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
      "Dr Manisha Bansal Jaipur",
      "Bansal Healthcare Jaipur",
      "Child & Physiotherapy Clinic Jaipur"
    ],
    url: "https://bansalhealthcare.co.in", // Placeholder production URL
    ogImage: "images/og-image.jpg"
  }
};
