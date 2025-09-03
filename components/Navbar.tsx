"use client";

import { Titan_One } from 'next/font/google';
import { Roboto } from 'next/font/google';
import Link from 'next/link'

const title_font = Titan_One({ subsets: ['latin'], weight: ['400'] });
const menu_font = Roboto({ subsets: ['latin'], weight: ['400'] });

export default function Navbar() {
    return (
        <header className="w-full z-10 px-6 py-2">
            <nav className="max-w-full mx-auto flex justify-between items-center ">
                <Link href="/" className={`flex justify-center items-center text-2xl ${title_font.className}`}>Catalogue</Link>
                <button className="group relative text-lg font-medium text-black">
                    Sign in
                    <span
                        className="absolute left-0 bottom-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full bg-[#34A85A]">
                    </span>
                </button>


            </nav>
        </header>
    );
}