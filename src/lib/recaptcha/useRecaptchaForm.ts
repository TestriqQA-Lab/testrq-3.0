import { useState, useCallback } from 'react';
import { useRecaptcha } from './RecaptchaContext';

interface UseRecaptchaFormOptions {
  action: string;
  onSuccess?: (data: unknown) => void;
  onError?: (error: string) => void;
}

interface UseRecaptchaFormReturn {
  isSubmitting: boolean;
  submitWithRecaptcha: <TFormData extends Record<string, unknown>, TResult>( // Use generics for better type safety
    submitFunction: (data: TFormData, recaptchaToken: string) => Promise<TResult>,
    formData: TFormData
  ) => Promise<void>;
}

export function useRecaptchaForm(options: UseRecaptchaFormOptions): UseRecaptchaFormReturn {
  const { action, onSuccess, onError } = options;
  const { executeRecaptcha } = useRecaptcha();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitWithRecaptcha = useCallback(async <TFormData extends Record<string, unknown>, TResult>(
    submitFunction: (data: TFormData, recaptchaToken: string) => Promise<TResult>,
    formData: TFormData
  ) => {
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      // Execute reCAPTCHA
      const recaptchaToken = await executeRecaptcha(action);
      
      if (!recaptchaToken) {
        throw new Error('Failed to generate reCAPTCHA token');
      }

      // Call the submit function with the reCAPTCHA token
      const result = await submitFunction(formData, recaptchaToken);
      
      if (onSuccess) {
        onSuccess(result);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred';
      console.error('Form submission error:', error);
      
      if (onError) {
        onError(errorMessage);
      }
    } finally {
      setIsSubmitting(false);
    }
  }, [action, executeRecaptcha, isSubmitting, onSuccess, onError]);

  return {
    isSubmitting,
    submitWithRecaptcha,
  };
}
