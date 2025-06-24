"use client";

const ProductDescription = ({ text, maxLines = 4 }) => {
  return (
    <div className="relative flex flex-col gap-[8px] font-extralight">
      <p
        className="text-base text-[var(--grayscale-700)] overflow-hidden"
        style={{
          display: '-webkit-box',
          WebkitLineClamp: maxLines,
          WebkitBoxOrient: 'vertical',
          lineClamp: maxLines,
          WebkitMaskImage: 'linear-gradient(180deg, #000 60%, transparent 100%)',
          maskImage: 'linear-gradient(180deg, #000 60%, transparent 100%)',
        }}
      >
        {text}
      </p>
      <div className="flex justify-center">
        <button className="text-[var(--grayscale-950)] text-sm underline cursor-pointer">
          Read More
        </button>
      </div>
    </div>
  );
};

export default ProductDescription; 