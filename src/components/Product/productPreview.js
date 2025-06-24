"use client";

import { useState } from "react";
import ChevronSvg from "@/src/components/icons/chevron";

const ProductPreview = ({ images = [] }) => {
  const [current, setCurrent] = useState(0);
  if (!images.length) return null;
  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="relative w-full bg-transparent h-[680px]">
        <div className="absolute flex flex-row justify-between top-[47%] w-full px-[17px]">
            <button 
                onClick={prev} 
                className="w-[40px] h-[40px] flex justify-center items-center z-2 rounded-full border-1 border-[var(--grayscale-200)] bg-[var(--background)] cursor-pointer"
            >
                <ChevronSvg color={'var(--grayscale-900)'}/>
            </button>
            <button 
                onClick={next} 
                className="w-[40px] h-[40px] flex justify-center items-center z-2 rounded-full border-1 border-[var(--grayscale-200)] bg-[var(--background)] cursor-pointer"
            >
                <ChevronSvg style={{ transform: 'rotate(180deg)' }} color={'var(--grayscale-900)'}/>
            </button>
        </div>
        <div className="relative h-full w-full flex items-center">
            <img 
                src={images[current]} 
                alt={`Product image ${current + 1}`} 
                className="block fit-cover"
            />
        </div>
        <div className="h-[4px] overflow-hidden">
            <div className="h-full w-[120px] bg-[var(--grayscale-900)]"/>
        </div>
    </div>
  );
};

export default ProductPreview; 