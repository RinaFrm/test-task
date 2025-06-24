function ProfileSvg({ color = "currentColor", ...props }) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M17.6965 23C20.6851 23 23.5126 19.2622 21.0784 17.5C19.0948 16.064 17.6965 14.75 12.2853 14.75C6.87401 14.75 4.79968 16.064 2.81612 17.5C0.381914 19.2622 3.88546 23 6.87401 23H17.6965Z" fill={color}/>
            <path d="M17.6965 6.5C17.6965 9.53757 15.2738 12 12.2853 12C9.29671 12 6.87401 9.53757 6.87401 6.5C6.87401 3.46243 9.29671 1 12.2853 1C15.2738 1 17.6965 3.46243 17.6965 6.5Z" fill={color}/>
        </svg>
    )
}

export default ProfileSvg; 