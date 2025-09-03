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
                        className="w-full accent-primary cursor-pointer"
                    />
                </div>
                <div className="text-sm text-muted-foreground">
                    ${priceRange[0]} – ${priceRange[1]}
                    {/* make these price ranges into value inputs, when i input a value it is reflected in the actual slider and also in the filter */}
                </div>
            </div>
            {/* <div class="ce0607 b140f0"><div class="f6e63e"><div class="be0836" dir="ltr"><span>$&nbsp;</span><label class="e05d24" for="minPriceInput">Minimum price $</label><input tabindex="0" type="number" step="0.01" min="9.99" max="44.99" id="minPriceInput" class="dbc5a6" style="width: 4.3ch;" value="16.73"></div><div class="f56a56" dir="ltr"><span>$&nbsp;</span><label class="e05d24" for="maxPriceInput">Maximum price $</label><input tabindex="0" type="number" step="0.01" min="9.99" max="44.99" id="maxPriceInput" class="dbc5a6" style="width: 4.3ch;" value="44.99"></div></div><div class="a36070" dir="ltr"><input tabindex="0" aria-valuenow="16.73" aria-valuetext="16.73" aria-valuemin="9.99" aria-valuemax="44.99" aria-orientation="horizontal" aria-labelledby="priceButtonId" type="range" step="0.01" min="9.99" max="44.99" class="a4c279 c253ec" style="z-index: 3;" value="16.73"><input tabindex="0" aria-valuenow="44.99" aria-valuetext="44.99" aria-valuemin="9.99" aria-valuemax="44.99" aria-orientation="horizontal" aria-labelledby="priceButtonId" type="range" step="0.01" min="9.99" max="44.99" class="a4c279 b0a234" value="44.99"><div class="a0a420"><div class="bcd510"></div><div class="e9e04c" style="inset-inline-start: 19.26%; width: 80.74%;"></div></div></div></div> */}


            {/* Category Dropdown */}


            {/* Color dropdown */}

        </section>
    );
}