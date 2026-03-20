"use client";

import React, { useState } from "react";
import { Heart, ShoppingBag, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/utils/cn";

interface ActionsProps {
    productId: string;
    selectedSize?: string;
    selectedColor?: string;
    isAvailable?: boolean;
    className?: string;
}

export function Actions({
    productId,
    selectedSize,
    selectedColor,
    isAvailable = true,
    className,
}: ActionsProps) {
    const [isAdding, setIsAdding] = useState(false);
    const [isWishlisted, setIsWishlisted] = useState(false);

    const handleAddToCart = async () => {
        if (!selectedSize || !selectedColor) {
            alert("Please select size and color");
            return;
        }

        setIsAdding(true);
        // Giả lập gọi API Add to Cart
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log(`Added product ${productId} to cart with size ${selectedSize}`);
        setIsAdding(false);
    };

    return (
        <div className={cn("grid grid-cols-2 gap-4 w-full", className)}>
            {/* Nút Add to Cart chính */}
            <Button
                onClick={handleAddToCart}
                disabled={!isAvailable || isAdding}
                className={cn(
                    "flex items-center justify-center w-full h-14 rounded-sm text-[11px] font-bold uppercase tracking-[0.2em] transition-all",
                    isAvailable
                        ? "bg-[#2D6A64] hover:bg-[#23534e] text-white"
                        : "bg-zinc-200 text-zinc-400 cursor-not-allowed"
                )}
            >
                {isAdding ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                    <ShoppingBag className="mr-2 h-4 w-4" />
                )}
                {isAvailable ? (isAdding ? "Adding..." : "Add to Cart") : "Out of Stock"}
            </Button>

            {/* Nút Wishlist phụ */}
            <Button
                variant="outline"
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={cn(
                    "flex items-center justify-center w-full h-14 rounded-sm text-[11px] font-bold uppercase tracking-[0.2em] border-zinc-200 hover:border-zinc-900 group",
                    isWishlisted && "bg-zinc-50 border-zinc-900"
                )}
            >
                <Heart
                    size={16}
                    className={cn(
                        "mr-2 transition-colors",
                        isWishlisted ? "fill-red-500 text-red-500" : "text-zinc-300 group-hover:text-red-500"
                    )}
                />
                {isWishlisted ? "In Wishlist" : "Wishlist"}
            </Button>
        </div>
    );
}