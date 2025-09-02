"use client";

import Link from 'next/link'

export default function Navbar() {
    return (
        <header className="w-full z-10">
            <nav className="max-w-full mx-auto flex justify-between items-center ">
                <Link href="/" className="flex justify-center items-center">Catalogue</Link>
                <button className="px-3 py-1.5 rounded-md border border-border text-sm hover:bg-muted transition-colors">Sign in</button>
            </nav>
        </header>
    );
}

// add different font for title & footer
// make navbar into actual navbar