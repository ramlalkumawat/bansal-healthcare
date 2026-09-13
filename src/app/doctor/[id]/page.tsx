import type { Metadata } from "next";
import { clinicData } from "@/data/clinic";
import DoctorDetailsView from "@/components/DoctorDetailsView";

export async function generateStaticParams() {
  return clinicData.doctors.map((doctor) => ({
    id: doctor.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const doctor = clinicData.doctors.find((d) => d.id === id);
  if (!doctor) {
    return { title: "Doctor Profile | Bansal Healthcare" };
  }

  const isPiyush = doctor.id === "dr-piyush-bansal";
  const doctorKeywords = isPiyush
    ? [
        "Dr piyush kumar bansal",
        "Pediatrics",
        "Child clinic",
        "Child healthcare",
        "Bansal clinic",
        "Bansal healthcare clinic",
        "Pediatrician Jagatpura Jaipur",
        "Child specialist Jaipur"
      ]
    : [
        "Dr Manisha Bansal",
        "Physiotherapy",
        "Bansal clinic",
        "Bansal healthcare clinic",
        "Physiotherapist Jagatpura Jaipur",
        "Physical Rehabilitation Jaipur"
      ];

  const desc = doctor.details?.aboutText
    ? `${doctor.details.aboutText.slice(0, 155)}...`
    : doctor.availabilityNote;

  return {
    title: `${doctor.name} (${doctor.qualifications}) | Bansal Healthcare Clinic`,
    description: `${doctor.name} - ${doctor.title}. ${desc}`,
    keywords: doctorKeywords,
    alternates: {
      canonical: `${clinicData.seo.url}/doctor/${doctor.id}`,
    },
    openGraph: {
      title: `${doctor.name} | Bansal Healthcare Clinic`,
      description: `${doctor.name} - ${doctor.title} in Jagatpura, Jaipur.`,
      url: `${clinicData.seo.url}/doctor/${doctor.id}`,
      type: "profile",
    },
  };
}

export default async function DoctorPage({ params }: PageProps) {
  const { id } = await params;
  const doctor = clinicData.doctors.find((d) => d.id === id);

  return <DoctorDetailsView doctor={doctor} id={id} />;
}
