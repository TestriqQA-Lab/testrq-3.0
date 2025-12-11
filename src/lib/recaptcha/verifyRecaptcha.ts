export interface RecaptchaVerificationResponse {
  success: boolean;
  score?: number;
  action?: string;
  challenge_ts?: string;
  hostname?: string;
  'error-codes'?: string[];
}

export async function verifyRecaptcha(token: string): Promise<RecaptchaVerificationResponse> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  
  if (!secretKey) {
    throw new Error('RECAPTCHA_SECRET_KEY is not defined in environment variables');
  }

  const verificationUrl = 'https://www.google.com/recaptcha/api/siteverify';
  
  const response = await fetch(verificationUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      secret: secretKey,
      response: token,
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to verify reCAPTCHA: ${response.statusText}`);
  }

  const result: RecaptchaVerificationResponse = await response.json();
  return result;
}

export function isValidRecaptchaScore(score: number | undefined, threshold: number = 0.5): boolean {
  return score !== undefined && score >= threshold;
}