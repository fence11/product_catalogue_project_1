import { fetchCars, mapApiCarToCarProps } from "@/utils";
import { HomeProps, CarProps } from "@/types";
// import { fuels, yearsOfProduction } from "@/constants";
import CarCard from "@/components/CarCard";
import SearchBar from "@/components/SearchBar";
import FilterPanel from "@/components/FilterPanel";

export default async function Home({ searchParams }: HomeProps) {
  const data = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    model: searchParams.model || "",
  });

  const allCars: CarProps[] = Array.isArray(data)
    ? (data
        .map((d) => mapApiCarToCarProps(d))
        .filter((c): c is CarProps => c !== null))
    : [];

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <div className="min-h-screen flex flex-col">
      <div className="w-full max-w-4xl mx-auto mx-4 mt-4">
        <SearchBar />
      </div>

      <div className="flex flex-1 mt-6 px-6 gap-6">
        <section className="w-64 shrink-0">
          <FilterPanel />
        </section>

        <main className="flex-1">
          {!isDataEmpty ? (
            <section>
              <h2 className="text-lg font-semibold mb-4">Cars ({allCars.length})</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {allCars.map((car, idx) => (
                  <CarCard key={`${car.make}-${car.model}-${idx}`} car={car} />
                ))}
              </div>
            </section>
          ) : (
            <div className='home__error-container'>
              <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
              <p>No cars found matching your criteria.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}