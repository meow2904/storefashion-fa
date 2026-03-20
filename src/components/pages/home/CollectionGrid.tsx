import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function CollectionGrid() {
    return (
        <section className="py-20 px-6 md:px-16 lg:px-24 bg-white">
            {/* Header Section */}
            <div className="flex items-end justify-between mb-10">
                <div>
                    <h2 className="text-3xl font-medium tracking-tight">Curated Visions</h2>
                    <p className="text-sm text-zinc-500 mt-2">Distinct categories, singular focus.</p>
                </div>
                <a href="#" className="text-[10px] font-bold uppercase tracking-widest border-b border-zinc-300 pb-1 hover:border-black transition-all">
                    All Collections
                </a>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[600px] md:h-[700px]">

                {/* BIG CARD: Tailored Essentials */}
                <div className="md:col-span-2 relative group overflow-hidden bg-zinc-100">
                    <Image
                        src="/collection-1.jpg"
                        alt="Tailored Essentials"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay Gradient giúp chữ dễ đọc hơn */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute bottom-10 left-10 text-white space-y-4">
                        <h3 className="text-3xl font-bold tracking-tight">Tailored Essentials</h3>
                        <p className="text-sm text-zinc-200 max-w-xs">The building blocks of a modern wardrobe.</p>
                        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8">
                            SHOP NOW
                        </Button>
                    </div>
                </div>

                {/* RIGHT COLUMN: 2 Small Cards */}
                <div className="grid grid-rows-2 gap-4">

                    {/* Card: Avant-Garde */}
                    <div className="relative group overflow-hidden bg-zinc-200">
                        <Image
                            src="/collection-2.jpg"
                            alt="Avant-Garde Outerwear"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                        <div className="absolute bottom-6 left-6 text-white">
                            <h4 className="text-lg font-bold tracking-tight">Avant-Garde Outerwear</h4>
                        </div>
                    </div>

                    {/* Card: Objects of Desire */}
                    <div className="relative group overflow-hidden bg-[#6B7A68]">
                        <Image
                            src="/collection-3.jpg"
                            alt="Objects of Desire"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                        />
                        <div className="absolute bottom-6 left-6 text-white">
                            <h4 className="text-lg font-bold tracking-tight">Objects of Desire</h4>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}