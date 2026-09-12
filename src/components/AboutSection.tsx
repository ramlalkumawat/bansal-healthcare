"use client";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white border-b border-border-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold tracking-widest text-accent uppercase block">
          About Our Clinic
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
          Healthcare With a Personal Touch
        </h2>
        <p className="text-base sm:text-lg text-text-muted leading-relaxed">
          Bansal Healthcare brings together professional medical consultation and child & physiotherapy care in one convenient location in Jagatpura, Jaipur. Our aim to offer clinical excellence with an empathetic, patient-first approach.
        </p>
      </div>
    </section>
  );
}
