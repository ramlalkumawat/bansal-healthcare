"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageSquare, X, Stethoscope, Activity } from "lucide-react";
import { clinicData } from "@/data/clinic";

interface CallDoctorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CallDoctorModal({ isOpen, onClose }: CallDoctorModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Click outside to close
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          onClick={handleBackdropClick}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            ref={modalRef}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-border-light z-10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="call-modal-title"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-text-muted hover:text-text-dark hover:bg-bg-light rounded-full transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="p-6 pb-4 border-b border-border-light/70 bg-gradient-to-br from-primary/5 via-secondary/5 to-white">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-2xl shadow-xs">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h2 id="call-modal-title" className="text-xl sm:text-2xl font-extrabold text-primary">
                    Choose Doctor to Call
                  </h2>
                  <p className="text-xs text-text-muted font-medium mt-0.5">
                    Select a specialist to connect directly via phone or WhatsApp
                  </p>
                </div>
              </div>
            </div>

            {/* Doctor Options List */}
            <div className="p-5 sm:p-6 space-y-4">
              {clinicData.doctors.map((doc, idx) => {
                const isPiyush = doc.id === "dr-piyush-bansal";
                const phoneNum = doc.phone || clinicData.phone;
                const whatsappNum = doc.whatsapp || clinicData.whatsapp;
                const cleanedWhatsapp = whatsappNum.replace(/[^0-9]/g, "");
                const waUrl = `https://wa.me/${cleanedWhatsapp}?text=Hello%20${encodeURIComponent(
                  doc.name
                )},%20I'd%20like%20to%20inquire%20about%20a%20consultation%20at%20Bansal%20Healthcare.`;

                return (
                  <div
                    key={doc.id}
                    className="p-4 rounded-2xl border border-border-light bg-bg-light/40 hover:bg-white hover:border-emerald-300 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-center gap-3.5 mb-3.5">
                      {/* Doctor Photo */}
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border-2 border-emerald-200/80 shadow-xs shrink-0 bg-slate-200">
                        <img
                          src={isPiyush ? "/images/dr_piyush_bansal.jpg" : "/images/dr_manisha_bansal.jpg"}
                          alt={doc.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>

                      {/* Doctor Title & Speciality */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                            {isPiyush ? (
                              <>
                                <Stethoscope className="w-3 h-3 mr-1 text-emerald-600" />
                                Child Specialist
                              </>
                            ) : (
                              <>
                                <Activity className="w-3 h-3 mr-1 text-emerald-600" />
                                Physiotherapist
                              </>
                            )}
                          </span>
                          <span className="text-[11px] font-semibold text-text-muted">
                            {doc.qualifications}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-primary truncate mt-0.5">
                          {doc.name}
                        </h3>
                        <p className="text-xs font-semibold text-emerald-700 mt-0.5 flex items-center gap-1">
                          <Phone className="w-3 h-3" />
                          <span>{phoneNum}</span>
                        </p>
                      </div>
                    </div>

                    {/* Action Buttons for this doctor */}
                    <div className="grid grid-cols-2 gap-2.5 pt-1 border-t border-border-light/70">
                      <a
                        href={`tel:${phoneNum}`}
                        onClick={onClose}
                        className="inline-flex items-center justify-center py-2.5 px-3 rounded-xl bg-primary hover:bg-secondary text-white font-bold text-xs shadow-xs hover:shadow-md transition-all active:scale-[0.98] cursor-pointer"
                      >
                        <Phone className="w-3.5 h-3.5 mr-1.5 text-emerald-300" />
                        <span>Call Doctor</span>
                      </a>
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={onClose}
                        className="inline-flex items-center justify-center py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-xs hover:shadow-md transition-all active:scale-[0.98] cursor-pointer"
                      >
                        <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Modal Footer Note */}
            <div className="px-6 py-3 bg-bg-light/60 border-t border-border-light text-center">
              <p className="text-[11px] text-text-muted font-medium">
                Clinic Location: Kusum Vihar, Lane 5, SKIT Road, Jagatpura, Jaipur
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
