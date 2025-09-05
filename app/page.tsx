import { fetchCars, mapApiCarToCarProps } from "@/utils";
import { HomeProps, CarProps } from "@/types";
// import { fuels, yearsOfProduction } from "@/constants";
import CarCard from "@/components/CarCard";
import SearchBar from "@/components/SearchBar";
// import FilterPanel from "@/components/FilterPanel";
import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero"
import { fuels, yearsOfProduction } from "@/constants";


export default async function Home({ searchParams }: HomeProps) {
  const data = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    model: searchParams.model || "",
  });
  //
  const allCars: CarProps[] = Array.isArray(data)
    ? (data
      .map((d) => mapApiCarToCarProps(d))
      .filter((c): c is CarProps => c !== null))
    : [];
  //
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className='overflow-hidden'>
      <Hero />

      <div className='mt-12 px-6 sm:px-12 py-8 max-w-[1440px] mx-auto' id='discover'>
        <div className='text-start'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className='flex items-center justify-between gap-5 mt-6 flex-wrap'>
          <SearchBar />

          <div className='flex items-center gap-3'>
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-8'>
              {allCars.map((car, idx) => (
                <CarCard key={`${car.make}-${car.model}-${idx}`} car={car} />
              ))}
            </div>

            {/* <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            /> */}
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>No results matching your criteria</p>
          </div>
        )}
      </div>
    </main>
  );
}