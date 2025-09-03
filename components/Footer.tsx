"use client";

import { Titan_One } from 'next/font/google';
import Link from 'next/link'
import { footerLinks } from "@/constants";

const title_font = Titan_One({ subsets: ['latin'], weight: ['400'] });

export default function Footer() {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Link href="/" className={`flex justify-center items-center text-2xl ${title_font.className}`}>Catalogue</Link>
          <p className="text-base text-gray-700">
            Catalogue 2025 <br />
            All Rights Reserved &copy;
          </p>
        </div>

        {footerLinks.map((item) => (
          <div key={item.title} className="flex flex-col gap-5">
            <h3 className="font-bold">{item.title}</h3>
            <div className="flex flex-col gap-2">
              {item.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="text-gray-500 hover:text-black"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>@2025 Catalogue. All rights reserved</p>

        <div className="flex gap-5">
          <Link href="/" className="text-gray-500 hover:text-black">
            Privacy & Policy
          </Link>
          <Link href="/" className="text-gray-500 hover:text-black">
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  );
}
