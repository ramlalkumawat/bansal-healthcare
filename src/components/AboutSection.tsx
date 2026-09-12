"use client";

import { MapPin, Shield, Star, Heart } from "lucide-react";
import { clinicData } from "@/data/clinic";

export default function AboutSection() {
  const highlights = [
    {
      icon: Shield,
      title: "Professional Care",
      desc: "Consultations under qualified practitioners following standards."
    },
    {
      icon: Heart,
      title: "Family Friendly",
      desc: "Designed with comfort in mind for child care and physiotherapy patients."
    },
    {
      icon: Star,
      title: "Honest Diagnostics",
      desc: "Dedicated to clear and transparent diagnoses for family health."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text / Info Content (7 columns on desktop) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-xs font-bold tracking-widest text-accent uppercase block">
              About Our Clinic
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
              Healthcare With a Personal Touch
            </h2>
            <p className="text-base sm:text-lg text-text-muted leading-relaxed">
              Bansal Healthcare brings together professional medical consultation and child & physiotherapy care in one convenient location in Jagatpura, Jaipur. Our aim to offer clinical excellence with an empathetic, patient-first approach.
            </p>

            {/* Core Values / Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="space-y-2">
                    <div className="w-10 h-10 rounded-lg bg-bg-light border border-border-light text-secondary flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-primary">{item.title}</h3>
                    <p className="text-xs text-text-muted leading-normal">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Cards Column (5 columns on desktop) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address Card */}
            <div className="bg-bg-light border border-border-light p-6 sm:p-8 rounded-[24px] shadow-sm relative overflow-hidden text-left">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full filter blur-xl" />
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary text-white rounded-xl shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-primary">Visit Our Clinic</h3>
                    <p className="text-xs text-text-muted font-medium mt-0.5">Physical Address in Jagatpura</p>
                  </div>
                  
                  <address className="not-italic text-sm text-text-dark font-medium leading-relaxed">
                    <span className="text-primary font-bold block">{clinicData.address.doctorName}</span>
                    {clinicData.address.street}, <br />
                    {clinicData.address.landmark}, <br />
                    {clinicData.address.area}, {clinicData.address.city} – {clinicData.address.pincode}, <br />
                    {clinicData.address.state}, {clinicData.address.country}
                  </address>

                  <div className="pt-2 flex flex-wrap gap-2">
                    <a
                      href={clinicData.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-accent hover:bg-secondary text-white text-xs font-bold shadow transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      Get Directions
                    </a>
                    <a
                      href={clinicData.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-white hover:bg-bg-light border border-border-light text-primary text-xs font-bold shadow-sm transition-all"
                    >
                      View on Map
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Clinic Quality Seal Card */}
            <div className="border border-border-light p-5 rounded-[20px] bg-white flex items-center space-x-4 text-left">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <p className="text-xs font-semibold text-text-dark">
                Morning & Evening Consultations • Easily accessible via SKIT Road (near 7 Junction)
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
