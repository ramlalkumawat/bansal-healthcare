"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Stethoscope, Activity, ChevronRight } from "lucide-react";
import { clinicData } from "@/data/clinic";

export default function FloatingWhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      ref={widgetRef}
      className="fixed right-4 bottom-20 z-40 md:hidden flex flex-col items-end pointer-events-auto"
    >
      {/* Floating Doctor Chooser Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.92 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mb-3 w-72 sm:w-80 bg-white rounded-3xl shadow-2xl border border-emerald-200 overflow-hidden text-left"
          >
            {/* Popover Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-3.5 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-xs font-bold leading-tight">Chat with Doctors</h4>
                  <p className="text-[10px] text-emerald-100">Bansal Healthcare, Jagatpura</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Doctors WhatsApp List */}
            <div className="p-3 space-y-2 bg-slate-50/70">
              <p className="text-[11px] font-semibold text-slate-600 px-1">
                Select doctor to start WhatsApp chat:
              </p>

              {clinicData.doctors.map((doc) => {
                const isPiyush = doc.id === "dr-piyush-bansal";
                const whatsappNum = doc.whatsapp || clinicData.whatsapp;
                const cleanedWhatsapp = whatsappNum.replace(/[^0-9]/g, "");
                const waUrl = `https://wa.me/${cleanedWhatsapp}?text=Hello%20${encodeURIComponent(
                  doc.name
                )},%20I'd%20like%20to%20inquire%20about%20a%20consultation%20at%20Bansal%20Healthcare.`;

                return (
                  <a
                    key={doc.id}
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 p-2.5 rounded-2xl bg-white hover:bg-emerald-50/70 border border-border-light hover:border-emerald-300 transition-all shadow-xs group"
                  >
                    {/* Doctor Photo */}
                    <div className="w-11 h-11 rounded-xl overflow-hidden border border-emerald-200 shrink-0 bg-slate-200">
                      <img
                        src={isPiyush ? "/images/dr_piyush_bansal.jpg" : "/images/dr_manisha_bansal.jpg"}
                        alt={doc.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>

                    {/* Doctor Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1">
                        <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-emerald-100 text-emerald-800">
                          {isPiyush ? "Pediatrician" : "Physiotherapy"}
                        </span>
                      </div>
                      <h5 className="text-xs font-bold text-primary truncate mt-0.5 group-hover:text-emerald-700 transition-colors">
                        {doc.name}
                      </h5>
                      <span className="text-[10px] text-slate-500 font-medium block">
                        {whatsappNum}
                      </span>
                    </div>

                    <div className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 group-hover:bg-[#25D366] group-hover:text-white flex items-center justify-center transition-all shrink-0">
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="px-3 py-2 bg-emerald-50/60 border-t border-emerald-100 text-center">
              <span className="text-[10px] font-semibold text-emerald-800 flex items-center justify-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Direct Doctor WhatsApp Line
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Circular Floating WhatsApp Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_4px_20px_rgba(37,211,102,0.45)] active:scale-95 transition-all duration-200 cursor-pointer border-2 border-white"
        aria-label="Chat on WhatsApp with Doctors"
      >
        {/* Pulse Ring Indicator when closed */}
        {!isOpen && (
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping -z-10" />
        )}

        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <svg
            className="w-7 h-7 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
          </svg>
        )}
      </button>
    </div>
  );
}
