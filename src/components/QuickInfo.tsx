"use client";

import { MapPin, User, Activity, Clock } from "lucide-react";
import { clinicData } from "@/data/clinic";

export default function QuickInfo() {
  const infoCards = [
    {
      id: "location",
      label: "Clinic Location",
      value: "Jagatpura, Jaipur",
      icon: MapPin,
      colorClass: "text-accent bg-accent/10",
      description: `${clinicData.address.street}, ${clinicData.address.landmark}`,
      href: clinicData.directionsUrl,
      actionText: "Get Directions →"
    },
    {
      id: "pediatrician",
      label: "Child Healthcare",
      value: "Dr. Piyush Bansal",
      icon: User,
      colorClass: "text-primary bg-primary/10",
      description: "MBBS, DCH, MIAP",
      href: "/doctor/dr-piyush-bansal",
      actionText: "View Profile →"
    },
    {
      id: "physiotherapist",
      label: "Physiotherapy",
      value: "Dr. Manisha Bansal",
      icon: Activity,
      iconImage: "/images/medical_cross_green.png",
      colorClass: "text-secondary bg-secondary/10",
      description: "BPT, MIAP, DNHE",
      href: "/doctor/dr-manisha-bansal",
      actionText: "View Profile →"
    },
    {
      id: "timings",
      label: "Convenient Timings",
      value: "Morning & Evening",
      icon: Clock,
      colorClass: "text-emerald-600 bg-emerald-50",
      description: "Sessions available daily",
      href: "/#timings",
      actionText: "Check Schedule →"
    }
  ];

  return (
    <div className="relative z-10 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Scrollable Container on Mobile, Grid on Desktop */}
      <div className="flex md:grid md:grid-cols-4 gap-4 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory scrollbar-none">
        {infoCards.map((card) => {
          const Icon = card.icon;
          const CardContent = (
            <>
              <div className={`p-3 rounded-xl shrink-0 flex items-center justify-center ${card.colorClass}`}>
                {"iconImage" in card && card.iconImage ? (
                  <img src={card.iconImage as string} alt={card.label} className="w-6 h-6 object-contain" />
                ) : (
                  <Icon className="w-5 h-5" />
                )}
              </div>
              <div className="space-y-1 text-left flex-1 min-w-0">
                <span className="block text-[11px] font-bold text-text-muted uppercase tracking-wider">
                  {card.label}
                </span>
                <span className="block text-sm font-bold text-primary">
                  {card.value}
                </span>
                <span className="block text-xs text-text-muted line-clamp-2">
                  {card.description}
                </span>
                {card.actionText && (
                  <span className="inline-block text-[11px] font-bold text-accent pt-1">
                    {card.actionText}
                  </span>
                )}
              </div>
            </>
          );

          if (card.href.startsWith("http")) {
            return (
              <a
                key={card.id}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[260px] md:min-w-0 flex-1 snap-start bg-white p-5 rounded-2xl shadow-md border border-border-light flex items-start space-x-4 hover:shadow-lg hover:border-accent/30 transition-all duration-300 group cursor-pointer"
              >
                {CardContent}
              </a>
            );
          }

          return (
            <a
              key={card.id}
              href={card.href}
              className="min-w-[260px] md:min-w-0 flex-1 snap-start bg-white p-5 rounded-2xl shadow-md border border-border-light flex items-start space-x-4 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group cursor-pointer"
            >
              {CardContent}
            </a>
          );
        })}
      </div>
    </div>
  );
}
