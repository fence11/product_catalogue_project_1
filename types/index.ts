import { MouseEventHandler } from "react";

// export type ProductType = "T-Shirt" | "Hoodie" | "Pants" | "Shoes";
// export type Colors = "Black" | "LGray" | "Gray" | "White" | "Colored"
// export type Sizes = "XS" | "S" | "M" | "L" | "XL"

// export interface CardProps {
//     title: string;
//     price: number;
//     productType: ProductType;
//     color: Colors;
//     size: Sizes;
//     imageUrl: string;
//     handleClick?: MouseEventHandler<HTMLButtonElement>;
// }

export interface SearchProductProps {
    id: number;
    title: string;
}

export interface Props {
    items: SearchProductProps[];
    onFilter: (matches: SearchProductProps[]) => void;
}

export interface CarProps {
  class: string;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
//   limit?: number; // premium only..
  fuel?: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface CarCardProps {
  model: string;
  make: string;
  transmission: string;
  year: number;
  drive: string;
}

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export interface SearchManuFacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}