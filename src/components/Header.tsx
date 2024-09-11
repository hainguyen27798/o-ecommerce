'use client';

import Image from 'next/image';

import HeaderNav from '@/components/HeaderNav';

export default function Header() {
    return (
        <div className="fixed w-full border border-zinc-200 bg-white">
            <div className="container mx-auto flex h-16 items-center justify-between gap-2 px-6">
                <div className="flex items-center gap-2">
                    <Image src="/logo.png" alt="" height={46} width={46} priority />
                    <div className="pt-1.5">
                        <div className="font-title text-sm font-bold leading-[0.75] text-zinc-700 opacity-50">Open</div>
                        <div className="font-title text-lg font-bold text-zinc-700">Ecommerce</div>
                    </div>
                </div>
                <HeaderNav />
            </div>
        </div>
    );
}
