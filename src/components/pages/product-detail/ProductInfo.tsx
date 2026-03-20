// src/components/product-detail/ProductInfo.tsx
"use client";
import { ColorPicker, SizePicker } from "./Picker";
import { ProductAccordion } from "./ProductAccordion";
import { Actions } from "@/components/ui/Actions";
import { useState } from "react";

export function ProductInfo() {
    const [selectedSize, setSelectedSize] = useState<string>("");
    const [selectedColor, setSelectedColor] = useState<string>("White");

    return (
        <div className="flex flex-col w-full lg:pl-8">
            {/* Thông tin chung */}
            <div className="flex flex-col gap-6">
                <div className="space-y-2">
                    <span className="text-[11px] uppercase tracking-[0.3em] text-zinc-400 font-medium">
                        Essentials Collection
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 leading-tight">
                        The Signature Tee
                    </h1>
                    <p className="text-xl font-medium text-zinc-500 mt-4">
                        $78.00
                    </p>
                </div>

                <p className="max-w-[420px] text-sm text-zinc-500 leading-relaxed tracking-wide border-t border-zinc-100 pt-6">
                    A masterclass in restraint. Crafted from 240GSM long-staple Egyptian cotton,
                    this silhouette features a slightly dropped shoulder and a refined ribbed neckline.
                </p>
            </div>

            {/* Các lựa chọn đưa xuống dưới và khống chế độ rộng */}
            <div className="flex flex-col gap-8 mt-10 max-w-[420px]">
                <ColorPicker selectedColor={selectedColor} onSelectColor={setSelectedColor} />
                <SizePicker selectedSize={selectedSize} onSelectSize={setSelectedSize} />

                <Actions
                    productId="tee-001"
                    selectedSize={selectedSize}
                    selectedColor={selectedColor}
                    isAvailable={true}
                    className="pt-2"
                />
            </div>

            {/* Dưới cùng */}
            <div className="border-t border-zinc-100 mt-12 pt-4 w-full">
                <ProductAccordion />
            </div>
        </div>
    );
}