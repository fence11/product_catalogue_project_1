import { CarProps, FilterProps } from "@/types";

export const calculateCarRent = (year: number) => {
  const basePricePerDay = 200;
  const ageFactor = 0.25;
  
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, fuel } = filters;

  const headers: HeadersInit = {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "ef37abd933mshc15eacd2bdbbc7dp1a1a35jsn74b879d0dc6f",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}

// Create a strict view of the car object that contains ONLY the fields
// defined in CarProps. This drops unknown properties from the API response.
// AI WAS USED TO MAP THIS, SINCE API RETURNED EVERY FIELD, EVEN THOSE THAT WERE "PREMIUM ONLY"
export function mapApiCarToCarProps(raw: unknown): CarProps | null {
  if (raw === null || typeof raw !== "object") return null;
  const r = raw as Record<string, unknown>;

  const cls = typeof r["class"] === "string" ? (r["class"] as string) : "";
  const cylinders = typeof r["cylinders"] === "number" ? (r["cylinders"] as number) : NaN;
  const displacement = typeof r["displacement"] === "number" ? (r["displacement"] as number) : NaN;
  const drive = typeof r["drive"] === "string" ? (r["drive"] as string) : "";
  const fuel_type = typeof r["fuel_type"] === "string" ? (r["fuel_type"] as string) : "";
  const make = typeof r["make"] === "string" ? (r["make"] as string) : "";
  const model = typeof r["model"] === "string" ? (r["model"] as string) : "";
  const transmission = typeof r["transmission"] === "string" ? (r["transmission"] as string) : "";
  const year = typeof r["year"] === "number" ? (r["year"] as number) : NaN;

  if (
    !cls || Number.isNaN(cylinders) || Number.isNaN(displacement) || !drive || !fuel_type ||
    !make || !model || !transmission || Number.isNaN(year)
  ) {
    return null;
  }

  const strictCar: CarProps = {
    class: cls,
    cylinders,
    displacement,
    drive,
    fuel_type,
    make,
    model,
    transmission,
    year,
  };

  return strictCar;
}
// #################################

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || 'hrjavascript-mastery');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
}

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(type, value);
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  
    return newPathname;
  };
  
  export const deleteSearchParams = (type: string) => {
    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.delete(type.toLocaleLowerCase());
    const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;
  
    return newPathname;
  };

