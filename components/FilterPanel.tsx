"use client";

import { useState } from "react";
import CustomFilter from "./CustomFilter";
import { yearsOfProduction, fuels } from "@/constants";

export default function FilterPanel() {
  const [priceRange, setPriceRange] = useState([0, 500]);

  return (
    <section className="w-full max-w-xs space-y-6 rounded-lg border border-border bg-card p-5 text-card-foreground shadow-sm">
      <h2 className="text-lg font-semibold">Filters</h2>

      {/* Year Filter */}
      <div className="space-y-2">
        <CustomFilter title="year" options={yearsOfProduction} />
      </div>

      {/* Fuel Type Filter */}
      <div className="space-y-2">
        <CustomFilter title="fuel" options={fuels} />
      </div>
    </section>
  );
}
