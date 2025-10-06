'use client';

import React, { createContext, useContext, useCallback, ReactNode, useEffect, useState } from 'react';

interface RecaptchaContextType {
  executeRecaptcha: (action: string) => Promise<string | null>;
}

const RecaptchaContext = createContext<RecaptchaContextType | undefined>(undefined);

interface RecaptchaProviderProps {
  children: ReactNode;
}

export const RecaptchaProvider: React.FC<RecaptchaProviderProps> = ({ children }) => {
  const [isRecaptchaReady, setIsRecaptchaReady] = useState(false);

  useEffect(() => {
    const handleRecaptchaLoad = () => {
      setIsRecaptchaReady(true);
    };

    // Check if grecaptcha is already available (e.g., if script loaded before useEffect)
    if (typeof window !== 'undefined' && (window as any).grecaptcha && (window as any).grecaptcha.ready) {
      (window as any).grecaptcha.ready(handleRecaptchaLoad);
    } else {
      // Fallback for when the script loads later
      (window as any).onloadCallback = handleRecaptchaLoad;
    }

    return () => {
      // Clean up if necessary
      delete (window as any).onloadCallback;
    };
  }, []);

  const executeRecaptcha = useCallback(async (action: string): Promise<string | null> => {
    if (!isRecaptchaReady || typeof window === 'undefined' || !(window as any).grecaptcha) {
      console.warn('reCAPTCHA is not ready or grecaptcha is not defined.');
      return null;
    }

    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (!siteKey) {
      console.error('NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not defined.');
      return null;
    }

    try {
      const token = await (window as any).grecaptcha.execute(siteKey, { action });
      return token;
    } catch (error) {
      console.error('Error executing reCAPTCHA:', error);
      return null;
    }
  }, [isRecaptchaReady]);

  return (
    <RecaptchaContext.Provider value={{ executeRecaptcha }}>
      {children}
    </RecaptchaContext.Provider>
  );
};

export const useRecaptcha = () => {
  const context = useContext(RecaptchaContext);
  if (context === undefined) {
    throw new Error('useRecaptcha must be used within a RecaptchaProvider');
  }
  return context;
};
