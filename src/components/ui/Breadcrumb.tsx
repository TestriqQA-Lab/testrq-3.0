import Link from 'next/link';
import { FaChevronRight, FaHome } from 'react-icons/fa';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    className?: string;
    variant?: 'light' | 'dark';
}

export default function Breadcrumb({ items, className = '', variant = 'light' }: BreadcrumbProps) {
    const isDark = variant === 'dark';
    const baseTextColor = isDark ? 'text-white' : 'text-gray-600';
    const separatorColor = isDark ? 'text-white/80' : 'text-gray-400';
    const activeColor = isDark ? 'text-white font-semibold' : 'text-[theme(color.brand.blue)]';
    const hoverColor = isDark ? 'hover:text-blue-200' : 'hover:text-[theme(color.brand.blue)]';

    return (
        <div className={`flex items-center gap-2 text-sm font-medium mb-6 ${baseTextColor} ${className}`}>
            <Link
                href="/"
                className={`flex items-center gap-2 ${hoverColor} transition-colors`}
            >
                <FaHome className="text-lg" />
                Home
            </Link>

            {items.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                    <FaChevronRight className={`text-xs ${separatorColor}`} />
                    {item.href ? (
                        <Link
                            href={item.href}
                            className={`${hoverColor} transition-colors`}
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span className={activeColor}>
                            {item.label}
                        </span>
                    )}
                </div>
            ))}
        </div>
    );
}
