"use client";

import Image from "next/image";

import { CustomButtonProps } from "@/types";

const Button = ({ isDisabled, btnType, containerStyles, textStyles, title, rightIcon, handleClick }: CustomButtonProps) => (
  <button
    disabled={isDisabled}
    type={btnType || "button"}
    className={`custom-btn inline-flex items-center ${containerStyles}`}
    onClick={handleClick}
  >
    {rightIcon && <div className="w-6 h-6 mr-4 invisible" />}
    <span className={`flex-1 text-center ${textStyles}`}>{title}</span>
    {rightIcon && (
      <div className="relative w-6 h-6 mr-4">
        <Image
          src={rightIcon}
          alt="arrow-right"
          fill
          className="object-contain"
        />
      </div>
    )}
  </button>
);

export default Button;