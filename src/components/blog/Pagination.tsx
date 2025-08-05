// src/components/blog/Pagination.tsx
import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string; // e.g., '/blog' or '/blog/category/tech'
  className?: string;
}

export default function Pagination({ currentPage, totalPages, basePath, className = '' }: PaginationProps) {
  if (totalPages <= 1) return null;

  const getPageUrl = (page: number) => {
    if (page === 1) {
      return basePath;
    }
    return `${basePath}?page=${page}`;
  };

  const renderPageNumbers = () => {
    const pages = [];
    const showPages = 5; // Number of page numbers to show
    let startPage = Math.max(1, currentPage - Math.floor(showPages / 2));
    let endPage = Math.min(totalPages, startPage + showPages - 1);

    // Adjust start page if we're near the end
    if (endPage - startPage < showPages - 1) {
      startPage = Math.max(1, endPage - showPages + 1);
    }

    // Previous page
    if (currentPage > 1) {
      pages.push(
        <Link
          key="prev"
          href={getPageUrl(currentPage - 1)}
          className="px-3 py-2 mx-1 text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-100 hover:text-gray-700 transition-colors duration-200"
        >
          Previous
        </Link>
      );
    }

    // First page
    if (startPage > 1) {
      pages.push(
        <Link
          key={1}
          href={getPageUrl(1)}
          className="px-3 py-2 mx-1 text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-100 hover:text-gray-700 transition-colors duration-200"
        >
          1
        </Link>
      );
      if (startPage > 2) {
        pages.push(
          <span key="ellipsis1" className="px-3 py-2 mx-1 text-gray-500">
            ...
          </span>
        );
      }
    }

    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <Link
          key={i}
          href={getPageUrl(i)}
          className={`px-3 py-2 mx-1 border rounded-md transition-colors duration-200 ${
            i === currentPage
              ? 'bg-blue-600 text-white border-blue-600'
              : 'text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700'
          }`}
        >
          {i}
        </Link>
      );
    }

    // Last page
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <span key="ellipsis2" className="px-3 py-2 mx-1 text-gray-500">
            ...
          </span>
        );
      }
      pages.push(
        <Link
          key={totalPages}
          href={getPageUrl(totalPages)}
          className="px-3 py-2 mx-1 text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-100 hover:text-gray-700 transition-colors duration-200"
        >
          {totalPages}
        </Link>
      );
    }

    // Next page
    if (currentPage < totalPages) {
      pages.push(
        <Link
          key="next"
          href={getPageUrl(currentPage + 1)}
          className="px-3 py-2 mx-1 text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-100 hover:text-gray-700 transition-colors duration-200"
        >
          Next
        </Link>
      );
    }

    return pages;
  };

  return (
    <nav className={`flex justify-center items-center mt-8 ${className}`}>
      <div className="flex items-center">
        {renderPageNumbers()}
      </div>
    </nav>
  );
}