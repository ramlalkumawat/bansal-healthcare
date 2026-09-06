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
          <div className="lg:col-span-8 bg-white border border-border-light rounded-[32px] overflow-hidden min-h-[350px] shadow-sm relative flex flex-col items-center justify-center p-8 group">
            
            {/* Visual Vector Grid suggesting local Jaipur maps */}
            <div className="absolute inset-0 bg-[radial-gradient(#DCE8EC_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-40 -z-10" />
            
            {/* Styled Abstract Road Layout to mimic a premium map preview */}
            <div className="absolute top-1/3 left-0 right-0 h-4 bg-border-light transform -rotate-12 -z-10" />
            <div className="absolute top-0 bottom-0 left-1/4 w-4 bg-border-light transform rotate-45 -z-10" />
            <div className="absolute top-1/2 left-10 w-24 h-24 rounded-full border-2 border-border-light bg-bg-light/40 -z-10" />

            {/* Pulsing Pin Indicator */}
            <div className="relative flex flex-col items-center mb-6">
              <div className="absolute -top-3 w-10 h-10 bg-accent/20 rounded-full animate-ping" />
              <div className="p-4 bg-primary text-white rounded-full shadow-lg border-2 border-white relative z-10">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
            </div>

              {/* Map Placeholder Headline */}
              <div className="text-center max-w-md space-y-4">
                <h3 className="text-lg font-bold text-primary">View Clinic Location</h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  {clinicData.address.fullAddress}
                </p>
                
                <div className="pt-2">
                  <a
                    href={clinicData.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary hover:bg-secondary text-white text-xs font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5 mr-2 text-accent" />
                    Open in Google Maps
                  </a>
                </div>
              </div>

              {/* Map Scale indicator */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-border-light text-[10px] font-bold text-text-muted flex items-center space-x-1.5">
                <Compass className="w-3.5 h-3.5 text-secondary" />
                <span>Jaipur, Jagatpura Zone</span>
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
                    {clinicData.address.street}, <br />
                    {clinicData.address.landmark}, <br />
                    {clinicData.address.area}, {clinicData.address.city}, {clinicData.address.state}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">
                    Key Landmark
                  </span>
                  <p className="text-xs font-medium text-text-muted leading-relaxed">
                    Conveniently situated on SKIT Road (Gali No. 5, Kusum Vihar), Jagatpura, making it simple to find for parents and physiotherapy patients.
                  </p>
                </div>

              <div className="border-t border-border-light pt-6">
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-2">
                  Need Help Navigating?
                </span>
                <p className="text-xs text-text-muted leading-relaxed">
                  Click below to generate turn-by-turn driving directions from your current GPS location directly to the clinic gate.
                </p>
              </div>
            </div>

            <a
              href={clinicData.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full inline-flex items-center justify-center py-3 px-4 rounded-2xl bg-accent text-white font-bold text-xs shadow-md hover:bg-secondary cursor-pointer transition-all active:scale-[0.98]"
            >
              <Navigation className="w-3.5 h-3.5 mr-2" />
              Get Driving Directions
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
