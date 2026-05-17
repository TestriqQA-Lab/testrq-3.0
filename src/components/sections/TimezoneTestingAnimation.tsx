"use client";

import React from "react";
import { FaGlobe, FaClock, FaCheckCircle, FaExchangeAlt } from "react-icons/fa";

const TimezoneTestingAnimation: React.FC = () => {
    return (
        <div className="relative w-full h-[400px] lg:h-[500px] bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-inner flex items-center justify-center">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(#2563eb 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}>
            </div>

            <div className="relative w-full max-w-lg px-6 py-12">
                {/* Central Globe */}
                <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[180px] text-blue-100"
    >
                    <FaGlobe />
                </div>

                {/* Sync Nodes */}
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Node 1: Development Team */}
                    <div
      className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600"
    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                <FaClock />
                            </div>
                            <span className="font-bold text-slate-800">Your Time Zone</span>
                        </div>
                        <p className="text-sm text-slate-600">Development Sprint Active</p>
                        <div className="mt-4 h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                            <div
      className="h-full bg-blue-600"
     />
                        </div>
                    </div>

                    {/* Node 2: QA Team */}
                    <div
      className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500"
    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                                <FaCheckCircle />
                            </div>
                            <span className="font-bold text-slate-800">QA Alignment</span>
                        </div>
                        <p className="text-sm text-slate-600">Zero-Lag Feedback Loop</p>
                        <div className="mt-4 flex gap-2">
                            {[1, 2, 3].map(i => (
                                <div
      key={i}
      className="h-2 w-full bg-green-500 rounded-full"
     />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sync Indicator */}
                <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-dashed border-blue-400/30 rounded-full pointer-events-none"
     />

                <div
      className="mt-12 bg-blue-900 text-white p-4 rounded-lg flex items-center justify-between shadow-2xl"
    >
                    <div className="flex items-center gap-3">
                        <FaExchangeAlt className="text-blue-300 animate-pulse" />
                        <span className="text-sm font-medium">Real-Time Sync Protocol: ACTIVE</span>
                    </div>
                    <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-ping" />
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimezoneTestingAnimation;
