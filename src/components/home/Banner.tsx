'use client';

import { Button } from 'antd';
import { ArrowRight } from 'lucide-react';

export default function Banner() {
    return (
        <div className="flex w-full items-center border border-zinc-200 p-6">
            <div className="flex w-1/2 items-center justify-center">
                <div>
                    <div className="font-title text-5xl font-black tracking-wider text-zinc-700">
                        Let us elevate <br /> Your <span className="text-nowrap">e-commerce</span>
                    </div>
                    <div className="mt-3 text-xl font-medium text-zinc-500">You focus solely on your business.</div>
                    <Button type="primary" className="mt-6 tracking-wider shadow-none">
                        <div className="flex items-center justify-center gap-2">
                            Get Started <ArrowRight size={16} />
                        </div>
                    </Button>
                </div>
            </div>
            <div className="aspect-square w-1/2 bg-banner bg-contain bg-no-repeat"></div>
        </div>
    );
}
