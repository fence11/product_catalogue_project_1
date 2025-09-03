"use client";

import SearchBar from "../components/SearchBar";
import FilterPanel from "../components/FilterPanel";
import Card from "../components/Card";
import { products } from "@/constants";
import { useMemo, useState } from "react";
import type { SearchProductProps } from "../types";

export default function Home() {
  const items: SearchProductProps[] = useMemo(
    () => products.map((p) => ({ id: p.id, title: p.title })),
    [products]
  );

  const [filtered, setFiltered] = useState<SearchProductProps[]>(items);
  const visible = useMemo(() => {
    const ids = new Set(filtered.map((f) => f.id));
    return products.filter((p) => ids.has(p.id));
  }, [filtered]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="w-full max-w-4xl mx-auto mx-4 mt-4">
        <SearchBar items={items} onFilter={setFiltered} />
      </div>

      <div className="flex flex-1 mt-6 px-6 gap-6">
        <section className="w-64 shrink-0">
          <FilterPanel />
        </section>

        <main className="flex-1">
          <h2 className="text-lg font-semibold mb-4">Products ({visible.length})</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((product) => (
              <Card key={product.id} title={product.title} price={product.price} productType={product.productType} color={product.color} size={product.size} imageUrl={product.imageUrl} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
