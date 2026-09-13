import { MetadataRoute } from "next";
import { clinicData } from "@/data/clinic";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: clinicData.seo.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...clinicData.doctors.map((doctor) => ({
      url: `${clinicData.seo.url}/doctor/${doctor.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
  ];
}
