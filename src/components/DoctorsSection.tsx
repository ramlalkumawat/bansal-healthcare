"use client";

import { Calendar, Stethoscope, Activity, Sparkles, Check, User } from "lucide-react";
import Link from "next/link";
import { clinicData } from "@/data/clinic";

interface DoctorsSectionProps {
  onOpenAppointment: (doctorId: string) => void;
}

export default function DoctorsSection({ onOpenAppointment }: DoctorsSectionProps) {
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
            Meet the primary medical consultants at Dr Bansal's Child & Physiotherapy Clinic.
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
                className="bg-white rounded-3xl overflow-hidden border border-border-light shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col text-left"
              >
                {/* Visual Header / Avatar Area */}
                <div className="p-6 bg-gradient-to-br from-primary/5 via-secondary/5 to-white flex items-center space-x-5 border-b border-border-light">
                  {/* Doctor Portrait Image with Initials Fallback */}
                  <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-inner relative overflow-hidden">
                    <span className="absolute inset-0 flex items-center justify-center">{initials}</span>
                    <img
                      src={`images/${doctor.imagePlaceholder}.png`}
                      alt={doctor.name}
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                      onError={(e) => {
                        e.currentTarget.style.opacity = "0";
                      }}
                    />
                    <div className="absolute bottom-0 right-0 p-1 bg-accent text-white rounded-tl-lg shadow z-10">
                      <SpecialistIcon className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-bold text-primary">{doctor.name}</h3>
                    <p className="text-xs font-bold text-secondary uppercase tracking-wide">
                      {doctor.title}
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
                      className="inline-flex items-center justify-center py-2.5 px-3 rounded-xl border border-primary text-primary hover:bg-primary/5 font-bold text-xs shadow-sm transition-all active:scale-[0.98] cursor-pointer"
                    >
                      <User className="w-3.5 h-3.5 mr-1.5 shrink-0" />
                      View Profile
                    </Link>
                    <button
                      onClick={() => onOpenAppointment(doctor.id)}
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
