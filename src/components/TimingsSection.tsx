"use client";

import { Clock, Info, CalendarClock, ShieldAlert } from "lucide-react";
import { clinicData } from "@/data/clinic";

export default function TimingsSection() {
  return (
    <section id="timings" className="py-20 bg-bg-light border-y border-border-light text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold tracking-widest text-accent uppercase block">
            Clinic Schedule
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
            Consultation Hours
          </h2>
          <p className="text-sm text-text-muted">
            Separate timings are maintained for child care, physiotherapy, and general consultations.
          </p>
        </div>

        {/* Warning Indicator Banner */}
        <div className="max-w-4xl mx-auto mb-10 bg-amber-50 border border-amber-250 p-4 rounded-2xl flex items-start space-x-3 text-amber-900 shadow-sm">
          <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1 text-sm">
            <span className="font-bold">Important Notice:</span>
            <span className="ml-1 text-amber-800">
              {clinicData.timingsNote} Consultation availability may vary due to medical emergencies or holiday schedules.
            </span>
          </div>
        </div>

        {/* Timings Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {clinicData.doctors.map((doctor) => {
            const isPiyush = doctor.id === "dr-piyush-bansal";

            return (
              <div
                key={doctor.id}
                className="bg-white rounded-3xl border border-border-light shadow-sm overflow-hidden flex flex-col justify-between"
              >
                {/* Card Title Header */}
                <div className="p-6 bg-primary text-white flex items-center space-x-4">
                  <div className="p-2.5 bg-white/10 rounded-xl">
                    <CalendarClock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold tracking-tight">{doctor.name}</h3>
                    <p className="text-xs text-white/70 font-semibold uppercase tracking-wider mt-0.5">
                      {isPiyush ? "Pediatrics & Medicine" : "Physiotherapy & General"}
                    </p>
                  </div>
                </div>

                {/* Card Schedule Body */}
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Monday - Saturday */}
                  <div className="space-y-2.5">
                    <div className="flex items-center space-x-2 border-b border-border-light pb-2">
                      <span className="text-sm font-bold text-primary">Monday – Saturday</span>
                      <span className="text-[10px] bg-secondary/10 text-secondary px-2 py-0.5 rounded-full font-bold">
                        6 Days a week
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {doctor.schedule.weekdays.map((slot, idx) => (
                        <li key={idx} className="flex items-center text-sm font-semibold text-text-dark space-x-3">
                          <Clock className="w-4 h-4 text-accent shrink-0" />
                          <span>{slot}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Sunday */}
                  <div className="space-y-2.5">
                    <div className="flex items-center space-x-2 border-b border-border-light pb-2">
                      <span className="text-sm font-bold text-primary">Sunday Sessions</span>
                      <span className="text-[10px] bg-amber-500/10 text-amber-600 px-2 py-0.5 rounded-full font-bold">
                        Special slot
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {doctor.schedule.sunday.map((slot, idx) => (
                        <li key={idx} className="flex items-center text-sm font-semibold text-text-dark space-x-3">
                          <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                          <span>{slot}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer reminder */}
                <div className="bg-bg-light/80 px-6 py-4 border-t border-border-light flex items-center space-x-2 text-xs text-text-muted font-medium">
                  <Info className="w-3.5 h-3.5 text-accent" />
                  <span>Appointments scheduled in sessions.</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
