import type { PropsWithChildren } from 'react';

import Header from '@/components/layout/Header';

export default function MainLayout({ children }: PropsWithChildren) {
    return (
        <>
            <Header />
            <div className="pt-16">{children}</div>
        </>
    );
}
