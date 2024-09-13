'use client';

const navList = [
    {
        name: 'Home',
        link: '/',
    },
    {
        name: 'Service',
        link: '/service',
    },
    {
        name: 'Features',
        link: '/features',
    },
    {
        name: 'Products',
        link: '/products',
    },
];

export default function HeaderNav() {
    return (
        <div className="flex items-center gap-8 font-medium">
            {navList.map((item) => (
                <div key={`nav_${item.name}`} className="cursor-pointer text-zinc-500">
                    {item.name}
                </div>
            ))}
        </div>
    );
}
