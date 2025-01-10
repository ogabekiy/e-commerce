
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Star, StarBorder, FavoriteBorder, Visibility } from "@mui/icons-material";

export default function Explore() {
  const [products, setProducts] = useState([]);

  const handleRating = (productId, newRating) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, userRating: newRating } : product
      )
    );
  };

  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="container mx-auto mt-16">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="w-5 h-8 rounded-lg bg-[#DB4444]"></div>
        <h1 className="font-semibold text-base text-[#DB4444]">Our products</h1>
      </div>
      <div className="flex justify-between items-center mt-11">
        <h2 className="text-xl font-bold">Eplore Our Products</h2>
        <Link
          href="/products"
          className="bg-[#DB4444] flex items-center justify-center rounded-[4px] w-[159px] h-[56px] capitalize text-[#FAFAFA] font-medium text-base"
        >
          View All
        </Link>
      </div>

      
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.slice(visibleIndex, visibleIndex + 8).map((product) => (
          <div key={product.id} className="relative p-4 rounded-lg">
            <div className="relative flex h-[250px] w-[270px] bg-[#F5F5F5] justify-center">
              <img src={product.thumbnail} alt={product.title} className="object-cover" />
              <div className="absolute top-2 right-2 flex flex-col items-center space-y-2">
                <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                  <FavoriteBorder className="text-black" />
                </button>
                <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                  <Visibility className="text-black" />
                </button>
              </div>
            </div>

            <div className="mt-4">
              <h2 className="font-medium text-base">{product.title}</h2>
              <p className="text-gray-500">{product.description.slice(0, 50)}...</p>
              <div className="mt-2">
                <span className="text-[#DB4444] font-medium text-base">${product.price}</span>
                <span className="line-through text-gray-500 font-medium text-base ml-2">
                  ${Math.round(product.price * 1.2)}
                </span>
              </div>
              <div className="flex items-center mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => handleRating(product.id, star)}
                    className="text-yellow-400"
                  >
                    {star <= product.userRating ? <Star /> : <StarBorder />}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
