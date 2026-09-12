"use client";

import { Map, MapPin, Navigation, Compass, ExternalLink } from "lucide-react";
import { clinicData } from "@/data/clinic";

export default function LocationSection() {
  return (
    <section id="contact" className="py-20 bg-bg-light border-y border-border-light text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold tracking-widest text-accent uppercase block">
            Clinic Direction
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
            Find Us in Jagatpura
          </h2>
          <p className="text-sm text-text-muted">
            Located near major junctions in Jagatpura, Jaipur. Accessible via public and private transport.
          </p>
        </div>

        {/* Outer Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Map Placement Card (8 columns on desktop) */}
          <div className="lg:col-span-8 bg-white border border-border-light rounded-[32px] overflow-hidden min-h-[420px] shadow-sm relative flex flex-col group">
            <iframe
              title="Dr Piyush Bansal Clinic Location Map"
              src={clinicData.mapEmbedUrl}
              className="w-full h-full min-h-[420px] border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Floating Location Badge */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-border-light shadow-md flex items-center space-x-2.5 pointer-events-none">
              <div className="p-1.5 rounded-xl bg-accent/10 text-accent">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-primary">{clinicData.address.doctorName}</p>
                <p className="text-[10px] text-text-muted">Kusum Vihar, Lane 5, SKIT Road, Jagatpura</p>
              </div>
            </div>

            {/* Floating Open in Google Maps CTA */}
            <div className="absolute bottom-4 right-4">
              <a
                href={clinicData.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary/95 hover:bg-secondary text-white text-xs font-bold shadow-lg backdrop-blur-md transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5 mr-1.5 text-accent" />
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* Location details card (4 columns on desktop) */}
          <div className="lg:col-span-4 bg-white border border-border-light rounded-[32px] p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">
                  Full Address
                </span>
                <p className="text-sm font-semibold text-text-dark leading-relaxed">
                  <span className="text-primary font-bold block">{clinicData.address.doctorName}</span>
                  {clinicData.address.street}, <br />
                  {clinicData.address.landmark}, <br />
                  {clinicData.address.area}, {clinicData.address.city}, <br />
                  {clinicData.address.state} – {clinicData.address.pincode}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">
                  Key Landmark
                </span>
                <p className="text-xs font-medium text-text-muted leading-relaxed">
                  Conveniently situated at 247, Kusum Vihar, Lane 5, Junction, SKIT Road (near 7), Jagatpura, Jaipur. Accessible via public and private transit.
                </p>
              </div>

              <div className="border-t border-border-light pt-5">
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1.5">
                  Need Turn-by-Turn Navigation?
                </span>
                <p className="text-xs text-text-muted leading-relaxed">
                  Tap below to launch live GPS turn-by-turn driving directions from your location directly to the clinic.
                </p>
              </div>
            </div>

            <a
              href={clinicData.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full inline-flex items-center justify-center py-3.5 px-4 rounded-2xl bg-accent text-white font-bold text-xs shadow-md hover:bg-secondary cursor-pointer transition-all active:scale-[0.98]"
            >
              <Navigation className="w-4 h-4 mr-2" />
              Get Driving Directions
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
