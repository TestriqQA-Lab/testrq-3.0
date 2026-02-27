"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export default function ApolloTracking() {
    const [nocache, setNocache] = useState("");

    useEffect(() => {
        setNocache(Math.random().toString(36).substring(7));
    }, []);

    if (!nocache) return null;

    return (
        <Script
            src={`https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=${nocache}`}
            strategy="afterInteractive"
            onLoad={() => {
                // @ts-ignore
                if (window.trackingFunctions && window.trackingFunctions.onLoad) {
                    // @ts-ignore
                    window.trackingFunctions.onLoad({ appId: "696f2f6d07a88a0011e0ddfc" });
                }
            }}
        />
    );
}
