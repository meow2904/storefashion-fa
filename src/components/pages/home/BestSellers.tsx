import { ProductCard } from "@/components/shared/ProductCard";

export function BestSellers() {
    const BEST_SELLERS = [
        { id: 1, name: "Sculptural Wool Overcoat", color: "Charcoal Marl", price: 890, imageUrl: "/coat.jpg", href: "/product/coat" },
        { id: 2, name: "Liquid Silk Drape Shirt", color: "Pearl White", price: 320, imageUrl: "/shirt.jpg", href: "/product/shirt" },
        { id: 3, name: "Architectural Pleated Trouser", color: "Sand Dune", price: 450, imageUrl: "/trouser.jpg", href: "/product/trouser" },
        { id: 4, name: "Monolith Leather Tote", color: "Obsidian Black", price: 1200, imageUrl: "/bag.jpg", href: "/product/bag" },
    ];

    return (
        <section className="py-24 px-6 md:px-16 lg:px-24 bg-white">
            {/* Header căn giữa */}
            <div className="text-center mb-16 space-y-2">
                <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 font-medium">Essentials</span>
                <h2 className="text-3xl font-bold tracking-tighter uppercase">
                    Best Sellers <span className="font-light text-zinc-300 italic">/ Sản phẩm bán chạy</span>
                </h2>
            </div>

            {/* Grid sản phẩm */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
                {BEST_SELLERS.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </section>
    );
}