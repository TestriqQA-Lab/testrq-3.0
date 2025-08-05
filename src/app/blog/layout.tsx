// src/app/blog/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Testriq Blog',
    default: 'Blog | Testriq',
  },
  description: 'Latest insights, tutorials, and updates from the Testriq team.',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}