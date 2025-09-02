"use client";

import { useState } from "react";

export default function FilterPanel() {
    const [priceRange, setPriceRange] = useState([0, 500]); // change from 0-500 to minprice-maxprice
    // add value input options for price range
    // add productType and Colors and have dropdown fetch info from there


    return (
        <section className="w-full max-w-xs space-y-6 rounded-lg border border-border bg-card p-5 text-card-foreground shadow-sm">
            <h2 className="text-lg font-semibold">Filters</h2>


            {/* Price Range */}
            <div className="space-y-2">
                <label className="block text-sm font-medium">Price Range</label>
                <div className="flex items-center gap-3">
                    <input
                        type="range"
                        min="0"
                        max="500"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
                        className="w-full accent-primary"
                    />
                </div>
                <div className="text-sm text-muted-foreground">
                    ${priceRange[0]} – ${priceRange[1]}
                </div>
            </div>


            {/* Category Dropdown */}


            {/* Color dropdown */}


            {/* Discount Filter ?? */}

        </section>
    );
}