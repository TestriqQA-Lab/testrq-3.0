"use client";

import Script from 'next/script';

export default function VisitorTracking() {
    return (
        <>
            {/* Apollo Tracker */}
            <Script
                id="apollo-tracker"
                strategy="lazyOnload"
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
                strategy="lazyOnload"
                dangerouslySetInnerHTML={{
                    __html: `
            (function(l,e,a,d,i,n,f,o){if(!l[i]){l.GlobalLeadinfoNamespace=l.GlobalLeadinfoNamespace||[];
            l.GlobalLeadinfoNamespace.push(i);l[i]=function(){(l[i].q=l[i].q||[]).push(arguments)};l[i].t=l[i].t||n;
            l[i].q=l[i].q||[];o=e.createElement(a);f=e.getElementsByTagName(a)[0];o.async=1;o.src=d;f.parentNode.insertBefore(o,f);}
            }(window,document,'script','https://cdn.leadinfo.net/ping.js','leadinfo','LI-695F672729385'));
          `,
                }}
            />

            {/* Snitcher (Radar) Tracker */}
            <Script
                id="snitcher-tracker"
                strategy="lazyOnload"
                dangerouslySetInnerHTML={{
                    __html: `
            !function(e){"use strict";var t=e&&e.namespace;if(t&&e.profileId&&e.cdn){var i=window[t];if(i&&Array.isArray(i)||(i=window[t]=[]),!i.initialized&&!i._loaded)if(i._loaded)console&&console.warn("[Radar] Duplicate initialization attempted");else{i._loaded=!0;["track","page","identify","group","alias","ready","debug","on","off","once","trackClick","trackSubmit","trackLink","trackForm","pageview","screen","reset","register","setAnonymousId","addSourceMiddleware","addIntegrationMiddleware","addDestinationMiddleware","giveCookieConsent"].forEach((function(e){var a;i[e]=(a=e,function(){var e=window[t];if(e.initialized)return e[a].apply(e,arguments);var i=[].slice.call(arguments);return i.unshift(a),e.push(i),e})})),-1===e.apiEndpoint.indexOf("http")&&(e.apiEndpoint="https://"+e.apiEndpoint),i.bootstrap=function(){var t,i=document.createElement("script");i.async=!0,i.type="text/javascript",i.id="__radar__",i.setAttribute("data-settings",JSON.stringify(e)),i.src=[-1!==(t=e.cdn).indexOf("http")?"":"https://",t,"/releases/latest/radar.min.js"].join("");var a=document.scripts[0];a.parentNode.insertBefore(i,a)},i.bootstrap()}}else"undefined"!=typeof console&&console.error("[Radar] Configuration incomplete")}({
              "apiEndpoint": "radar.snitcher.com",
              "cdn": "cdn.snitcher.com",
              "namespace": "Snitcher",
              "profileId": "sdbLVQei97"
            });
          `,
                }}
            />

            {/* Leadfeeder Tracker */}
            <Script
                id="leadfeeder-tracker"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            (function(ss,ex){ window.ldfdr=window.ldfdr||function(){(ldfdr._q=ldfdr._q||[]).push([].slice.call(arguments));}; (function(d,s){ fs=d.getElementsByTagName(s)[0]; function ce(src){ var cs=d.createElement(s); cs.src=src; cs.async=1; fs.parentNode.insertBefore(cs,fs); }; ce('https://sc.lfeeder.com/lftracker_v1_'+ss+(ex?'_'+ex:'')+'.js'); })(document,'script'); })('DzLR5a5l6AZ4BoQ2');
          `,
                }}
            />
        </>
    );
}
