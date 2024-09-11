import './globals.css';

import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Open Ecommerce',
    description: 'Ecommerce services',
    icons: {
        icon: [
            {
                media: '(prefers-color-scheme: light)',
                url: '/icon.png',
                href: '/icon.png',
            },
            {
                media: '(prefers-color-scheme: dark)',
                url: '/icon.png',
                href: '/icon.png',
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body suppressHydrationWarning>{children}</body>
        </html>
    );
}
