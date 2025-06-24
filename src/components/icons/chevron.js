function ChevronSvg({ color = "currentColor", ...props }) {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M12.5 15.8333L6.66666 9.99999L12.5 4.16666" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export default ChevronSvg; 