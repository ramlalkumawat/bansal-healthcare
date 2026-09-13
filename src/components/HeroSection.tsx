"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, MapPin, CheckCircle2, ShieldPlus, Stethoscope, Activity, Sparkles, ChevronRight } from "lucide-react";
import { clinicData } from "@/data/clinic";
import { motion, AnimatePresence } from "framer-motion";

interface HeroSectionProps {
  onOpenAppointment: () => void;
}

export default function HeroSection({ onOpenAppointment }: HeroSectionProps) {
  const [activeDoctor, setActiveDoctor] = useState<number>(0);

  const heroDoctors = [
    {
      id: "dr-piyush-bansal",
      name: "Dr. Piyush Kumar Bansal",
      title: "Consultant Pediatrician",
      qualifications: "MBBS, DCH, MIAP",
      hospital: "Consultant Pediatrician at JK Lon Hospital (SMS Medical College)",
      experience: "11+ Yrs Experience",
      badge: "Child Healthcare",
      shortRole: "Pediatrician",
      image: "/images/dr_piyush_bansal.jpg",
    },
    {
      id: "dr-manisha-bansal",
      name: "Dr. Manisha Bansal",
      title: "Consultant Physiotherapist",
      qualifications: "BPT, MIAP, DNHE",
      hospital: "Consultant Physiotherapist & Rehabilitation Specialist",
      experience: "8+ Yrs Experience",
      badge: "Physiotherapy & Rehab",
      shortRole: "Physiotherapist",
      image: "/images/dr_manisha_bansal.jpg",
    }
  ];

  const currentDoc = heroDoctors[activeDoctor];

  // Animation configurations
  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden bg-gradient-to-tr from-[#EBF4F6] via-bg-light to-[#F2F8F9]"
    >
      {/* Premium background decorative shapes */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-accent/5 filter blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-secondary/5 filter blur-3xl -z-10" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#DCE8EC_1px,transparent_1px),linear-gradient(to_bottom,#DCE8EC_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Text Content Grid (7 columns on desktop) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 sm:space-y-8 text-left"
          >

            {/* Main Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary leading-[1.1]"
            >
              Trusted Healthcare <br />
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                for Your Family
              </span>
            </motion.h1>

            {/* Supportive Subtext */}
            <motion.p
              variants={fadeInUp}
              className="text-[17px] sm:text-[19px] text-text-muted max-w-xl leading-relaxed font-normal"
            >
              Dr Bansal's Child & Physiotherapy Clinic in Jagatpura, Jaipur, providing professional healthcare services with convenient consultation hours for families.
            </motion.p>

            {/* Location Indicators */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-4 text-[15px] font-semibold text-text-dark"
            >
              <a
                href={clinicData.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Get directions to 247, Kusum Vihar, Lane 5, SKIT Road"
                className="flex items-center space-x-1.5 bg-white shadow-sm border border-border-light hover:border-accent px-3.5 py-1.5 rounded-full hover:shadow-md transition-all group cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-primary">SKIT Road, Jagatpura, Jaipur</span>
              </a>
              <div className="flex items-center space-x-1.5 bg-white shadow-sm border border-border-light px-3.5 py-1.5 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-secondary" />
                <span>Child & Physiotherapy Specialist</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={onOpenAppointment}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary hover:bg-secondary text-white font-bold text-base shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book an Appointment
              </button>
              <a
                href={clinicData.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white hover:bg-bg-light border border-border-light text-primary font-bold text-base shadow-sm hover:shadow-md transition-all duration-200 text-center"
              >
                Get Directions →
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image/Visual Grid (5 columns on desktop) */}
          <div className="lg:col-span-5 w-full max-w-[460px] mx-auto flex flex-col space-y-3.5">

            {/* Top Info Bar: Location & Open Status (Single clean line) */}
            <div className="flex items-center justify-between px-1 text-[13px] whitespace-nowrap">
              <a
                href={clinicData.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="View location on Google Maps"
                className="flex items-center space-x-1.5 text-text-dark hover:text-primary font-bold transition-colors cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-accent shrink-0" />
                <span>Jagatpura, Jaipur</span>
              </a>
              <a
                href="#timings"
                title="View Consultation Timings & Schedule"
                className="flex items-center space-x-1.5 text-emerald-800 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300/80 hover:border-emerald-400 px-2.5 py-0.5 rounded-full text-[12px] font-bold shrink-0 transition-all cursor-pointer shadow-xs active:scale-95"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                <span>Open Daily</span>
              </a>
            </div>

            {/* Doctor Switcher Tabs with Mini Avatars */}
            <div className="bg-white/95 backdrop-blur-md p-1.5 rounded-2xl shadow-sm border border-border-light grid grid-cols-2 gap-1.5 z-10">
              {heroDoctors.map((doc, index) => {
                const isActive = activeDoctor === index;
                return (
                  <button
                    key={doc.id}
                    type="button"
                    onClick={() => setActiveDoctor(index)}
                    className={`flex items-center space-x-2.5 p-2 rounded-xl transition-all duration-200 text-left cursor-pointer ${
                      isActive
                        ? "bg-primary text-white shadow-md"
                        : "hover:bg-slate-100 text-text-dark"
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-lg overflow-hidden shrink-0 border ${
                      isActive ? "border-white/40" : "border-border-light"
                    }`}>
                      <img
                        src={doc.image}
                        alt={doc.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className={`block text-[13px] font-bold truncate ${
                        isActive ? "text-white" : "text-primary"
                      }`}>
                        {index === 0 ? "Dr. Piyush" : "Dr. Manisha"}
                      </span>
                      <span className={`block text-[11px] font-medium truncate ${
                        isActive ? "text-emerald-200" : "text-text-muted"
                      }`}>
                        {doc.shortRole}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Main Interactive Doctor Card */}
            <div className="relative w-full aspect-[4/5] rounded-[28px] overflow-hidden shadow-2xl border-4 border-white bg-slate-950 group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentDoc.id}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="relative w-full h-full"
                >
                  {/* Doctor Real Photo */}
                  <img
                    src={currentDoc.image}
                    alt={currentDoc.name}
                    className="w-full h-full object-cover object-top filter brightness-[0.98] transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient overlay for bottom text contrast only, leaving top face completely clear */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Bottom Info Overlay (INSIDE card - keeps top of photo 100% clear for face) */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10 text-white space-y-2 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent pt-14">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between flex-wrap gap-1.5">
                        <div className="flex items-center space-x-1.5 text-emerald-300 text-[12px] font-semibold">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span>Available for Consultation</span>
                        </div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white/15 backdrop-blur-md text-emerald-200 border border-white/25 shadow-xs">
                          <Sparkles className="w-3 h-3 text-accent mr-1" />
                          {currentDoc.experience}
                        </span>
                      </div>
                      <h3 className="text-2xl font-extrabold tracking-tight text-white drop-shadow-sm">
                        {currentDoc.name}
                      </h3>
                      <p className="text-[13px] font-semibold text-emerald-300">
                        {currentDoc.title} • {currentDoc.qualifications}
                      </p>
                      <p className="text-[12px] text-white/85 font-normal line-clamp-1">
                        {currentDoc.hospital}
                      </p>
                    </div>

                    <div className="flex items-center gap-2.5 pt-1">
                      <button
                        type="button"
                        onClick={onOpenAppointment}
                        className="flex-1 py-2.5 px-4 rounded-xl bg-accent hover:bg-accent/90 text-white text-[13px] font-bold text-center shadow-md transition-all cursor-pointer hover:shadow-lg"
                      >
                        Book Appointment
                      </button>
                      <Link
                        href={`/doctor/${currentDoc.id}`}
                        className="py-2.5 px-3.5 rounded-xl bg-white/20 hover:bg-white/30 border border-white/25 text-white text-[13px] font-bold text-center transition-all flex items-center justify-center space-x-1 cursor-pointer"
                      >
                        <span>Profile</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Clean Trust Strip (Single Clean Line) */}
            <div className="flex items-center justify-center space-x-1.5 py-1 text-[12px] text-slate-600 font-semibold whitespace-nowrap">
              <ShieldPlus className="w-3.5 h-3.5 text-secondary shrink-0" />
              <span>Verified Medical Specialists</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
