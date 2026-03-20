import ProductDetailPage from "@/components/pages/product-detail/product-detail";

interface Props {
    params: { slug: string };
}

export default async function DetailPage({ params }: Props) {
    const { slug } = params;

    return (
        <div className="container mx-auto py-20">
            <ProductDetailPage />
        </div>
    );
}