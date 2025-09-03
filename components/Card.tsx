"use client";

import { Heart } from "lucide-react";
import { CardProps } from "../types";

export default function Card({
    title = "Placeholder",
    price = 18,
    productType = "Hoodie",
    color = "Black",
    // oldPrice = 20,
    // discount = 10,
    imageUrl = "product_catalogue/public/Images/hoodie_001.webp",
    handleClick,
}: CardProps) {
  
    return (
        <div className="group bg-white transition-transform duration-300 ease-out hover:-translate-y-0.5 cursor-pointer">
            {/* Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-white">
                <img
                    src={imageUrl}
                    alt={title}
                    className="h-full w-full object-contain p-2 transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Wishlist button */}
                <button
                    className="absolute right-2 top-2 rounded-full bg-popover p-1.5 text-popover-foreground shadow transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                    <Heart className="h-4 w-4" aria-hidden />
                </button>
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col justify-between p-4">
                <h3 className="line-clamp-2 text-sm font-medium leading-snug">
                    {title}
                </h3>
            </div>
        </div>
    );
}