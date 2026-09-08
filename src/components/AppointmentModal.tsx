"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, Calendar, User, Phone, MessageSquare, Clock, ShieldCheck, RefreshCw, Send, CheckCircle2 } from "lucide-react";
import { clinicData } from "@/data/clinic";
import { submitAppointment, AppointmentData } from "@/utils/api";
import { generateAppointmentWhatsAppUrl, WhatsAppAppointmentResult } from "@/utils/whatsapp";
import { motion, AnimatePresence } from "framer-motion";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDoctorId?: string;
}

export default function AppointmentModal({
  isOpen,
  onClose,
  defaultDoctorId = "",
}: AppointmentModalProps) {
  const [patientName, setPatientName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [doctor, setDoctor] = useState(defaultDoctorId);
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [loadTime, setLoadTime] = useState<number>(0);

  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [waDetails, setWaDetails] = useState<WhatsAppAppointmentResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [generalError, setGeneralError] = useState("");

  const modalRef = useRef<HTMLDivElement>(null);

  // Set form load time to detect bot speeds
  useEffect(() => {
    if (isOpen) {
      setLoadTime(Date.now());
      setSuccess(false);
      setWaDetails(null);
      setErrors({});
      setGeneralError("");
      // Reset inputs if it is reopened
      setPatientName("");
      setPhoneNumber("");
      setDoctor(defaultDoctorId);
      setPreferredDate("");
      setPreferredTime("");
      setMessage("");
      setHoneypot("");

      // Disable body scroll when modal is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, defaultDoctorId]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});
    setGeneralError("");

    const formData: AppointmentData = {
      patientName,
      phoneNumber,
      doctor,
      preferredDate,
      preferredTime,
      message,
      websiteHoneypot: honeypot,
      formLoadTime: loadTime,
    };

    try {
      const response = await submitAppointment(formData);
      if (response.success) {
        // Generate doctor-specific WhatsApp URL with all form details
        const generatedWa = generateAppointmentWhatsAppUrl(formData);
        setWaDetails(generatedWa);
        setSuccess(true);

        // Automatically open WhatsApp in a new tab/app window
        try {
          if (typeof window !== "undefined") {
            window.open(generatedWa.whatsappUrl, "_blank", "noopener,noreferrer");
          }
        } catch {
          // If popup is blocked by browser, the user can click the button on the success screen
        }
      } else {
        if (response.errors) {
          setErrors(response.errors);
        } else {
          setGeneralError(response.message);
        }
      }
    } catch (err) {
      setGeneralError("Something went wrong. Please try again or call the clinic directly.");
    } finally {
      setIsLoading(false);
    }
  };

  const selectedDoctorObj = clinicData.doctors.find((d) => d.id === doctor);
  const todayStr = new Date().toISOString().split("T")[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary/45 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            ref={modalRef}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-border-light z-10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-text-muted hover:text-text-dark hover:bg-bg-light rounded-full transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content Container */}
            <div className="p-6 sm:p-8">
              {!success ? (
                <>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-accent/10 text-accent rounded-xl">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 id="modal-title" className="text-xl sm:text-2xl font-bold text-primary">
                        Book an Appointment
                      </h2>
                      <p className="text-xs text-text-muted">
                        Request a consultation slot at Jagatpura clinic.
                      </p>
                    </div>
                  </div>

                  {generalError && (
                    <div className="mb-4 p-3 bg-red-50 text-red-700 text-sm rounded-xl border border-red-150 font-medium">
                      {generalError}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Honeypot field (hidden from screen reader and visual users) */}
                    <div className="absolute opacity-0 pointer-events-none -z-10" aria-hidden="true">
                      <input
                        type="text"
                        name="websiteHoneypot"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                        tabIndex={-1}
                        autoComplete="off"
                        placeholder="Do not fill this if you are human"
                      />
                    </div>

                    {/* Patient Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-text-dark mb-1">
                        Patient Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                        <input
                          type="text"
                          required
                          value={patientName}
                          onChange={(e) => setPatientName(e.target.value)}
                          placeholder="Enter patient full name"
                          className={`w-full pl-10 pr-4 py-2.5 rounded-xl border ${
                            errors.patientName ? "border-red-500 bg-red-50/20" : "border-border-light bg-bg-light/50"
                          } focus:border-accent focus:bg-white text-sm text-text-dark font-medium transition-all outline-none`}
                        />
                      </div>
                      {errors.patientName && (
                        <p className="text-xs text-red-500 mt-1 font-semibold">{errors.patientName}</p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-text-dark mb-1">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                        <input
                          type="tel"
                          required
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          placeholder="Enter 10-digit mobile number"
                          className={`w-full pl-10 pr-4 py-2.5 rounded-xl border ${
                            errors.phoneNumber ? "border-red-500 bg-red-50/20" : "border-border-light bg-bg-light/50"
                          } focus:border-accent focus:bg-white text-sm text-text-dark font-medium transition-all outline-none`}
                        />
                      </div>
                      {errors.phoneNumber && (
                        <p className="text-xs text-red-500 mt-1 font-semibold">{errors.phoneNumber}</p>
                      )}
                    </div>

                    {/* Doctor Selection */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-text-dark mb-1">
                        Select Doctor
                      </label>
                      <select
                        required
                        value={doctor}
                        onChange={(e) => setDoctor(e.target.value)}
                        className={`w-full px-3 py-2.5 rounded-xl border ${
                          errors.doctor ? "border-red-500" : "border-border-light bg-bg-light/50"
                        } focus:border-accent focus:bg-white text-sm text-text-dark font-medium transition-all outline-none`}
                      >
                        <option value="">-- Select Doctor --</option>
                        {clinicData.doctors.map((doc) => (
                          <option key={doc.id} value={doc.id}>
                            {doc.name} ({doc.title})
                          </option>
                        ))}
                      </select>
                      {errors.doctor && (
                        <p className="text-xs text-red-500 mt-1 font-semibold">{errors.doctor}</p>
                      )}

                      {/* Doctor Routing Notification Pill */}
                      {selectedDoctorObj && (
                        <div className="mt-2 p-2.5 bg-emerald-50 border border-emerald-200/80 rounded-xl flex items-center justify-between text-xs text-emerald-800">
                          <div className="flex items-center space-x-2">
                            <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span className="font-medium">
                              Details will go to: <strong className="font-bold">{selectedDoctorObj.name}</strong> ({selectedDoctorObj.whatsapp || clinicData.whatsapp})
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Date and Time Slot Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-text-dark mb-1">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          required
                          min={todayStr}
                          value={preferredDate}
                          onChange={(e) => setPreferredDate(e.target.value)}
                          className={`w-full px-3 py-2.5 rounded-xl border ${
                            errors.preferredDate ? "border-red-500 bg-red-50/20" : "border-border-light bg-bg-light/50"
                          } focus:border-accent focus:bg-white text-sm text-text-dark font-medium transition-all outline-none`}
                        />
                        {errors.preferredDate && (
                          <p className="text-xs text-red-500 mt-1 font-semibold">{errors.preferredDate}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-text-dark mb-1">
                          Preferred Time
                        </label>
                        <select
                          required
                          value={preferredTime}
                          onChange={(e) => setPreferredTime(e.target.value)}
                          className={`w-full px-3 py-2.5 rounded-xl border ${
                            errors.preferredTime ? "border-red-500" : "border-border-light bg-bg-light/50"
                          } focus:border-accent focus:bg-white text-sm text-text-dark font-medium transition-all outline-none`}
                        >
                          <option value="">-- Select Time --</option>
                          <option value="morning">Morning Session</option>
                          <option value="afternoon">Afternoon Session</option>
                          <option value="evening">Evening Session</option>
                        </select>
                        {errors.preferredTime && (
                          <p className="text-xs text-red-500 mt-1 font-semibold">{errors.preferredTime}</p>
                        )}
                      </div>
                    </div>

                    {/* Notes/Message */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-text-dark mb-1">
                        Reason for Visit / Note (Optional)
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-text-muted" />
                        <textarea
                          rows={2}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Briefly describe health concerns or request details..."
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border-light bg-bg-light/50 focus:border-accent focus:bg-white text-sm text-text-dark font-medium transition-all outline-none resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full inline-flex items-center justify-center py-3.5 px-4 rounded-xl bg-accent text-white font-bold text-sm shadow-md hover:shadow-lg hover:bg-secondary cursor-pointer transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                          Scheduling & Preparing WhatsApp...
                        </>
                      ) : (
                        <>
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Request & Send to Doctor's WhatsApp
                        </>
                      )}
                    </button>

                    <p className="text-[10px] text-text-muted text-center leading-normal">
                      Form submit karte hi details chuninda doctor ke WhatsApp par automatically bhej di jayengi confirmation ke liye.
                    </p>
                  </form>
                </>
              ) : (
                <div className="py-4 text-center flex flex-col items-center">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-3 border border-emerald-100 shadow-sm">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <h2 className="text-xl sm:text-2xl font-extrabold text-primary mb-1">
                    Appointment Request Ready!
                  </h2>

                  <p className="text-xs text-text-muted max-w-sm mx-auto mb-4">
                    Aapki appointment details <span className="font-bold text-text-dark">{waDetails?.doctorName}</span> ke WhatsApp ke liye prepare ho chuki hain.
                  </p>

                  {/* Summary Box */}
                  <div className="w-full bg-bg-light border border-border-light rounded-2xl p-4 text-left space-y-2 mb-4 text-xs">
                    <div className="flex justify-between items-center pb-2 border-b border-border-light">
                      <span className="text-text-muted font-medium">Selected Doctor:</span>
                      <span className="font-bold text-primary">{waDetails?.doctorName}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-text-muted font-medium">Patient Name:</span>
                      <span className="font-semibold text-text-dark">{patientName}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-text-muted font-medium">Phone Number:</span>
                      <span className="font-semibold text-text-dark">{phoneNumber}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-text-muted font-medium">Date & Slot:</span>
                      <span className="font-semibold text-text-dark">{preferredDate} • {waDetails?.timeSlotLabel}</span>
                    </div>
                    {message && (
                      <div className="flex justify-between items-start pt-1.5 border-t border-border-light/60">
                        <span className="text-text-muted font-medium shrink-0 mr-2">Reason:</span>
                        <span className="font-medium text-text-dark text-right truncate max-w-[200px]">{message}</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center pt-2 border-t border-border-light text-[11px] text-emerald-700 font-semibold">
                      <span>Target WhatsApp:</span>
                      <span>{waDetails?.targetPhone}</span>
                    </div>
                  </div>

                  {/* WhatsApp Action Button */}
                  {waDetails?.whatsappUrl && (
                    <a
                      href={waDetails.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer mb-3"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Continue to WhatsApp / Send Now
                    </a>
                  )}

                  <p className="text-[11px] text-text-muted mb-4 leading-relaxed">
                    Agar WhatsApp automatically open nahi hua ho toh upar diye gaye green button par click karein.
                  </p>

                  <button
                    onClick={onClose}
                    className="px-6 py-2 bg-bg-light hover:bg-border-light text-text-dark font-bold rounded-xl text-xs transition-colors cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
