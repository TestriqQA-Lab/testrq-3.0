import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Verify Certificate | Testriq',
    description: 'Verify the authenticity of Testriq QA certificates.',
    robots: {
        index: false,
        follow: false,
        nocache: true,
        googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'none',
            'max-snippet': -1,
        },
    },
};

export default function VerifyCertificateLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
