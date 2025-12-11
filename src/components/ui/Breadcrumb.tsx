import Link from 'next/link';
import { FaChevronRight, FaHome } from 'react-icons/fa';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    className?: string;
}

export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
    return (
        <div className={`flex items-center gap-2 text-sm font-medium text-gray-600 mb-6 ${className}`}>
            <Link
                href="/"
                className="flex items-center gap-2 hover:text-[theme(color.brand.blue)] transition-colors"
            >
                <FaHome className="text-lg" />
                Home
            </Link>

            {items.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                    <FaChevronRight className="text-xs text-gray-400" />
                    {item.href ? (
                        <Link
                            href={item.href}
                            className="hover:text-[theme(color.brand.blue)] transition-colors"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-[theme(color.brand.blue)]">
                            {item.label}
                        </span>
                    )}
                </div>
            ))}
        </div>
    );
}
