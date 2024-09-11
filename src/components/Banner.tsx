'use client';

export default function Banner() {
    return (
        <div className="container mx-auto flex items-center px-6 pt-16">
            <div className="flex w-1/2 items-center justify-center">
                <div>
                    <div className="font-title text-5xl font-black tracking-wider text-zinc-700">
                        Let us elevate <br />
                        Your e-commerce
                    </div>
                    <div className="mt-3 text-xl font-medium text-zinc-500">You focus solely on your business.</div>
                </div>
            </div>
            <div className="aspect-square w-1/2 bg-banner bg-contain bg-no-repeat"></div>
        </div>
    );
}
