"use client";

import SearchBar from "../components/SearchBar";
import FilterPanel from "../components/FilterPanel";
import CarCard from "../components/CarCard";
import { useEffect, useMemo, useState } from "react";
import type { CarProps, SearchProductProps } from "../types";
import { fetchCars, mapApiCarToCarProps } from "@/utils";

export default function Home() {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const data: unknown = await fetchCars({ manufacturer: "Jaguar", year: 2020, model: "", fuel: "" });
        // console.log("fetchCars response:", data);
        //
        const list: CarProps[] = Array.isArray(data)
          ? (data
              .map((d) => mapApiCarToCarProps(d))
              .filter((c): c is CarProps => c !== null))
          : [];
        //
        setCars(list);
      } catch (e) {
        setError("Failed to load cars");
        console.error("fetchCars error:", e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const items: SearchProductProps[] = useMemo(
    () => cars.map((c, idx) => ({ id: idx, title: `${c.make} ${c.model}` })),
    [cars]
  );

  const [filtered, setFiltered] = useState<SearchProductProps[]>(items);

  useEffect(() => {
    setFiltered(items);
  }, [items]);

  const visible = useMemo(() => {
    if (filtered.length === items.length) return cars;
    const titles = new Set(filtered.map((f) => f.title));
    return cars.filter((c) => titles.has(`${c.make} ${c.model}`));
  }, [cars, filtered, items.length]);

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
          <h2 className="text-lg font-semibold mb-4">Cars ({visible.length})</h2>
          {loading && <div>Loading...</div>}
          {error && <div className="text-red-600">{error}</div>}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((car, idx) => (
              <CarCard key={`${car.make}-${car.model}-${idx}`} car={car} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
