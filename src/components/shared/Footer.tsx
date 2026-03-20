import { Globe, Share2 } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-white px-6 lg:px-24 py-10 lg:py-12 border-t border-zinc-100">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-4 text-center lg:text-left">

                <div className="space-y-2 flex flex-col items-center lg:items-start">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-900">
                        Curator Studios
                    </h3>
                    <p className="text-[10px] uppercase tracking-widest text-zinc-400">
                        © {currentYear} CURATOR STUDIOS. ALL RIGHTS RESERVED.
                    </p>
                </div>

                <nav className="flex flex-wrap justify-center lg:justify-start gap-x-6 lg:gap-x-8 gap-y-4">
                    {["Privacy", "Terms", "Shipping", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`/${item.toLowerCase()}`}
                            className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-black transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center justify-center lg:justify-start gap-6 text-zinc-400">
                    <button className="hover:text-black transition-colors p-2 lg:p-0">
                        <Globe size={18} strokeWidth={1.5} />
                    </button>
                    <button className="hover:text-black transition-colors p-2 lg:p-0">
                        <Share2 size={18} strokeWidth={1.5} />
                    </button>
                </div>

            </div>
        </footer>
    );
}