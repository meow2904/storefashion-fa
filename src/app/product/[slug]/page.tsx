"use client";
import ProductDetailPage from "@/components/pages/product-detail/product-detail";
import { use } from "react";

interface Props {
    params: Promise<{ slug: string }>;
}

export default function DetailPage({ params }: Props) {
    const { slug } = use(params);

    return (
        <div className="container mx-auto py-20">
            <ProductDetailPage />
        </div>
    );
}