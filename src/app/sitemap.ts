import { MetadataRoute } from "next";
import { clinicData } from "@/data/clinic";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: clinicData.seo.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
