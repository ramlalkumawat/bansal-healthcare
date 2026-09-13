"use client";

import { Phone, MapPin, Calendar } from "lucide-react";
import { clinicData } from "@/data/clinic";

interface FloatingMobileActionsProps {
  onOpenAppointment: () => void;
  onOpenCallModal?: () => void;
}

export default function FloatingMobileActions({ onOpenAppointment, onOpenCallModal }: FloatingMobileActionsProps) {
  const handleCallClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onOpenCallModal) {
      onOpenCallModal();
    } else if (clinicData.phone) {
      window.location.href = `tel:${clinicData.phone}`;
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-border-light shadow-[0_-4px_16px_rgba(0,0,0,0.06)] px-4 py-3">
      <div className="grid grid-cols-3 gap-3">
        {/* Call Action */}
        <button
          type="button"
          onClick={handleCallClick}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-bg-light border border-border-light text-primary hover:text-accent active:bg-border-light transition-all cursor-pointer"
        >
          <Phone className="w-5 h-5 mb-0.5 text-secondary" />
          <span className="text-[10px] font-bold">Call Clinic</span>
        </button>

        {/* Directions Action */}
        <a
          href={clinicData.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-bg-light border border-border-light text-primary hover:text-accent active:bg-border-light transition-all"
        >
          <MapPin className="w-5 h-5 mb-0.5 text-accent" />
          <span className="text-[10px] font-bold">Directions</span>
        </a>

        {/* Appointment Action */}
        <button
          onClick={onOpenAppointment}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-primary text-white hover:bg-secondary active:scale-[0.97] transition-all cursor-pointer"
        >
          <Calendar className="w-5 h-5 mb-0.5 text-white" />
          <span className="text-[10px] font-bold">Book Slot</span>
        </button>
      </div>
    </div>
  );
}
