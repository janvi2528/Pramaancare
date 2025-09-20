
"use server";

import { contactFormSchema, consultationFormSchema } from "@/lib/schemas";
import { summarizeContactForm } from "@/ai/flows/summarize-contact-form";

export type FormState = {
  success: boolean;
  message: string;
  summary?: string;
  isUrgent?: boolean;
};

export async function handleContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const values = {
    ...Object.fromEntries(formData.entries()),
  };

  // Try consultation form schema first (has more fields), then fall back to contact form schema
  let validatedFields = consultationFormSchema.safeParse({
    ...values,
    date: new Date(values.date as string),
  });

  let isConsultationForm = true;

  if (!validatedFields.success) {
    // Try with contact form schema if consultation form validation fails
    const contactValidation = contactFormSchema.safeParse({
      ...values,
      date: new Date(values.date as string),
    });
    
    if (contactValidation.success) {
      validatedFields = contactValidation as any;
      isConsultationForm = false;
    }
  }

  if (!validatedFields.success) {
    const errorMessages = validatedFields.error.issues.map(issue => issue.message).join(', ');
    return {
      success: false,
      message: `Invalid form data: ${errorMessages}. Please check your inputs.`,
    };
  }
  
  const formRecord: Record<string, string> = {};
  for(const key in validatedFields.data) {
    const value = (validatedFields.data as any)[key];
    if (value) {
      if (key === 'date' && value instanceof Date) {
        formRecord[key] = value.toLocaleDateString();
      } else {
        formRecord[key] = String(value);
      }
    }
  }

  try {
    // Here you would integrate with your backend or email service
    console.log('Form submission:', validatedFields.data);
    
    const successMessage = isConsultationForm 
      ? 'Your consultation request has been received. We will contact you shortly to confirm your appointment!'
      : 'We will contact you shortly!';
    
    return {
      success: true,
      message: successMessage,
    };
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      success: false,
      message: 'Something went wrong. Please try again.',
    };
  }
}
