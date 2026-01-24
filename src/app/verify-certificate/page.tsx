"use client";

import { Suspense, useEffect, useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { FileCheck, Download, AlertTriangle, Loader2, FileText, ArrowLeft } from "lucide-react";
import Link from "next/link";

function CertificateContent() {
    const searchParams = useSearchParams();
    const certId = searchParams.get("id");
    const [isValid, setIsValid] = useState<boolean | null>(null);
    const [loading, setLoading] = useState(true);

    const pdfUrl = `/certificates/${certId}.pdf`;
    const pdfUrlWithCache = useMemo(() => `${pdfUrl}?v=${Date.now()}`, [pdfUrl]);

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
                {/* Modern Header Section */}
                <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 p-8 md:p-12 text-white relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 opacity-5">
                        <FileCheck size={400} />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20"></div>

                    <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                        <div className="flex-grow">
                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                <span className="bg-white/20 backdrop-blur-md border border-white/30 px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.1em] uppercase">
                                    ✓ Verified by Testriq
                                </span>
                                <span className="text-blue-100 text-sm font-semibold tracking-wider bg-black/10 px-3 py-1.5 rounded-lg border border-white/10">
                                    ID: {certId}
                                </span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
                                Assurance Certificate
                            </h1>
                            <p className="text-blue-100 text-lg max-w-2xl font-medium leading-relaxed opacity-90">
                                Official validation of successful completion of Quality Assurance and testing protocols conducted by the Testriq Engineering Team.
                            </p>
                        </div>

                        <div className="flex flex-wrap shrink-0 gap-4">
                            <a
                                href={pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-4 bg-blue-500/20 border border-white/30 text-white font-bold rounded-2xl hover:bg-blue-500/40 transition-all"
                            >
                                <FileText size={20} />
                                VIEW PDF
                            </a>
                            <a
                                href={pdfUrl}
                                download={`${certId}.pdf`}
                                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-700 font-black rounded-2xl hover:bg-blue-50 transition-all duration-500 shadow-lg"
                            >
                                <Download size={22} className="group-hover:bounce-y" />
                                DOWNLOAD
                            </a>
                        </div>
                    </div>
                </div>

                {/* PDF Showcase Section */}
                <div className="p-4 md:p-10 bg-[#f8fafc]">
                    <div className="bg-white p-2 md:p-4 rounded-3xl shadow-xl border border-gray-200">
                        <div className="relative aspect-[1/1.414] w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-50 border border-gray-100">

                            {/* Primary Viewer: Iframe (Standard) */}
                            <iframe
                                src={pdfUrlWithCache}
                                className="absolute inset-0 w-full h-full border-0 rounded-2xl z-20"
                                title={`Certificate ${certId}`}
                            />

                            {/* Help Text for Local Dev Environment (Visible if preview fails/is transparent) */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center z-10 bg-gray-100">
                                <FileText className="w-16 h-16 text-gray-300 mb-4" />
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Security Notice</h3>
                                <p className="text-gray-500 max-w-xs mx-auto mb-6">
                                    If the preview is blocked or blank, please click below to open the certificate.
                                </p>
                                <a
                                    href={pdfUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition-all"
                                >
                                    OPEN PREVIEW MANUALLY
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex flex-col items-center gap-4">
                        <div className="flex items-center gap-3 px-4 py-2 bg-yellow-50 border border-yellow-200 rounded-full">
                            <AlertTriangle size={16} className="text-yellow-600" />
                            <span className="text-xs font-bold text-yellow-800 uppercase tracking-widest">Notice: Browser settings may block embedded previews.</span>
                        </div>
                    </div>

                    {/* Trust Footer */}
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-gray-200 text-gray-500">
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                <FileText size={22} />
                            </div>
                            <div>
                                <h4 className="text-gray-900 font-bold text-sm">Secure Format</h4>
                                <p className="text-xs font-medium">Original PDF Document</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                <FileCheck size={22} />
                            </div>
                            <div>
                                <h4 className="text-gray-900 font-bold text-sm">Cryptographic Check</h4>
                                <p className="text-xs font-medium">Identity Verified & Signed</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 md:justify-end">
                            <div className="text-right">
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-tight">Authenticity Guaranteed</p>
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
