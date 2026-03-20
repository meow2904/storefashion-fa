import { ShoppingBag } from "lucide-react";
import { MobileMenu } from "../layouts/MobileMenu";
import { NavMenu } from "../layouts/NavMenu";
import { InputSearch } from "../ui/InputSearch";


async function getMenu() {
    return [
        {
            id: '1', title: 'COLLECTIONS', submenu: [
                { id: 's1', title: 'SUMMER 26', href: '/ss26' },
                { id: 's2', title: 'SPRING 26', href: '/sp26' },
                { id: 's3', title: 'WINTER 26', href: '/wi26' },
                { id: 's4', title: 'FALL 26', href: '/fa26' },
            ]
        },
        { id: '2', title: 'NEW ARRIVALS', href: '/new' },
        { id: '3', title: 'ARCHIVE', href: '/archive' },
        { id: '4', title: 'ABOUT', href: '/about' },
    ];
}

export async function Header() {
    const menuData = await getMenu();
    return (
        <header className="sticky top-0 z-40 w-full border-b border-zinc-100 bg-white/80 backdrop-blur-md">
            <div className="container mx-auto px-6 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
                <div className="flex items-center gap-4 lg:gap-12">
                    <a href="/" className="text-xl lg:text-2xl font-bold tracking-[0.2em] lg:tracking-[0.3em] uppercase">Curator</a>
                    <NavMenu items={menuData} />
                </div>

                <div className="flex items-center gap-4 lg:gap-6">
                    <div className="hidden lg:block w-100">
                        <InputSearch placeholder="Search products...    "
                            className='rounded-4xl focus:border-gray-400'
                        />
                    </div>
                    <button className="relative p-1 lg:p-0">
                        <ShoppingBag className="size-5 lg:size-5" strokeWidth={1.5} />
                        <span className="absolute top-0 right-0 lg:-top-2 lg:-right-2 bg-black text-white text-[8px] lg:text-[9px] w-3.5 h-3.5 lg:w-4 lg:h-4 rounded-full flex items-center justify-center">0</span>
                    </button>
                    <MobileMenu items={menuData} />
                </div>
            </div>
        </header>
    );
};