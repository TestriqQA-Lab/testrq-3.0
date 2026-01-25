"use client";

import { Suspense, useEffect, useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { FileCheck, Download, AlertTriangle, Loader2, FileText, ArrowLeft, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";

function CertificateContent() {
    const searchParams = useSearchParams();
    const certId = searchParams.get("id");
    const [isValid, setIsValid] = useState<boolean | null>(null);
    const [loading, setLoading] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            const userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent;
            const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
            setIsMobile(mobile);
        };
        checkMobile();
    }, []);

    useEffect(() => {
        if (!certId) {
            setIsValid(false);
            setLoading(false);
            return;
        }

        const checkCertificate = async () => {
            try {
                const response = await fetch(`/certificates/${certId}.pdf`, { method: "HEAD" });
                setIsValid(response.ok);
            } catch (_error) {
                setIsValid(false);
            } finally {
                setLoading(false);
            }
        };

        checkCertificate();
    }, [certId]);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
                <div className="relative">
                    <Loader2 className="w-16 h-16 text-blue-600 animate-spin" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-blue-400" />
                    </div>
                </div>
                <p className="mt-6 text-gray-600 font-medium animate-pulse text-lg">Authenticating Certificate...</p>
            </div>
        );
    }

    const pdfUrl = `/certificates/${certId}.pdf`;

    if (!certId || !isValid) {
        return (
            <div className="max-w-2xl mx-auto my-12 md:my-20 px-4">
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-red-100 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-red-500"></div>
                    <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-8">
                        <AlertTriangle className="w-10 h-10 text-red-500" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Invalid Certificate ID</h1>
                    <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                        The certificate ID <span className="font-mono bg-gray-100 px-2 py-1 rounded text-red-600 font-bold">&quot;{certId || "empty"}&quot;</span> could not be verified in our official registry.
                        Please check the URL or contact Testriq support if you believe this is an error.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-black transition-all duration-300 shadow-lg"
                        >
                            <ArrowLeft size={20} />
                            Return Home
                        </Link>
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300"
                        >
                            Contact Support
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden border border-gray-100">
                {/* Modern Header Section - LIGHT BLUE THEME */}
                <div className="bg-gradient-to-br from-sky-400 via-blue-500 to-blue-600 p-8 md:p-12 text-white relative overflow-hidden">
                    {/* Decorative background elements */}
                    <div className="absolute -top-10 -right-10 opacity-10">
                        <ShieldCheck size={400} />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20"></div>

                    <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                        <div className="flex-grow">
                            <div className="flex flex-wrap items-center gap-4 mb-6">
                                {/* GREEN VERIFIED BADGE */}
                                <div className="inline-flex items-center gap-2 bg-green-500 px-4 py-2 rounded-full shadow-lg border-2 border-white/40 animate-pulse-slow">
                                    <CheckCircle2 size={18} className="text-white" />
                                    <span className="text-[11px] font-black tracking-widest uppercase text-white">Official Verification</span>
                                </div>
                                <span className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase">
                                    ID: {certId}
                                </span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-white drop-shadow-sm">
                                Assurance Certificate
                            </h1>
                            <p className="text-blue-50 text-lg max-w-2xl font-medium leading-relaxed opacity-95">
                                Official validation of successful completion of Quality Assurance and testing protocols conducted by the Testriq Engineering Team.
                            </p>
                        </div>

                        <div className="flex flex-wrap shrink-0 gap-4">
                            <a
                                href={pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 transition-all backdrop-blur-sm"
                            >
                                <FileText size={20} />
                                VIEW PDF
                            </a>
                            <a
                                href={pdfUrl}
                                download={`${certId}.pdf`}
                                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-700 font-black rounded-2xl hover:bg-blue-50 transition-all duration-500 shadow-xl"
                            >
                                <Download size={22} className="group-hover:bounce-y" />
                                DOWNLOAD
                            </a>
                        </div>
                    </div>
                </div>

                {/* PDF Showcase Section - Edge-to-Edge */}
                <div className="p-0 bg-white">
                    <div className="relative w-full aspect-[1/1.414] min-h-[600px] md:min-h-[1000px] bg-white flex items-center justify-center">

                        {isMobile ? (
                            <div className="flex flex-col items-center justify-center p-8 text-center animate-in zoom-in duration-500">
                                <div className="w-24 h-24 bg-blue-50 rounded-3xl flex items-center justify-center mb-6 shadow-sm border border-blue-100">
                                    <FileCheck className="w-12 h-12 text-blue-600" />
                                </div>
                                <h3 className="text-2xl font-black text-gray-900 mb-3 tracking-tight">Your Certificate is Ready</h3>
                                <p className="text-gray-500 mb-8 max-w-xs mx-auto leading-relaxed">
                                    Mobile browsers offer the best viewing experience when opened directly.
                                </p>
                                <a
                                    href={pdfUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all shadow-lg active:scale-95 transform"
                                >
                                    <Download size={20} />
                                    VIEW CERTIFICATE
                                </a>
                            </div>
                        ) : (
                            <iframe
                                src={`${pdfUrl}#toolbar=0&navpanes=0&view=FitH&scrollbar=0&pagemode=none`}
                                className="absolute inset-0 w-full h-full border-0"
                                title={`Certificate ${certId}`}
                                style={{ backgroundColor: 'white' }}
                            />
                        )}
                    </div>

                    <div className="px-6 py-8 flex flex-col items-center gap-4 border-t border-gray-100">
                        <div className="flex items-center gap-3 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full">
                            <FileCheck size={16} className="text-blue-600" />
                            <span className="text-[10px] md:text-xs font-bold text-blue-800 uppercase tracking-widest leading-none">Identity Fully Verified & Secured</span>
                        </div>
                    </div>

                    {/* Trust Footer */}
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-gray-200 text-gray-500">
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                <FileText size={22} />
                            </div>
                            <div>
                                <h4 className="text-gray-900 font-bold text-sm leading-tight">Secure Format</h4>
                                <p className="text-xs font-medium">Original PDF Document</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                <FileCheck size={22} />
                            </div>
                            <div>
                                <h4 className="text-gray-900 font-bold text-sm leading-tight">Official Seal</h4>
                                <p className="text-xs font-medium">Identity Verified & Signed</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 md:justify-end">
                            <div className="text-right">
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-tight">Authenticity Guaranteed</p>
                                <p className="text-sm font-black text-blue-600 mt-1">TESTRIQ QA LABS</p>
                            </div>
                            <div className="w-12 h-12 rounded-full border-2 border-blue-100 p-1">
                                <div className="w-full h-full rounded-full bg-blue-50 flex items-center justify-center">
                                    <span className="text-[10px] font-black text-blue-700">TQL</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Legal/Info */}
            <div className="mt-8 text-center">
                <p className="text-sm text-gray-400 font-medium tracking-wide">
                    © {new Date().getFullYear()} Testriq QA Lab LLP. All certificates are subject to verification via our central registry.
                </p>
                <div className="mt-4 flex justify-center gap-6">
                    <Link href="/privacy-policy" className="text-xs text-blue-500 hover:text-blue-700 font-bold uppercase tracking-widest">Privacy Policy</Link>
                    <Link href="/terms-conditions" className="text-xs text-blue-500 hover:text-blue-700 font-bold uppercase tracking-widest">Terms of Service</Link>
                </div>
            </div>
        </div>
    );
}

export default function VerifyCertificatePage() {
    return (
        <div className="min-h-screen bg-[#f1f5f9] pt-12 md:pt-24 pb-12">
            <Suspense fallback={
                <div className="flex flex-col items-center justify-center min-h-[60vh]">
                    <Loader2 className="w-16 h-16 text-blue-600 animate-spin" />
                </div>
            }>
                <CertificateContent />
            </Suspense>
        </div>
    );
}
