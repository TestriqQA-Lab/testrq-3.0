"use client";

import Script from 'next/script';

export default function ApolloTracker() {
    return (
        <Script
            id="apollo-tracker"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
          function initApollo(){
            var n=Math.random().toString(36).substring(7),o=document.createElement("script");
            o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,
            o.onload=function(){window.trackingFunctions.onLoad({appId:"695f5c6896db3c00219e22ec"})},
            document.head.appendChild(o)
          }
          initApollo();
        `,
            }}
        />
    );
}
