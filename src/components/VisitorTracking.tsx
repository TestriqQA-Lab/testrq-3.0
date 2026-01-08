"use client";

import Script from 'next/script';

export default function VisitorTracking() {
    return (
        <>
            {/* Apollo Tracker */}
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

            {/* Leadinfo Tracker */}
            <Script
                id="leadinfo-tracker"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            (function(l,e,a,d,i,n,f,o){if(!l[i]){l.GlobalLeadinfoNamespace=l.GlobalLeadinfoNamespace||[];
            l.GlobalLeadinfoNamespace.push(i);l[i]=function(){(l[i].q=l[i].q||[]).push(arguments)};l[i].t=l[i].t||n;
            l[i].q=l[i].q||[];o=e.createElement(a);f=e.getElementsByTagName(a)[0];o.async=1;o.src=d;f.parentNode.insertBefore(o,f);}
            }(window,document,'script','https://cdn.leadinfo.net/ping.js','leadinfo','LI-695F672729385'));
          `,
                }}
            />
        </>
    );
}
