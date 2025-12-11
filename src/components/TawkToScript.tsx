"use client";

import { useEffect } from "react";

interface TawkAPI {
  embedded?: string;
  [key: string]: unknown;
}

declare global {
  interface Window {
    Tawk_API?: TawkAPI;
    Tawk_LoadStart?: Date;
  }
}

export default function TawkToScript() {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/5f8ff79efd4ff5477ea7aae5/1j58u74lc";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "anonymous"); // ✅ correct usage
    document.body.appendChild(script);

    // Tawk needs these globals
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}