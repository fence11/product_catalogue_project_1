"use client";

import { Titan_One } from 'next/font/google';
import { Roboto } from 'next/font/google';
import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const title_font = Titan_One({ subsets: ['latin'], weight: ['400'] });
const menu_font = Roboto({ subsets: ['latin'], weight: ['400'] });

export default function Navbar() {
    return (
        <header className='w-full absolute z-10'>
            <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-12 px-6 py-6 bg-transparent'>
                <Link href='/' className='flex justify-center items-center'>
                    <Image
                        src='/logo.svg'
                        alt='logo'
                        width={118}
                        height={18}
                        className='object-contain'
                    />
                </Link>

                <CustomButton
                    title='Sign in'
                    btnType='button'
                    containerStyles='text-[color:var(--foreground)] rounded-full bg-white/90 hover:bg-white transition-colors min-w-[110px] py-2'
                />
            </nav>
        </header>
    );
}