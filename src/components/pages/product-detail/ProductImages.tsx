"use client"

// src/components/product-detail/ProductImages.tsx
import Image from "next/image";
import { useState } from "react";

const images = [
    "/product-main.jpg",
    "/product-texture.jpg",
    "/product-style.jpg",
];

export function ProductImages() {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-6 items-start w-full">
            <div className="flex flex-row lg:flex-col gap-3 w-full lg:w-20 shrink-0 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
                {images.map((img, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(img)}
                        className={`relative aspect-square w-20 lg:w-full shrink-0 border-2 overflow-hidden ${selectedImage === img ? "border-zinc-900" : "border-zinc-100"
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

            <div className="relative aspect-3/4 w-full bg-zinc-50 overflow-hidden border border-zinc-100">
                <Image
                    src={selectedImage}
                    alt="The Signature Tee - Main View"
                    fill
                    priority
                    className="object-cover object-center"
                />
            </div>
        </div>
    );
}