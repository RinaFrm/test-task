"use client";

import ProductInfo from "../../components/Product/productInfo";
import ProductPreview from "../../components/Product/productPreview";

const PRODUCT_IMAGES = [
    '/images/product.webp'
]

const ProductPage = () => {
    return (
        <section className="grid grid-cols-[808px_560px]">
            <ProductPreview images={PRODUCT_IMAGES}/>
            <ProductInfo />
        </section>
    )
}

export default ProductPage; 