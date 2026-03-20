import { ProductCard } from "@/components/shared/ProductCard";

const MOCK_PRODUCTS = [
    { id: 1, name: "Linen Blend Tunic", color: "Oatmeal", price: 185, imageUrl: "/p1.jpg", href: "/product/1" },
    { id: 2, name: "Minimalist Knit Vest", color: "Stone", price: 140, imageUrl: "/p2.jpg", href: "/product/2" },
    { id: 3, name: "Wide Leg Denim", color: "Raw Indigo", price: 210, imageUrl: "/p3.jpg", href: "/product/3" },
    { id: 4, name: "Structured Blazer", color: "Midnight Black", price: 495, imageUrl: "/p4.jpg", href: "/product/4" },
];

export function NewArrivals() {
    return (
        <section className="py-20 px-6 md:px-16 lg:px-24 bg-white">
            <div className="flex items-end justify-between mb-12 border-b border-zinc-100 pb-4">
                <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400">The Latest</span>
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tighter uppercase">
                        New Arrivals <span className="font-light text-zinc-300 italic inline-block ml-2">/ Sản phẩm mới</span>
                    </h2>
                </div>

                <a href="/all" className="text-[10px] font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-zinc-500 hover:border-zinc-500 transition-colors">
                    View All
                </a>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                {MOCK_PRODUCTS.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </section>
    );
}