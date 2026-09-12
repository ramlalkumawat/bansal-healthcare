"use client";

import { Baby, HeartPulse, Stethoscope } from "lucide-react";
import { clinicData } from "@/data/clinic";

export default function ServicesSection() {
  // Mapping configuration data icon strings to Lucide Icon components
  const iconMap = {
    Baby: Baby,
    HeartPulse: HeartPulse,
    Stethoscope: Stethoscope,
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold tracking-widest text-accent uppercase block">
            Clinic Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
            Specialized Healthcare Services
          </h2>
          <p className="text-sm text-text-muted">
            We provide core medical services matching our practitioner qualifications.
          </p>
        </div>

        {/* Services Grid (Horizontal on desktop, stacked on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {clinicData.services.map((service) => {
            const IconComponent = iconMap[service.iconName];
            
            return (
              <div
                key={service.id}
                className="bg-emerald-50/80 border border-emerald-200/90 rounded-[24px] p-6 sm:p-8 flex flex-col items-start text-left shadow-sm hover:shadow-lg hover:border-emerald-400 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
              >
                {/* Decorative shape */}
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-emerald-200/50 rounded-full group-hover:scale-125 transition-transform duration-300" />
                
                {/* Icon Container */}
                <div className="p-4 bg-emerald-600 text-white rounded-2xl shadow-md mb-6 shrink-0 group-hover:bg-emerald-700 group-hover:scale-105 transition-all duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Service Details */}
                <h3 className="text-lg font-bold text-emerald-950 mb-3 group-hover:text-emerald-800 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-emerald-900/80 leading-relaxed flex-1 font-medium">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
