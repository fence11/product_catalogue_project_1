import { MouseEventHandler } from "react";

export type ProductType = "T-Shirt" | "Hoodie" | "Pants" | "Shoes";
export type Colors = "Black" | "LGray" | "Gray" | "White" | "Colored"
export type Sizes = "XS" | "S" | "M" | "L" | "XL"

export interface CardProps {
    title: string;
    price: number;
    productType: ProductType;
    color: Colors;
    // oldPrice: number;
    // discount: number;
    size: Sizes;
    imageUrl: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchProductProps {
    id: number;
    title: string;
}

export interface Props {
    items: SearchProductProps[];
    onFilter: (matches: SearchProductProps[]) => void;
}