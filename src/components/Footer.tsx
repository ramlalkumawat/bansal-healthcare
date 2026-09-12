"use client";

import Link from "next/link";
import { clinicData } from "@/data/clinic";
import { ArrowUpRight, Phone, MessageSquare } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cleanedPhone = clinicData.whatsapp.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanedPhone}?text=Hello%20Dr%20Bansal's%20Clinic,%20I'd%20like%20to%20inquire%20about%20booking%20an%20appointment.`;

  return (
    <footer className="bg-[#071F26] text-white pt-16 pb-24 md:pb-8 border-t border-white/5 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Foot Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info Column (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <button 
              onClick={handleScrollToTop} 
              className="text-lg font-bold tracking-widest text-white uppercase text-left focus:outline-none cursor-pointer"
            >
              {clinicData.brandName}
            </button>
            <p className="text-xs text-white/60 leading-relaxed font-medium">
              {clinicData.name} <br />
              Providing professional pediatric care and physical rehabilitation services in Jaipur.
            </p>
          </div>

          {/* Quick Links Column (2 cols) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-accent">
              Clinic Links
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-white/75">
              <li>
                <Link href="/#home" className="hover:text-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-accent transition-colors">About</Link>
              </li>
              <li>
                <Link href="/#doctors" className="hover:text-accent transition-colors">Doctors</Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-accent transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/#timings" className="hover:text-accent transition-colors">Timings</Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-accent transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Doctors Column (2 cols) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-accent">
              Our Doctors
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-white/75">
              {clinicData.doctors.map((doc) => (
                <li key={doc.id}>
                  <Link href={`/doctor/${doc.id}`} className="hover:text-accent transition-colors">
                    {doc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Contact details (4 cols) */}
          <div className="md:col-span-4 space-y-6">
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-accent">
                Clinic Address
              </h4>
              <address className="not-italic text-xs text-white/75 leading-relaxed font-medium space-y-1">
                <span className="block text-white font-bold">{clinicData.address.doctorName}</span>
                <span className="block">{clinicData.address.street}</span>
                <span className="block">{clinicData.address.landmark}</span>
                <span className="block">{clinicData.address.area}, {clinicData.address.city} – {clinicData.address.pincode}</span>
                <span className="block">{clinicData.address.state}, {clinicData.address.country}</span>
              </address>
              <div className="pt-2 flex items-center space-x-4">
                <a
                  href={clinicData.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-bold text-accent hover:text-white transition-colors"
                >
                  <span>Get Directions</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </a>
                <a
                  href={clinicData.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold text-white/60 hover:text-white transition-colors"
                >
                  <span>Google Maps</span>
                  <ArrowUpRight className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>

            <div className="space-y-3 border-t border-white/5 pt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-accent">
                Contact Details
              </h4>
              <ul className="space-y-2 text-xs font-semibold text-white/75">
                <li>
                  <a
                    href={`tel:${clinicData.phone}`}
                    className="inline-flex items-center space-x-2 hover:text-accent transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-accent" />
                    <span>{clinicData.phone}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 hover:text-accent transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp Consultation</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Footer Sub-Info */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <p className="text-[11px] text-white/40">
              © {new Date().getFullYear()} {clinicData.brandName}. All rights reserved.
            </p>
          </div>

          {/* Medical Disclaimer block */}
          <div className="max-w-xl text-left border-l-2 border-accent pl-4 py-1">
            <span className="block text-[9px] font-bold uppercase tracking-wider text-accent mb-0.5">
              Medical Disclaimer
            </span>
            <p className="text-[10px] text-white/40 leading-normal">
              The website provides general clinic information and is not a substitute for professional medical advice, diagnosis or treatment. Always consult a certified medical practitioner regarding health conditions.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
