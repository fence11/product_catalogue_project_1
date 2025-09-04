"use client";

import { useMemo, useState } from "react";
import { CarProps } from "../types";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import CarDetails from "./CarDetails";
import CustomButton from "./CustomButton";

interface CarCardProps {
    car: CarProps;
}

export default function CarCard({ car }: CarCardProps) {
    const [isOpen, setIsOpen] = useState(false);
    const title = useMemo(() => `${car.make} ${car.model}`, [car.make, car.model]);
    const carRent = useMemo(() => calculateCarRent(car.year), [car.year]);

    return (
        <div className="flex flex-col p-6 justify-center items-start text-black-100 bg-(--card) hover:bg-white hover:shadow-md rounded-3xl group">
            <div className="w-full flex justify-between items-start gap-2">
                <h2 className="text-[22px] leading-[26px] font-bold capitalize">
                    {title}
                </h2>
            </div>

            <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
                <span className='self-start text-[14px] leading-[17px] font-semibold'>$</span>
                {carRent}
            </p>

            <div className='relative w-full h-40 my-3 object-contain'>
                <img src={generateCarImageUrl(car)} alt='car model' className='object-contain w-full h-full' />
            </div>

            <div className='relative flex w-full mt-2'>
                <div className='flex group-hover:invisible w-full justify-between text-grey'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <img src='/steering-wheel.svg' width={20} height={20} alt='steering wheel' />
                        <p className='text-[14px] leading-[17px]'>
                            {car.transmission === "a" ? "Automatic" : "Manual"}
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <img src="/tire.svg" width={20} height={20} alt="seat" />
                        <p className="text-[14px] leading-[17px]">{car.drive.toUpperCase()}</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <img src="/gas.svg" width={20} height={20} alt="fuel" />
                        <p className="text-[14px] leading-[17px]">{car.fuel_type}</p>
                    </div>
                </div>

                <div className="hidden group-hover:flex absolute bottom-0 w-full z-10">
                    <CustomButton
                        title='View More'
                        containerStyles='w-full py-[16px] rounded-full bg-(--primary) cursor-pointer'
                        textStyles='text-white text-[14px] leading-[17px] font-bold'
                        rightIcon='/right-arrow.svg'
                        handleClick={() => setIsOpen(true)}
                    />
                </div>
            </div>

            <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
        </div>
    );
}