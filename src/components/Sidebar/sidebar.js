"use client";

import CompassSvg from "@/src/components/icons/compass";
import LogoSvg from "@/src/components/icons/logo";
import SearchSvg from "@/src/components/icons/search";
import ChatSvg from "@/src/components/icons/chat";
import ShoppingSvg from "@/src/components/icons/shopping";
import ProfileSvg from "@/src/components/icons/profile";

const Sidebar = () => {
  return (
    <nav className="h-full w-[72px] flex flex-col items-center justify-start py-[36px] px-[12px] gap-[198px]">
        <a href="#" aria-label="Home">
            <LogoSvg />
        </a>
        <div className="flex flex-col gap-[36px]">
            <a href="#" aria-label="Home">
                <SearchSvg color={'var(--grayscale-300)'}/>
            </a>
            <a href="#" aria-label="Home">
                <CompassSvg color={'var(--grayscale-300)'}/>
            </a>
            <a href="#" aria-label="Home" className="relative">
                <ChatSvg color={'var(--grayscale-300)'}/>
                <span className="absolute top-[-4px] px-[3px] right-[-8px] h-[16px] rounded-full flex justify-center items-center text-[10px] bg-[var(--grayscale-900)] text-[var(--background)]">
                    44
                </span>
            </a>
            <a href="#" aria-label="Home" className="relative">
                <ShoppingSvg color={'var(--grayscale-300)'}/>
                <span className="absolute top-[-4px] right-[-8px] px-[3px] h-[16px] rounded-full flex justify-center items-center text-[10px] bg-[var(--grayscale-900)] text-[var(--background)]">
                    251
                </span>
            </a>
            <a href="#" aria-label="Home">
                <ProfileSvg color={'var(--grayscale-950)'}/>
            </a>
        </div>
    </nav>
  );
}

export default Sidebar;