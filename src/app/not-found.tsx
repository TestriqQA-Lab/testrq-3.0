import Link from 'next/link';
import { FaHome } from 'react-icons/fa';

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 text-center bg-gray-50">
            <h1 className="text-9xl font-bold text-gray-200">404</h1>
            <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-6">Page Not Found</h2>
            <p className="text-lg text-gray-600 max-w-md mx-auto mb-8">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                <Link
                    href="/"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[theme(color.brand.blue)] text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold"
                >
                    <FaHome />
                    Return Home
                </Link>

                <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[theme(color.brand.blue)] text-[theme(color.brand.blue)] rounded-lg hover:bg-blue-50 transition-colors duration-300 font-semibold"
                >
                    Contact Support
                </Link>
            </div>

            <div className="mt-12 text-sm text-gray-500">
                <p>Looking for something specific?</p>
                <div className="mt-4 flex flex-wrap justify-center gap-4">
                    <Link href="/web-application-testing-services" className="hover:text-[theme(color.brand.blue)] underline">Web Testing</Link>
                    <Link href="/mobile-application-testing" className="hover:text-[theme(color.brand.blue)] underline">Mobile Testing</Link>
                    <Link href="/api-testing" className="hover:text-[theme(color.brand.blue)] underline">API Testing</Link>
                    <Link href="/blog" className="hover:text-[theme(color.brand.blue)] underline">Blog</Link>
                </div>
            </div>
        </div>
    );
}
