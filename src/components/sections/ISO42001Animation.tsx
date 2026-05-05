"use client";

import React from "react";

const ISO42001Animation: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Main Shield Container */}
      <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
        {/* Rotating outer ring */}
        <div className="absolute inset-0 animate-spin-slow">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <circle
              cx="200"
              cy="200"
              r="190"
              fill="none"
              stroke="url(#gradient1)"
              strokeWidth="2"
              strokeDasharray="20 10"
              opacity="0.4"
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#0EA5E9" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Counter-rotating inner ring */}
        <div className="absolute inset-6 animate-spin-reverse-slow">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <circle
              cx="200"
              cy="200"
              r="170"
              fill="none"
              stroke="url(#gradient2)"
              strokeWidth="1.5"
              strokeDasharray="15 8"
              opacity="0.3"
            />
            <defs>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#14B8A6" />
                <stop offset="100%" stopColor="#6366F1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Central Shield */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Shield glow */}
            <div className="absolute -inset-4 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-2xl animate-pulse-slow" />

            {/* Shield body */}
            <svg
              width="160"
              height="190"
              viewBox="0 0 160 190"
              className="relative z-10 drop-shadow-2xl"
            >
              {/* Shield shape */}
              <path
                d="M80 10 L150 45 L150 100 C150 145 120 170 80 185 C40 170 10 145 10 100 L10 45 Z"
                fill="url(#shieldGradient)"
                stroke="url(#shieldStroke)"
                strokeWidth="2"
              />
              {/* Inner shield border */}
              <path
                d="M80 25 L140 55 L140 100 C140 138 114 160 80 173 C46 160 20 138 20 100 L20 55 Z"
                fill="none"
                stroke="white"
                strokeWidth="1"
                opacity="0.3"
              />
              {/* AI text */}
              <text
                x="80"
                y="85"
                textAnchor="middle"
                fill="white"
                fontSize="36"
                fontWeight="800"
                fontFamily="system-ui"
              >
                AI
              </text>
              {/* Checkmark */}
              <path
                d="M55 115 L72 132 L108 96"
                fill="none"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* ISO text */}
              <text
                x="80"
                y="165"
                textAnchor="middle"
                fill="white"
                fontSize="11"
                fontWeight="700"
                fontFamily="system-ui"
                opacity="0.9"
              >
                42001:2023
              </text>

              <defs>
                <linearGradient
                  id="shieldGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="50%" stopColor="#0D9488" />
                  <stop offset="100%" stopColor="#0EA5E9" />
                </linearGradient>
                <linearGradient
                  id="shieldStroke"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#34D399" />
                  <stop offset="100%" stopColor="#38BDF8" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Floating orbital badges */}
        {/* Top - Ethics */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 animate-float">
          <div className="bg-white rounded-2xl shadow-lg px-4 py-2 border border-emerald-100 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold text-gray-800">AI Ethics</span>
          </div>
        </div>

        {/* Right - Risk */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <div className="bg-white rounded-2xl shadow-lg px-4 py-2 border border-teal-100 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-teal-500 animate-pulse" />
            <span className="text-xs font-bold text-gray-800">
              Risk Mgmt
            </span>
          </div>
        </div>

        {/* Bottom - Transparency */}
        <div
          className="absolute bottom-2 left-1/2 -translate-x-1/2 animate-float"
          style={{ animationDelay: "2s" }}
        >
          <div className="bg-white rounded-2xl shadow-lg px-4 py-2 border border-blue-100 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-bold text-gray-800">
              Transparency
            </span>
          </div>
        </div>

        {/* Left - Governance */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 animate-float"
          style={{ animationDelay: "3s" }}
        >
          <div className="bg-white rounded-2xl shadow-lg px-4 py-2 border border-indigo-100 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-xs font-bold text-gray-800">
              Governance
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ISO42001Animation;
