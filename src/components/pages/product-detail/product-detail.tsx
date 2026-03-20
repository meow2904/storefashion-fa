import { ProductImages } from "@/components/pages/product-detail/ProductImages";
import { ProductInfo } from "@/components/pages/product-detail/ProductInfo";

const ProductDetailPage = () => {
    return (
        <div className="container mx-auto px-4 lg:px-12 xl:px-12 py-10 lg:py-12 max-w-[1500px]">
            <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start">
                <ProductImages />
                <div className="md:sticky md:top-28">
                    <ProductInfo />
                </div>

            </div>
        </div>
    )
}

export default ProductDetailPage;