import { clinicData, Doctor } from "@/data/clinic";
import { AppointmentData } from "@/utils/api";

const timeSlotLabels: Record<string, string> = {
  morning: "Morning Session",
  afternoon: "Afternoon Session",
  evening: "Evening Session",
};

export interface WhatsAppAppointmentResult {
  doctor: Doctor | undefined;
  doctorName: string;
  doctorTitle: string;
  targetPhone: string;
  whatsappUrl: string;
  messageText: string;
  timeSlotLabel: string;
}

/**
 * Generates a pre-filled WhatsApp link directed specifically to the selected doctor
 * with all appointment form details.
 */
export function generateAppointmentWhatsAppUrl(data: AppointmentData): WhatsAppAppointmentResult {
  const doctor = clinicData.doctors.find((d) => d.id === data.doctor);

  // Use doctor's specific WhatsApp number if available, else fallback to clinic WhatsApp
  const targetPhone = doctor?.whatsapp || clinicData.whatsapp;
  const cleanedPhone = targetPhone.replace(/[^0-9]/g, "");

  const doctorName = doctor ? doctor.name : "Consultant Specialist";
  const doctorTitle = doctor ? doctor.title : "Specialist";
  const timeSlotLabel = timeSlotLabels[data.preferredTime] || data.preferredTime || "Preferred Time Slot";
  const visitReason = data.message?.trim() ? data.message.trim() : "General Consultation / Checkup";

  // Build a structured, high-readability WhatsApp text
  const messageText = 
`🏥 *BANSAL HEALTHCARE - APPOINTMENT REQUEST*
━━━━━━━━━━━━━━━━━━━━━━━━━━━
👨‍⚕️ *Doctor:* ${doctorName}
📋 *Speciality:* ${doctorTitle}

👤 *Patient Name:* ${data.patientName.trim()}
📱 *Contact Number:* ${data.phoneNumber.trim()}
📅 *Preferred Date:* ${data.preferredDate}
⏰ *Preferred Slot:* ${timeSlotLabel}
📝 *Reason / Notes:* ${visitReason}
━━━━━━━━━━━━━━━━━━━━━━━━━━━
_Hello Doctor, I would like to book an appointment with you as detailed above. Please confirm the available slot. Thank you!_`;

  const encodedMessage = encodeURIComponent(messageText);
  const whatsappUrl = `https://wa.me/${cleanedPhone}?text=${encodedMessage}`;

  return {
    doctor,
    doctorName,
    doctorTitle,
    targetPhone,
    whatsappUrl,
    messageText,
    timeSlotLabel,
  };
}
