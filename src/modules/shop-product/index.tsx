import React, { useEffect, useState } from "react";
import EPGrid9 from "./shop-cart";

type Rating = {
  rate: number;
  count: number;
};

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
  isFavorite?: boolean;
  stock?: number;
  reviews?: { rating: number; reviewText: string }[];
};

const ShopCateQuory = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  // Xử lý danh sách sản phẩm
  const processedProducts = products.map((product) => ({
    name: product.title,
    image: product.image,
    rating: product.rating?.rate,
    price: product.price,
    isNew: true,
    description: product.description,
    view: product.rating.count,
  }));

  // Lấy dữ liệu sản phẩm từ API
  const getProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []); // Chạy 1 lần khi component được mount

  return (
    <div className="flex flex-col w-full">
      {loading ? <p>Loading...</p> : <EPGrid9 products={processedProducts} />}
    </div>
  );
};

export default ShopCateQuory;
