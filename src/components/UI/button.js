"use client";

const Button = ({
  text,
  bgColor = "var(--grayscale-900)",
  borderColor = "var(--grayscale-900)",
  bordered = false,
  textColor = "var(--background)",
  width = 'full',
  size = 2,
  ...props
}) => {
  return (
    <button
      className="px-[16px] rounded-[32px] font-light cursor-pointer"
      style={{
        height: size === 2 ? '56px' : '32px',
        background: bgColor,
        color: textColor,
        fontSize: size === 2 ? '18px' : '14px',
        border: bordered ? `1px solid ${borderColor}` : "none",
      }}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button; 