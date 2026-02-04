import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function ContactCTA() {
    return (
        <div className="my-12 relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-8 sm:p-12 text-center shadow-2xl shadow-blue-900/20">
            {/* Background patterns */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-50%] left-[-10%] w-[50%] h-[50%] bg-blue-500/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute bottom-[-50%] right-[-10%] w-[50%] h-[50%] bg-indigo-500/20 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Ready to elevate your quality assurance?
                </h3>
                <p className="text-blue-100 max-w-2xl text-lg leading-relaxed">
                    Ensure your software is seamless, secure, and user-friendly. Connect with our experts today.
                </p>

                <Link
                    href="/contact-us"
                    className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95"
                >
                    <span>Contact Us</span>
                    <FaArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </div>
    );
}
