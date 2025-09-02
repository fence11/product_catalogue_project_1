import { MouseEventHandler } from "react";

export type ProductType = "T-Shirt" | "Hoodie" | "Pants" | "Shoes";

export type Colors = "Black" | "LGray" | "Gray" | "White" | "Colored"

export interface CardProps {
    title: string;
    price: number;
    productType: ProductType;
    color: Colors;
    // oldPrice: number;
    // discount: number;
    imageUrl: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}