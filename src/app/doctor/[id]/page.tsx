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

export default async function DoctorPage({ params }: PageProps) {
  const { id } = await params;
  const doctor = clinicData.doctors.find((d) => d.id === id);

  return <DoctorDetailsView doctor={doctor} id={id} />;
}
