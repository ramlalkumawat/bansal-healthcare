export interface AppointmentData {
  patientName: string;
  phoneNumber: string;
  doctor: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
  // Honeypot field for spam prevention
  websiteHoneypot?: string;
  // Timestamp when the form was loaded to detect speed bots
  formLoadTime?: number;
}

export interface SubmissionResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
}

/**
 * Validates the appointment booking request data.
 */
export function validateAppointmentData(data: AppointmentData): Record<string, string> {
  const errors: Record<string, string> = {};

  // Patient Name Validation
  if (!data.patientName || data.patientName.trim().length < 2) {
    errors.patientName = "Name must be at least 2 characters long.";
  } else if (/[0-9]/.test(data.patientName)) {
    errors.patientName = "Name should not contain numbers.";
  }

  // Phone Number Validation (Standard Indian Phone Number check - 10 digits)
  const cleanedPhone = data.phoneNumber.replace(/[^0-9]/g, "");
  if (!data.phoneNumber) {
    errors.phoneNumber = "Phone number is required.";
  } else if (cleanedPhone.length < 10) {
    errors.phoneNumber = "Phone number must be at least 10 digits.";
  }

  // Doctor Validation
  if (!data.doctor || data.doctor === "") {
    errors.doctor = "Please select a doctor.";
  }

  // Date Validation (Must not be in the past)
  if (!data.preferredDate) {
    errors.preferredDate = "Preferred date is required.";
  } else {
    const selectedDate = new Date(data.preferredDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      errors.preferredDate = "Preferred date cannot be in the past.";
    }
  }

  // Preferred Time Validation
  if (!data.preferredTime || data.preferredTime === "") {
    errors.preferredTime = "Preferred time is required.";
  }

  return errors;
}

/**
 * Simulates a secure backend submission for the appointment form.
 * In production, you would replace the return statement with a fetch call
 * to your server action, WhatsApp API, or booking provider.
 */
export async function submitAppointment(data: AppointmentData): Promise<SubmissionResponse> {
  // 1. Spam Protection: Honeypot check
  if (data.websiteHoneypot && data.websiteHoneypot.trim() !== "") {
    // Silently reject bots without raising a detailed error message
    return {
      success: false,
      message: "Request could not be processed. (Code: SP-1)"
    };
  }

  // 2. Spam Protection: Submission speed check (bots fill forms in milliseconds)
  if (data.formLoadTime) {
    const submitDurationMs = Date.now() - data.formLoadTime;
    if (submitDurationMs < 1000) {
      return {
        success: false,
        message: "Request could not be processed. (Code: SP-2)"
      };
    }
  }

  // 3. Input Validation
  const errors = validateAppointmentData(data);
  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please correct the highlighted errors.",
      errors
    };
  }

  // 4. Simulate network latency (800ms)
  await new Promise((resolve) => setTimeout(resolve, 800));

  // 5. In Development: Log non-sensitive metadata (avoid logging patient details for privacy)
  if (process.env.NODE_ENV !== "production") {
    console.log(`[API MOCK SUBMISSION] Appt requested for Doctor ID: ${data.doctor} on ${data.preferredDate} at ${data.preferredTime}`);
  }

  // 6. Return successful response
  return {
    success: true,
    message: "Thank you! Your appointment request has been submitted. We will contact you shortly to confirm."
  };
}
