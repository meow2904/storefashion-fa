import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
    name: string;
    color: string;
    price: number;
    imageUrl: string;
    href: string;
}

export function ProductCard({ name, color, price, imageUrl, href }: ProductCardProps) {
    return (
        <Link href={href} className="group block space-y-4">
            <div className="relative aspect-3/4 overflow-hidden bg-zinc-100">
                <Image
                    src={imageUrl}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <div className="space-y-1">
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-zinc-900">
                    {name}
                </h3>
                <p className="text-[11px] italic text-zinc-400">
                    {color}
                </p>
                <p className="text-[12px] font-medium text-zinc-900 mt-2">
                    ${price.toFixed(2)}
                </p>
            </div>
        </Link>
    );
}