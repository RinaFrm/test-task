function FlagSvg({ color = "currentColor", ...props }) {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M2.66669 10.4581C6.54547 7.42514 9.45457 13.4908 13.3334 10.4579V2.87565C9.45457 5.90856 6.54547 -0.157402 2.66669 2.87551V10.4581Z" fill={color}/>
            <path d="M2.66669 14V10.4581M2.66669 10.4581C6.54547 7.42514 9.45457 13.4908 13.3334 10.4579V2.87565C9.45457 5.90856 6.54547 -0.157402 2.66669 2.87551V10.4581Z" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export default FlagSvg; 