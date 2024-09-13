import './globals.css';

import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import type { Metadata } from 'next';
import React from 'react';

import { MainLayout } from '@/components/layout';
import { theme } from '@/configs';

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
            <body suppressHydrationWarning>
                <AntdRegistry>
                    <ConfigProvider theme={theme}>
                        <MainLayout>{children}</MainLayout>
                    </ConfigProvider>
                </AntdRegistry>
            </body>
        </html>
    );
}
