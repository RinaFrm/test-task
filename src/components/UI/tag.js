"use client";

const Tag = ({ text, icon }) => {

  return (
    <div className="inline-flex items-center px-[8px] py-[5px] gap-[10px] text-xs bg-[var(--grayscale-100)]">
      {icon && <span className="w-4 h-4 flex items-center justify-center">{icon}</span>}
      <p className="font-extralight text-[var(--grayscale-900)]">{text}</p>
    </div>
  );
};

export default Tag; 