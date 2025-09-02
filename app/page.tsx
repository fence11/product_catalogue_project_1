import Image from "next/image";
import SearchBar from "../components/SearchBar";
import FilterPanel from "../components/FilterPanel";
import Card from "../components/Card";
import { ProductType } from "../types";
import { Colors } from "../types";

export default function Home() {

  const products: { id: number; title: string; price: number; productType: ProductType; color: Colors; imageUrl: string; discount?: number }[] = [
    { id: 1, title: "Hoodie 1", price: 199, productType: "Hoodie", color: "Colored", imageUrl: "/Images/hoodie_001.webp" },
    { id: 2, title: "Hoodie 2", price: 199, productType: "Hoodie", color: "Black", imageUrl: "/Images/hoodie_002.webp" },
    { id: 3, title: "Hoodie 3", price: 199, productType: "Hoodie", color: "LGray", imageUrl: "/Images/hoodie_003.webp" },
    { id: 4, title: "Pants 1", price: 45, productType: "Pants", color: "LGray", imageUrl: "/Images/pants_001.webp" },
    { id: 5, title: "Pants 2", price: 45, productType: "Pants", color: "Black", imageUrl: "/Images/pants_002.webp" },
    { id: 6, title: "Pants 3", price: 45, productType: "Pants", color: "Gray", imageUrl: "/Images/pants_003.webp" },
    { id: 7, title: "Pants 4", price: 45, productType: "Pants", color: "Black", imageUrl: "/Images/pants_004.webp" },
    { id: 8, title: "Shoes 1", price: 89, discount: 26, productType: "Shoes", color: "Black", imageUrl: "/Images/shoes_001.webp" },
    { id: 9, title: "Shoes 2", price: 89, discount: 26, productType: "Shoes", color: "Black", imageUrl: "/Images/shoes_002.webp" },
    { id: 10, title: "Shoes 3", price: 89, discount: 26, productType: "Shoes", color: "Black", imageUrl: "/Images/shoes_003.webp" },
    { id: 11, title: "Shoes 4", price: 89, discount: 26, productType: "Shoes", color: "White", imageUrl: "/Images/shoes_004.webp" },
    { id: 12, title: "T-Shirt 1", price: 29, productType: "T-Shirt", color: "Black", imageUrl: "/Images/tshirt_001.webp" },
    { id: 13, title: "T-Shirt 2", price: 29, productType: "T-Shirt", color: "Colored", imageUrl: "/Images/tshirt_002.webp" },
  ];

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
          <h2 className="text-lg font-semibold mb-4">
            Products ({products.length})
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} title={product.title} price={product.price} productType={product.productType} color={product.color} imageUrl={product.imageUrl} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
