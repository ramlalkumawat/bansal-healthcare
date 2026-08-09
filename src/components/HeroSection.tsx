"use client";

import { Calendar, MapPin, Sparkles, CheckCircle2, ShieldPlus } from "lucide-react";
import { clinicData } from "@/data/clinic";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onOpenAppointment: () => void;
}

export default function HeroSection({ onOpenAppointment }: HeroSectionProps) {
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
            {/* Tag / Eyebrow */}
            <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/10 px-3 py-1.5 rounded-full">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-[11px] sm:text-xs font-bold tracking-widest text-primary uppercase">
                {clinicData.brandName}
              </span>
            </motion.div>

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
              <div className="flex items-center space-x-1.5 bg-white shadow-sm border border-border-light px-3.5 py-1.5 rounded-full">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Jagatpura, Jaipur</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-white shadow-sm border border-border-light px-3.5 py-1.5 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-secondary" />
                <span>Child & Physiotherapy Specialists</span>
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
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Premium Placeholder Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-[400px] aspect-[4/5] rounded-[32px] overflow-hidden bg-gradient-to-br from-primary/95 to-secondary shadow-2xl border-4 border-white flex flex-col justify-between p-8 text-white"
            >
              {/* Graphic Overlay shapes */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/20 rounded-full filter blur-2xl -z-10" />
              <div className="absolute bottom-0 left-0 w-36 h-36 bg-white/10 rounded-full filter blur-xl -z-10" />

              {/* Card Top Branding */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-widest text-accent uppercase">
                  Est. Clinic Location
                </span>
                <ShieldPlus className="w-8 h-8 text-accent animate-pulse" />
              </div>

              {/* Card Middle Placeholder Message */}
              <div className="my-auto space-y-3">
                <div className="w-12 h-1 bg-accent rounded" />
                <h3 className="text-2xl font-bold tracking-tight">
                  Dr Bansal's Clinic
                </h3>
                <p className="text-sm text-white/80 leading-relaxed font-light">
                  A premium medical space customized for pediatric health care, physical rehabilitation, and clinical consultations.
                </p>
                <span className="inline-block text-xs bg-white/10 border border-white/15 px-3 py-1 rounded-md text-white font-medium">
                  Photo placeholder (Insert clinic image here)
                </span>
              </div>

              {/* Card Bottom Address summary */}
              <div className="text-xs text-white/70 border-t border-white/10 pt-4 flex items-center justify-between">
                <span>Jaipur, Rajasthan</span>
                <span className="font-bold text-accent">BANSAL HEALTHCARE</span>
              </div>
            </motion.div>

            {/* Subtle Floating Info Cards */}
            {/* Card 1: Experienced Medical Care */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -right-4 top-10 hidden sm:flex items-center space-x-2 bg-white/95 backdrop-blur-md shadow-lg border border-border-light py-2.5 px-4 rounded-2xl max-w-[200px]"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-accent shrink-0" />
              <p className="text-xs font-bold text-primary leading-tight">
                Experienced Medical Care
              </p>
            </motion.div>

            {/* Card 2: Child & Physiotherapy Care */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -left-6 bottom-16 hidden sm:flex items-center space-x-2 bg-white/95 backdrop-blur-md shadow-lg border border-border-light py-2.5 px-4 rounded-2xl max-w-[200px]"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-secondary shrink-0" />
              <p className="text-xs font-bold text-primary leading-tight">
                Child & Physiotherapy Care
              </p>
            </motion.div>

            {/* Card 3: Jagatpura, Jaipur */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute bottom-4 right-10 hidden sm:flex items-center space-x-2 bg-white/95 backdrop-blur-md shadow-md border border-border-light py-2 px-3.5 rounded-xl"
            >
              <span className="text-[10px] font-bold text-text-muted">
                Jagatpura, Jaipur
              </span>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
