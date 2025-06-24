"use client";

import Link from 'next/link';

const Breadcrumbs = ({ items = [] }) => {
    return (
        <nav>
            <ol className="flex items-center gap-[8px] text-sm font-extralight text-[var(--grayscale-500)]">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center gap-[9px]">
                        {index > 0 && <span className="pointer-events-none">/</span>}
                        <Link href={item.href} className={`${item.active ? 'font-light text-[var(--grayscale-950)]' : ''}`}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumbs; 