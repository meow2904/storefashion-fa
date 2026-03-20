"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/utils/cn";

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    isOpen: boolean;
    onClick: () => void;
}

// 1. Component con cho từng mục
function AccordionItem({ title, children, isOpen, onClick }: AccordionItemProps) {
    return (
        <div className="border-b border-zinc-100">
            <button
                onClick={onClick}
                className="flex w-full items-center justify-between py-5 text-left transition-all"
            >
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-900">
                    {title}
                </span>
                <ChevronDown
                    size={16}
                    className={cn("text-zinc-400 transition-transform duration-300", isOpen && "rotate-180")}
                />
            </button>

            {/* Hiệu ứng trượt mượt mà bằng CSS Grid */}
            <div
                className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr] opacity-100 mb-6" : "grid-rows-[0fr] opacity-0"
                )}
            >
                <div className="overflow-hidden">
                    <div className="text-sm leading-relaxed tracking-wide text-zinc-500">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

// 2. Component chính
export function ProductAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // Mặc định mở cái đầu tiên

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full pt-4">
            <AccordionItem
                title="Material & Care"
                isOpen={openIndex === 0}
                onClick={() => toggle(0)}
            >
                100% Giza Cotton. Cold machine wash with similar colors. Do not bleach.
                Hang dry to maintain shape and fiber integrity.
            </AccordionItem>

            <AccordionItem
                title="Detailed Size Guide"
                isOpen={openIndex === 1}
                onClick={() => toggle(1)}
            >
                Our Signature Tee fits true to size. For an oversized look, we recommend
                sizing up. Detailed measurements are available in our universal size chart.
            </AccordionItem>

            <AccordionItem
                title="Shipping & Returns"
                isOpen={openIndex === 2}
                onClick={() => toggle(2)}
            >
                Complimentary express shipping on all orders over $200. Returns are accepted
                within 14 days of delivery in original condition.
            </AccordionItem>
        </div>
    );
}