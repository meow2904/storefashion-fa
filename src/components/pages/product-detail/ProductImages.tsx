"use client"

// src/components/product-detail/ProductImages.tsx
import Image from "next/image";
import { useState, useRef } from "react";
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    "/product-main.jpg",
    "/product-texture.jpg",
    "/product-style.jpg",
    "/product-main.jpg",
    "/product-texture.jpg",
    "/product-style.jpg",
    "/product-main.jpg",
    "/product-texture.jpg",
];

export function ProductImages() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handleNavigation = (direction: 'prev' | 'next') => {
        let newIndex = direction === 'prev' ? selectedIndex - 1 : selectedIndex + 1;

        if (newIndex < 0) newIndex = images.length - 1;
        if (newIndex >= images.length) newIndex = 0;

        handleSelect(newIndex);
    };

    const handleSelect = (index: number) => {
        setSelectedIndex(index);

        if (scrollContainerRef.current) {
            const button = scrollContainerRef.current.children[index] as HTMLElement;
            if (button) {
                button.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        }
    };

    return (
        <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-6 items-start lg:items-stretch w-full min-w-0">
            <div className="w-full lg:w-20 shrink-0 min-w-0 lg:relative">
                <div className="flex flex-row lg:flex-col items-center gap-2 w-full lg:absolute lg:inset-0">
                    <button
                        onClick={() => handleNavigation('prev')}
                        className="shrink-0 flex items-center justify-center p-1 lg:w-full lg:py-2 text-zinc-500 hover:text-zinc-900 bg-zinc-50 hover:bg-zinc-100 rounded-md transition-colors"
                        aria-label="Previous images"
                    >
                        <ChevronLeft className="w-5 h-5 lg:hidden" />
                        <ChevronUp className="w-5 h-5 hidden lg:block" />
                    </button>

                    <div
                        ref={scrollContainerRef}
                        className="flex flex-1 flex-row lg:flex-col min-w-0 min-h-0 gap-3 overflow-auto scrollbar-hide py-1 px-1 lg:px-0 lg:w-full"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {images.map((img, index) => (
                            <button
                                key={index}
                                onClick={() => handleSelect(index)}
                                className={`relative aspect-square w-20 lg:w-full shrink-0 border-2 overflow-hidden ${
                                    selectedIndex === index ? "border-zinc-900" : "border-zinc-100"
                                }`}
                            >
                                <Image
                                    src={img}
                                    alt={`Product variant ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => handleNavigation('next')}
                        className="shrink-0 flex items-center justify-center p-1 lg:w-full lg:py-2 text-zinc-500 hover:text-zinc-900 bg-zinc-50 hover:bg-zinc-100 rounded-md transition-colors"
                        aria-label="Next images"
                    >
                        <ChevronRight className="w-5 h-5 lg:hidden" />
                        <ChevronDown className="w-5 h-5 hidden lg:block" />
                    </button>
                </div>
            </div>

            <div className="relative aspect-3/4 w-full bg-zinc-50 overflow-hidden border border-zinc-100">
                <Image
                    src={images[selectedIndex]}
                    alt="The Signature Tee - Main View"
                    fill
                    priority
                    className="object-cover object-center"
                />
            </div>
        </div>
    );
}