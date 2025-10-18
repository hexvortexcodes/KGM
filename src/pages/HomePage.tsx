import { useState, useEffect } from "react";
import Banner from "../components/Banner";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data: Product[]) => {
        // Filter for only men's and women's clothing
        const filteredProducts = data.filter(
          (product) =>
            product.category === "men's clothing" ||
            product.category === "women's clothing"
        );
        setProducts(filteredProducts);
      });
  }, []);

  return (
    <div className="w-full">
      <Banner />
      <div className="flex align-center justify-between p-7">
        <h1 className="text-2xl font-[350]">Ready to wear</h1>
        <a href="/see-all" className="border-b">see all</a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="border-[0.5px] overflow-hidden flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain py-5"
            />
            <div className="border-t p-4 w-full h-full bg-[#C0FF02] text-start">
              <h2 className="text-lg font-[500]">{product.title}</h2>
              <p className="text-gray-700 mt-2">€ {product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
