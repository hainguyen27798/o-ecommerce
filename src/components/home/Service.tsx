'use client';

import { Button } from 'antd';
import { Box } from 'lucide-react';
import Image from 'next/image';

const serviceList = [
    {
        image: '/auth.png',
        title: 'Authentication & Authorization',
    },
    {
        image: '/send-mail.png',
        title: 'Send SMTP',
    },
    {
        image: '/upload-file.png',
        title: 'Upload file to cloud',
    },
    {
        image: '/system.png',
        title: 'Ecommerce Management',
    },
];

export default function Service() {
    return (
        <>
            <div className="grid grid-cols-2 gap-px border-x border-b border-zinc-200 bg-zinc-200 md:grid-cols-3">
                <div className="row-span-2 bg-white">
                    <div className="p-6 text-3xl font-black text-zinc-700">Our Service</div>
                </div>
                {serviceList.map((service, id) => (
                    <div key={`service_${id}`} className="flex flex-col items-center gap-3 bg-white p-6">
                        <Image src={service.image} height={60} width={60} alt={service.title} />
                        <div className="flex flex-1 items-center justify-center text-center text-lg font-bold text-zinc-700">
                            {service.title}
                        </div>
                        <Button type="dashed">
                            <div className="flex items-center justify-center gap-2">
                                <Box size={16} />
                                Get Image
                            </div>
                        </Button>
                    </div>
                ))}
            </div>
        </>
    );
}
