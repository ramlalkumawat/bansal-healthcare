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
  const otherDoc = heroDoctors[activeDoctor === 0 ? 1 : 0];

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
              className="text-base sm:text-lg text-text-muted max-w-xl leading-relaxed"
            >
              Dr Bansal's Child & Physiotherapy Clinic in Jagatpura, Jaipur, providing professional healthcare services with convenient consultation hours for families.
            </motion.p>

            {/* Location Indicators */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-4 text-sm font-semibold text-text-dark"
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
          <div className="lg:col-span-5 relative flex flex-col items-center w-full max-w-[460px] mx-auto">

            {/* Doctor Switcher Tabs */}
            <div className="flex items-center p-1.5 bg-white/90 backdrop-blur-md rounded-2xl shadow-sm border border-border-light mb-4 w-full justify-between gap-1 z-20">
              <button
                type="button"
                onClick={() => setActiveDoctor(0)}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all duration-200 flex items-center justify-center space-x-1.5 cursor-pointer ${
                  activeDoctor === 0
                    ? "bg-primary text-white shadow-md"
                    : "text-text-muted hover:text-primary hover:bg-primary/5"
                }`}
              >
                <Stethoscope className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">Dr. Piyush (Child)</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveDoctor(1)}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all duration-200 flex items-center justify-center space-x-1.5 cursor-pointer ${
                  activeDoctor === 1
                    ? "bg-primary text-white shadow-md"
                    : "text-text-muted hover:text-primary hover:bg-primary/5"
                }`}
              >
                <Activity className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">Dr. Manisha (Physio)</span>
              </button>
            </div>

            {/* Main Interactive Doctor Card Container */}
            <div className="relative w-full aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentDoc.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="relative w-full h-full"
                >
                  {/* Doctor Real Photo */}
                  <img
                    src={currentDoc.image}
                    alt={currentDoc.name}
                    className="w-full h-full object-cover object-top filter brightness-[0.98] transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient overlays for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-slate-950/20 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-md text-primary shadow-md border border-white/60">
                      <Sparkles className="w-3.5 h-3.5 text-accent mr-1.5" />
                      {currentDoc.experience}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-primary/85 backdrop-blur-md text-white shadow-md">
                      {currentDoc.badge}
                    </span>
                  </div>

                  {/* Bottom Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 text-white space-y-3 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent pt-12">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[11px] font-semibold text-emerald-300 uppercase tracking-wider">
                          Consultation Available
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white drop-shadow-sm">
                        {currentDoc.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-accent">
                        {currentDoc.title} • {currentDoc.qualifications}
                      </p>
                      <p className="text-xs text-white/75 font-light leading-relaxed pt-0.5">
                        {currentDoc.hospital}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                      <button
                        type="button"
                        onClick={onOpenAppointment}
                        className="flex-1 py-2.5 px-4 rounded-xl bg-accent hover:bg-accent/90 text-white text-xs font-bold text-center shadow-lg transition-all cursor-pointer hover:shadow-xl"
                      >
                        Book Appointment
                      </button>
                      <Link
                        href={`/doctor/${currentDoc.id}`}
                        className="py-2.5 px-4 rounded-xl bg-white/15 hover:bg-white/25 border border-white/20 text-white text-xs font-bold text-center transition-all flex items-center justify-center space-x-1 cursor-pointer"
                      >
                        <span>Profile</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Overlapping Floating Secondary Doctor Mini-Card */}
            <motion.button
              type="button"
              onClick={() => setActiveDoctor(activeDoctor === 0 ? 1 : 0)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="absolute -bottom-6 -left-3 sm:-left-6 z-30 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 shadow-xl border border-border-light flex items-center space-x-3 cursor-pointer hover:shadow-2xl transition-all max-w-[260px] text-left group"
            >
              <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border-2 border-accent/40">
                <img
                  src={otherDoc.image}
                  alt={otherDoc.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="min-w-0 pr-1">
                <span className="block text-[10px] font-bold text-accent uppercase tracking-wider">
                  Also At Clinic
                </span>
                <span className="block text-xs font-extrabold text-primary truncate">
                  {otherDoc.name}
                </span>
                <span className="block text-[11px] text-text-muted truncate">
                  {otherDoc.shortRole} • Click to switch
                </span>
              </div>
            </motion.button>

            {/* Subtle Floating Verified Badge (Top-Right) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="absolute -top-3 -right-3 sm:-right-5 z-30 bg-white/95 backdrop-blur-md shadow-lg border border-border-light py-2 px-3.5 rounded-2xl flex items-center space-x-2"
            >
              <ShieldPlus className="w-4 h-4 text-secondary" />
              <div className="text-left">
                <p className="text-[11px] font-bold text-primary leading-tight">
                  Jagatpura, Jaipur
                </p>
                <p className="text-[9px] text-text-muted">
                  Bansal Healthcare Clinic
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
