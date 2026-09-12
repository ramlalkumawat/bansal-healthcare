"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Calendar,
  Phone,
  MessageSquare,
  Clock,
  ArrowLeft,
  GraduationCap,
  Briefcase,
  Award,
  Check,
  Stethoscope,
  Activity,
  Heart,
  ChevronRight,
  Camera,
  X,
  ChevronLeft,
  ZoomIn,
  MapPin,
  Navigation
} from "lucide-react";
import { Doctor, clinicData } from "@/data/clinic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingMobileActions from "@/components/FloatingMobileActions";
import FloatingSidebarActions from "@/components/FloatingSidebarActions";
import AppointmentModal from "@/components/AppointmentModal";

interface DoctorDetailsViewProps {
  doctor: Doctor | undefined;
  id: string;
}

const piyushGalleryImages = [
  { src: "/images/piyush_gallery_1.jpg", alt: "Dr. Piyush Bansal examining a child with stethoscope", caption: "Pediatric Consultation" },
  { src: "/images/piyush_gallery_2.jpg", alt: "Dr. Piyush Bansal providing treatment to child", caption: "Child Care & Treatment" },
  { src: "/images/piyush_gallery_3.jpg", alt: "Dr. Piyush Bansal consulting with a young patient", caption: "Patient Consultation" },
  { src: "/images/piyush_gallery_4.jpg", alt: "Physiotherapy treatment room at Bansal Healthcare", caption: "Physiotherapy Room" },
  { src: "/images/piyush_gallery_5.jpg", alt: "Waiting area at Dr Bansal's Clinic", caption: "Clinic Waiting Area" },
];

const manishaGalleryImages = [
  { src: "/images/manisha_gallery_1.jpg", alt: "Physiotherapy equipment - exercise balls and dumbbells", caption: "Physiotherapy Equipment" },
  { src: "/images/manisha_gallery_2.jpg", alt: "Clinic reading corner with Doctors Day messages", caption: "Patient Appreciation Wall" },
  { src: "/images/manisha_gallery_3.jpg", alt: "Clinic waiting area with health awareness posters", caption: "Clinic Waiting Area" },
  { src: "/images/manisha_gallery_4.jpg", alt: "Physiotherapy treatment room at Bansal Healthcare", caption: "Treatment Room" },
  { src: "/images/manisha_gallery_5.jpg", alt: "Dr. Manisha Bansal performing laser therapy", caption: "Laser Therapy Treatment" },
];

export default function DoctorDetailsView({ doctor, id }: DoctorDetailsViewProps) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const prevImage = useCallback(() => {
    const images = id === "dr-piyush-bansal" ? piyushGalleryImages : manishaGalleryImages;
    setLightboxIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [id]);

  const nextImage = useCallback(() => {
    const images = id === "dr-piyush-bansal" ? piyushGalleryImages : manishaGalleryImages;
    setLightboxIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [id]);

  if (!doctor) {
    return (
      <>
        <Navbar onOpenAppointment={() => router.push("/?book=dr-piyush-bansal")} />
        <main className="flex-grow pt-32 pb-20 bg-bg-light flex items-center justify-center min-h-[60vh]">
          <div className="max-w-md w-full mx-auto px-4 text-center space-y-6">
            <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto text-primary">
              <Stethoscope className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-extrabold text-primary">Doctor Profile Not Found</h2>
            <p className="text-sm text-text-muted">
              We couldn't find the medical consultant profile you are looking for. Please go back to check other specialists.
            </p>
            <Link
              href="/#doctors"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary hover:bg-secondary text-white text-sm font-bold shadow-md transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Medical Team
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const isPiyush = doctor.id === "dr-piyush-bansal";
  const SpecialistIcon = isPiyush ? Stethoscope : Activity;
  const initials = isPiyush ? "PB" : "MB";
  const doctorWhatsapp = doctor.whatsapp || clinicData.whatsapp;
  const doctorPhone = doctor.phone || clinicData.phone;
  const cleanedPhone = doctorWhatsapp.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanedPhone}?text=Hello%20Dr.%20${encodeURIComponent(doctor.name.split(" ").slice(-1)[0])},%20I'd%20like%20to%20inquire%20about%20booking%20an%20appointment.`;

  return (
    <>
      <Navbar onOpenAppointment={() => setIsModalOpen(true)} />

      <main className="flex-grow bg-bg-light pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-xs font-semibold text-text-muted mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-text-muted/65" />
            <Link href="/#doctors" className="hover:text-primary transition-colors">Doctors</Link>
            <ChevronRight className="w-3 h-3 text-text-muted/65" />
            <span className="text-text-dark font-bold">{doctor.name}</span>
          </nav>

          {/* Profile Hero Header Card */}
          <div className="bg-white border border-border-light rounded-3xl overflow-hidden shadow-sm mb-10">
            <div className="p-6 sm:p-10 bg-gradient-to-br from-primary/5 via-secondary/5 to-white flex flex-col md:flex-row md:items-center justify-between gap-6">
              
              {/* Doctor Avatar + Identity */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl bg-primary text-white flex items-center justify-center font-bold text-5xl sm:text-7xl shrink-0 shadow-2xl relative overflow-hidden ring-4 sm:ring-8 ring-white">
                  <span className="absolute inset-0 flex items-center justify-center z-0">{initials}</span>
                  <img
                    src={`/images/${doctor.imagePlaceholder}.png`}
                    alt={doctor.name}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105 z-10"
                    onError={(e) => {
                      e.currentTarget.style.opacity = "0";
                    }}
                  />
                  <div className="absolute bottom-0 right-0 p-3 sm:p-4 bg-white/95 backdrop-blur-md rounded-tl-3xl shadow-xl z-20 flex items-center justify-center border-t border-l border-emerald-200/60">
                    {isPiyush ? (
                      <Stethoscope className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
                    ) : (
                      <img
                        src="/images/physiotherapy_badge_green.png"
                        alt="Physiotherapy Logo"
                        className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                      />
                    )}
                  </div>
                </div>
                
                <div className="space-y-3 text-center md:text-left flex-1 pt-2">
                  <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold bg-accent/15 text-accent uppercase tracking-wider">
                    {doctor.details?.experienceYears} Years Clinical Experience
                  </span>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">{doctor.name}</h1>
                  <p className="text-base sm:text-xl font-bold text-secondary uppercase tracking-wider">{doctor.title}</p>
                  <p className="text-sm sm:text-base font-semibold text-text-muted">{doctor.qualifications}</p>
                  <p className="text-xs sm:text-sm text-text-muted/90 pt-1 font-medium">{doctor.availabilityNote}</p>
                </div>
              </div>

              {/* Quick Contact CTAs in Hero */}
              <div className="flex flex-row md:flex-col lg:flex-row gap-3 mt-4 md:mt-0 shrink-0">
                <a
                  href={`tel:${doctorPhone}`}
                  className="flex-1 md:flex-initial inline-flex items-center justify-center px-5 py-3 rounded-xl border border-border-light text-text-dark bg-white hover:bg-bg-light font-bold text-xs shadow-sm transition-all active:scale-[0.98] cursor-pointer"
                >
                  <Phone className="w-4 h-4 mr-2 text-secondary" />
                  Call Doctor
                </a>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex-1 md:flex-initial inline-flex items-center justify-center px-5 py-3 rounded-xl bg-primary text-white hover:bg-secondary font-bold text-xs shadow-md transition-all active:scale-[0.98] cursor-pointer"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Appointment
                </button>
              </div>

            </div>
          </div>

          {/* Detailed Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Main Details Column (8 columns) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Profile Overview / About Me */}
              <section className="bg-white border border-border-light p-6 sm:p-8 rounded-3xl text-left space-y-4">
                <h2 className="text-lg sm:text-xl font-bold text-primary flex items-center">
                  <Heart className="w-5 h-5 mr-2.5 text-accent" />
                  About Dr. {doctor.name.split(" ").slice(-1)[0]}
                </h2>
                <hr className="border-border-light" />
                <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                  {doctor.details?.aboutText}
                </p>
              </section>

              {/* Photo Gallery */}
              {(() => {
                const galleryImages = isPiyush ? piyushGalleryImages : manishaGalleryImages;
                return galleryImages.length > 0 && (
                <section className="bg-white border border-border-light p-6 sm:p-8 rounded-3xl text-left space-y-5">
                  <h2 className="text-lg sm:text-xl font-bold text-primary flex items-center">
                    <Camera className="w-5 h-5 mr-2.5 text-accent" />
                    {isPiyush ? "Clinic & Consultation Gallery" : "Physiotherapy & Clinic Gallery"}
                  </h2>
                  <hr className="border-border-light" />

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {galleryImages.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => openLightbox(index)}
                        className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-border-light/50 shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                          <span className="text-white text-xs font-bold">{image.caption}</span>
                        </div>
                        <div className="absolute top-2 right-2 w-7 h-7 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ZoomIn className="w-3.5 h-3.5 text-primary" />
                        </div>
                      </button>
                    ))}
                  </div>
                </section>
              );
              })()}

              {/* Qualifications & Medical History */}
              <section className="bg-white border border-border-light p-6 sm:p-8 rounded-3xl text-left space-y-6">
                <h2 className="text-lg sm:text-xl font-bold text-primary flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2.5 text-accent" />
                  Academic & Professional Background
                </h2>
                <hr className="border-border-light" />
                
                <div className="space-y-6">
                  {/* Degrees */}
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/5 text-primary rounded-xl shrink-0 mt-1">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-primary uppercase tracking-wide">Education & Degrees</h3>
                      <ul className="mt-2 space-y-1.5 text-sm text-text-muted font-medium">
                        {doctor.details?.degrees.map((degree, index) => (
                          <li key={index} className="flex items-center">
                            <Check className="w-3.5 h-3.5 mr-2 text-accent" />
                            {degree}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Experience Affiliations */}
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/5 text-primary rounded-xl shrink-0 mt-1">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-primary uppercase tracking-wide">Professional Affiliations</h3>
                      <p className="mt-2 text-sm text-text-muted leading-relaxed font-medium">
                        {doctor.details?.currentWork}
                      </p>
                    </div>
                  </div>

                  {/* Memberships */}
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/5 text-primary rounded-xl shrink-0 mt-1">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-primary uppercase tracking-wide">Memberships</h3>
                      <ul className="mt-2 space-y-1 text-sm text-text-muted font-medium">
                        {doctor.details?.memberships.map((membership, index) => (
                          <li key={index} className="flex items-center">
                            <Check className="w-3.5 h-3.5 mr-2 text-accent" />
                            {membership}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Specializations and Focus Area */}
              <section className="bg-white border border-border-light p-6 sm:p-8 rounded-3xl text-left space-y-5">
                <h2 className="text-lg sm:text-xl font-bold text-primary flex items-center">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mr-3 shrink-0 shadow-xs">
                    <img
                      src="/images/medical_cross_green.png"
                      alt="Clinical Focus"
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  Key Specializations & Clinical Focus
                </h2>
                <hr className="border-border-light" />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {doctor.details?.specializations.map((spec, index) => (
                    <div key={index} className="flex items-center p-3.5 bg-bg-light border border-border-light/75 rounded-2xl">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 mr-3">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-text-dark">{spec}</span>
                    </div>
                  ))}
                </div>
              </section>

            </div>

            {/* Right Side Consultation Card (4 columns) */}
            <div className="lg:col-span-4 space-y-6 text-left">
              
              {/* Consultation Timing card */}
              <div className="bg-white border border-border-light p-6 rounded-3xl shadow-sm space-y-5">
                <h3 className="text-base sm:text-lg font-bold text-primary flex items-center">
                  <Clock className="w-4.5 h-4.5 mr-2 text-accent" />
                  Consultation Slots
                </h3>
                <hr className="border-border-light" />
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <span className="block text-[10px] font-bold text-text-muted uppercase tracking-wider">
                      Monday – Saturday Timings
                    </span>
                    <div className="space-y-1.5">
                      {doctor.schedule.weekdays.map((slot, index) => (
                        <div key={index} className="flex items-center justify-between text-xs font-semibold text-text-dark bg-bg-light px-3 py-2 rounded-xl border border-border-light/50">
                          <span>Session {index + 1}:</span>
                          <span className="text-secondary">{slot}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 border-t border-border-light pt-4">
                    <span className="block text-[10px] font-bold text-text-muted uppercase tracking-wider">
                      Sunday Timings
                    </span>
                    <div className="space-y-1.5">
                      {doctor.schedule.sunday.map((slot, index) => (
                        <div key={index} className="flex items-center justify-between text-xs font-semibold text-text-dark bg-bg-light px-3 py-2 rounded-xl border border-border-light/50">
                          <span>Sunday Session {index + 1}:</span>
                          <span className="text-secondary">{slot}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-[10px] text-text-muted italic leading-normal">
                    * timings are subject to change. {clinicData.timingsNote}
                  </p>
                </div>
              </div>

              {/* Quick Book Callout */}
              <div className="bg-[#071F26] text-white p-6 rounded-3xl relative overflow-hidden space-y-4">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full filter blur-xl" />
                
                <div>
                  <h4 className="text-base font-bold">Ready to consult?</h4>
                  <p className="text-[11px] text-white/60 mt-1 leading-relaxed">
                    Book a convenient slot today. Submitting requests takes less than a minute.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-xl bg-accent text-white hover:bg-accent/90 font-bold text-xs shadow-md transition-all active:scale-[0.98] cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5 mr-2" />
                    Request Appointment
                  </button>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-xl border border-white/20 text-white hover:bg-white/5 font-bold text-xs transition-all active:scale-[0.98] cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5 mr-2 text-emerald-400" />
                    Consult on WhatsApp
                  </a>
                </div>
              </div>

              {/* Clinic Location & Directions Card */}
              <div className="bg-white border border-border-light p-6 rounded-3xl shadow-sm space-y-4">
                <div className="flex items-center space-x-2 text-primary font-bold text-sm">
                  <MapPin className="w-4 h-4 text-accent shrink-0" />
                  <span>Clinic Location & Directions</span>
                </div>
                <hr className="border-border-light" />
                <div className="text-xs text-text-muted space-y-1">
                  <p className="font-bold text-primary">{clinicData.address.doctorName}</p>
                  <p>{clinicData.address.street}</p>
                  <p>{clinicData.address.landmark}</p>
                  <p>{clinicData.address.area}, {clinicData.address.city} – {clinicData.address.pincode}</p>
                </div>
                <div className="pt-2 flex flex-col gap-2">
                  <a
                    href={clinicData.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-xl bg-accent hover:bg-secondary text-white font-bold text-xs shadow-md transition-all active:scale-[0.98] cursor-pointer"
                  >
                    <Navigation className="w-3.5 h-3.5 mr-1.5" />
                    Get Directions
                  </a>
                  <a
                    href={clinicData.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center py-2 px-4 rounded-xl border border-border-light text-primary hover:bg-bg-light font-bold text-xs transition-all text-center"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </main>

      <Footer />

      {/* Mobile Floating Quick actions */}
      <FloatingMobileActions onOpenAppointment={() => setIsModalOpen(true)} />

      {/* Desktop sidebar quick links */}
      <FloatingSidebarActions />

      {/* Appointment modal overlay */}
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultDoctorId={doctor.id}
      />

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-3 sm:left-6 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>

          {/* Image */}
          <div
            className="max-w-4xl max-h-[85vh] px-12 sm:px-20"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={(isPiyush ? piyushGalleryImages : manishaGalleryImages)[lightboxIndex].src}
              alt={(isPiyush ? piyushGalleryImages : manishaGalleryImages)[lightboxIndex].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
            />
            <p className="text-center text-white/80 text-sm font-semibold mt-4">
              {(isPiyush ? piyushGalleryImages : manishaGalleryImages)[lightboxIndex].caption}
              <span className="text-white/40 ml-2">({lightboxIndex + 1}/{(isPiyush ? piyushGalleryImages : manishaGalleryImages).length})</span>
            </p>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-3 sm:right-6 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>
        </div>
      )}
    </>
  );
}
