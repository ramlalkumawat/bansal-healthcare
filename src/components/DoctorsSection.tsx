"use client";

import { Calendar, Stethoscope, Activity, Sparkles, Check, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { clinicData } from "@/data/clinic";

interface DoctorsSectionProps {
  onOpenAppointment: (doctorId: string) => void;
}

export default function DoctorsSection({ onOpenAppointment }: DoctorsSectionProps) {
  const router = useRouter();

  return (
    <section id="doctors" className="py-20 bg-bg-light border-y border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold tracking-widest text-accent uppercase block">
            Our Medical Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
            Consult Qualified Specialists
          </h2>
          <p className="text-sm text-text-muted">
            Meet the Primary medical consultants at Dr Bansal's Child & Physiotherapy Clinic.
          </p>
        </div>

        {/* Profiles Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {clinicData.doctors.map((doctor) => {
            const isPiyush = doctor.id === "dr-piyush-bansal";
            const SpecialistIcon = isPiyush ? Stethoscope : Activity;
            const initials = isPiyush ? "PB" : "MB";

            return (
              <div
                key={doctor.id}
                onClick={() => router.push(`/doctor/${doctor.id}`)}
                className="bg-white rounded-3xl overflow-hidden border border-border-light shadow-sm hover:shadow-xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 flex flex-col text-left cursor-pointer group"
              >
                {/* Visual Top Showcase Image Area (2x Larger Full Portrait) */}
                <div className="relative w-full h-80 sm:h-96 bg-primary/10 overflow-hidden group">
                  <span className="absolute inset-0 flex items-center justify-center font-bold text-6xl text-primary/40">{initials}</span>
                  <img
                    src={`/images/${doctor.imagePlaceholder}.png`}
                    alt={doctor.name}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 z-10"
                    onError={(e) => {
                      e.currentTarget.style.opacity = "0";
                    }}
                  />
                  {/* Gradient Overlay for modern visual hierarchy */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071F26]/90 via-[#071F26]/20 to-transparent z-20" />
                  
                  {/* Floating Specialty Icon */}
                  <div className="absolute top-4 right-4 p-2.5 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg z-30">
                    <SpecialistIcon className="w-5 h-5 text-accent" />
                  </div>
                  
                  {/* Overlay Title & Doctor Name */}
                  <div className="absolute bottom-5 left-5 right-5 text-white z-30 space-y-1.5">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold bg-accent text-white uppercase tracking-wider shadow-sm">
                      {doctor.details?.experienceYears || "Specialist"} Years Clinical Experience
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow-md">{doctor.name}</h3>
                    <p className="text-xs sm:text-sm font-semibold text-emerald-300 uppercase tracking-wide">
                      {doctor.title} • {doctor.qualifications}
                    </p>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    {/* Qualifications */}
                    <div>
                      <span className="block text-[10px] font-bold text-text-muted uppercase tracking-wider mb-1">
                        Qualifications & Association
                      </span>
                      <p className="text-sm font-semibold text-text-dark">
                        {doctor.qualifications}
                      </p>
                    </div>

                    {/* Availability Note */}
                    <div>
                      <span className="block text-[10px] font-bold text-text-muted uppercase tracking-wider mb-1">
                        Consultation Focus
                      </span>
                      <p className="text-xs font-medium text-text-muted leading-relaxed">
                        {doctor.availabilityNote}
                      </p>
                    </div>

                    {/* Quick Schedule Overview */}
                    <div className="bg-bg-light/65 border border-border-light p-3.5 rounded-xl">
                      <span className="block text-[9px] font-bold text-text-muted uppercase tracking-wider mb-1.5">
                        Consultation Slots
                      </span>
                      <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-text-dark">
                        <div>
                          <span className="block text-[10px] text-text-muted font-medium">Mon – Sat:</span>
                          <span className="text-[11px]">{doctor.schedule.weekdays[0]} (+more)</span>
                        </div>
                        <div>
                          <span className="block text-[10px] text-text-muted font-medium">Sunday:</span>
                          <span className="text-[11px]">{doctor.schedule.sunday[0]}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      href={`/doctor/${doctor.id}`}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center justify-center py-2.5 px-3 rounded-xl border border-primary text-primary hover:bg-primary/5 font-bold text-xs shadow-sm transition-all active:scale-[0.98] cursor-pointer"
                    >
                      <User className="w-3.5 h-3.5 mr-1.5 shrink-0" />
                      View Profile
                    </Link>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenAppointment(doctor.id);
                      }}
                      className="inline-flex items-center justify-center py-2.5 px-3 rounded-xl bg-primary text-white hover:bg-secondary font-bold text-xs shadow-sm transition-all active:scale-[0.98] cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5 mr-1.5 shrink-0" />
                      Book Slot
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
