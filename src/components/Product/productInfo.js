"use client";

import Image from "next/image";

import ChevronSvg from "../icons/chevron";
import CloudSvg from "../icons/cloud";
import DeliverySvg from "../icons/delivery";
import DiscountSvg from "../icons/discount";
import FlagSvg from "../icons/flag";
import HandmadeSvg from "../icons/handmade";
import Accordion from "../UI/accordion";
import Breadcrumbs from "../UI/breadcrumbs";
import Button from "../UI/button";
import ProductRating from "../UI/productRating";
import Tag from "../UI/tag";
import ProductDescription from "./productDescription";
import PlusSvg from "../icons/plus";

const LINKS = [
    { label: "Home", href: "#" },
    { label: "Shoes", href: "#" },
    { label: "Men's Shoes", href: "#" },
    { label: "Sneakers", href: "#" },
    { label: "Tie Sneakers", href: "#", active: true }
]

const PRODUCT_DETAILS = [
    'Size',
    'Color',
    'Personalization'
]


const PRODUCT_INFO = [
    'PRICE HISTORY',
    'PAYMENT METHODS'
]

const ProductInfo = () => {
    return (
        <div className="w-full h-full flex flex-col gap-[32px] justify-start px-[48px] py-[22px]">
            <div className="grid grid-col gap-[33px] pt-[16px]">
                <Breadcrumbs items={LINKS}/>
                <div className="grid grid-col gap-[22px]">
                    <div className="grid grid-col gap-[16px]">
                        <h1 className="text-2xl font-extralight text-[var(--grayscale-900)]]">
                            Custom nike sneakers, white unisex sneakers. Alien art, sneakers nike air force
                        </h1>  
                        <ProductRating rating={4.7} reviewCount={40} />
                    </div>
                    <div className="grid grid-col gap-[8px]">
                        <div className="flex items-center gap-[8px]">
                            <span className="text-2xl font-extralight text-[var(--grayscale-900)]">$ 240.00</span>
                            <span className="text-base font-normal text-[var(--grayscale-300)] thin-strike">$ 365.50</span>
                        </div>
                        <div className="flex flex-row gap-[10px]">
                            <Tag icon={<DiscountSvg />} text={'32% off'} color={'var(--grayscale-950)'}/>
                            <Tag icon={<DeliverySvg />} text={'Free delivery'} color={'var(--grayscale-950)'}/>
                            <Tag icon={<HandmadeSvg />} text={'Handmade'} color={'var(--grayscale-950)'}/>
                            <Tag icon={<CloudSvg />} text={'Digital'} color={'var(--grayscale-950)'}/>
                        </div>
                    </div>
                    <Accordion titles={PRODUCT_DETAILS} icon={<ChevronSvg color={'var(--grayscale-950)'}/>}/>
                    <div className="flex flex-col gap-[8px]">
                        <Button text='Buy Now' />
                        <Button text='Add to Cart' textColor="var(--grayscale-900)" bgColor="var(--background)" bordered={true} borderColor="var(--grayscale-200)" />
                        <Button text='Add to Wishlist' textColor="var(--grayscale-900)" bgColor="var(--background)"/>
                    </div>
                </div>
            </div>
            <div className="grid grid-col gap-[26px]">
                <div className="grid grid-col gap-[24px]">
                    <ProductDescription text={'Discover your inner world as a street artist in our custom-made Nike Air Force sneakers with vibrant graffiti patterns.  These sneakers are not just shoes, they are a bold expression of individuality and creativity. Talented artists carefully paint each pair by hand, so no two pairs are exactly the same. The graffiti style gives the classic Nike Air Force design an urban touch, turning these sneakers into a real work of art that reflects the essence of street culture. '}/>
                    <div className="flex flex-row justify-between">
                        <button className="flex flex-row gap-[6px] justify-start items-center font-light text-sm">
                            <FlagSvg color={'var(--grayscale-950)'}/>
                            Report This Item
                        </button>
                        <span className="text-sm font-extralight text-[var(--grayscale-400)]">
                            June 16, 2024 
                        </span>
                    </div>
                </div>
                <div className="grid grid-col gap-[24px]">
                    <div className="flex flex-row justify-between">
                        <button className="flex flex-row gap-[17px] justify-start items-center font-light text-sm">
                            <Image
                                src="/svg/sellerLogo.svg"
                                alt="Seller logo"
                                width={24}
                                height={24}
                            />
                            <p className="text-lg">olganikeart</p>
                        </button>
                        <div className="flex flex-row gap-[8px]">
                            <Button text={'Message'} size={1}  bordered='true' borderColor="var(--grayscale-900)" bgColor="var(--background)" textColor="var(--grayscale-900)"/>
                            <Button text={'Follow'} size={1}/>
                        </div>
                    </div>
                    <Accordion titles={PRODUCT_INFO} icon={<PlusSvg color={'var(--grayscale-950)'}/>}/>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo;