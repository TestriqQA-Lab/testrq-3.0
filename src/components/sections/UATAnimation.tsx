"use client";
import React from "react";
const UATAnimation = () => {
    return (
        <div className="relative w-full aspect-square flex items-center justify-center p-4">
            <svg
                viewBox="0 0 500 500"
                className="w-full h-full max-w-[450px]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Background Glow */}
                <circle cx="250" cy="250" r="150" fill="url(#glowGradient)" fillOpacity="0.2" />

                {/* Main Screen/App Representation */}
                <rect
      x="100"
      y="80"
      width="300"
      height="340"
      rx="20"
      stroke="currentColor"
      strokeWidth="4"
      className="text-gray-200"
     />

                {/* Dashboard Elements */}
                <rect
      x="130"
      y="110"
      width="100"
      height="10"
      rx="5"
      fill="#3B82F6"
     />
                <rect
      x="130"
      y="135"
      width="240"
      height="40"
      rx="8"
      fill="#F3F4F6"
     />

                {/* User Icons (Bottom Group) */}
                <g>
                    {[0, 1, 2].map((i) => (
                        <circle
      key={i}
      cx={180 + i * 70}
      cy="360"
      r="15"
      fill="#3B82F6"
     />
                    ))}
                </g>

                {/* Checkmarks (The "Acceptance" part) */}
                <path
      d="M160 250 L200 290 L280 210"
      stroke="#10B981"
      strokeWidth="12"
      strokeLinecap="round"
      strokeLinejoin="round"
     />

                {/* Floating Feedback Bubbles */}
                <circle
      cx="380"
      cy="150"
      r="25"
      fill="#60A5FA"
     />
                <circle
      cx="100"
      cy="280"
      r="20"
      fill="#93C5FD"
     />

                <defs>
                    <radialGradient id="glowGradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(250 250) rotate(90) scale(200)">
                        <stop stopColor="#3B82F6" />
                        <stop offset="1" stopColor="#3B82F6" stopOpacity="0" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
    );
};

export default UATAnimation;
