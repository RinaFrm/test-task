"use client";

import StarRatingSvg from "../icons/starRating";


const ProductRating = ({ rating = 0, reviewCount = 0 }) => {

    return (
        <div className="flex items-center gap-[8px] text-sm">
            {/* Рейтинг удобно готовым компонентом сделать, а это зависит от того, с какой библиотекой вы работаете  */}
            <StarRatingSvg />
            <span className="font-semibold text-[var(--grayscale-900)]">{rating}</span>
            <span className="font-extralight text-[var(--grayscale-400)]">({reviewCount} reviews)</span>
        </div>
    );
};

export default ProductRating; 