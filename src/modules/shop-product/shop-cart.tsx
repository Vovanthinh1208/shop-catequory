import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RatingStar from "../../component/RatingStar";
import React, { useState } from "react";
import { Button } from "../../component/Button";

type ProductType = {
  image?: string;
  name?: string;
  rating?: number;
  price?: number;
  isNew?: boolean;
  description?: string;
  view?: number;
};

type EPGrid9Props = {
  products: ProductType[];
};

const Product = ({ product }: { product: ProductType }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [ratingStar, setRatingStar] = useState<number>(product.rating || 3);

  const handleLikeHeart = () => setIsLiked(!isLiked);
  const handleRatingChangeProduct = (newRating: number) =>
    setRatingStar(newRating);

  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4">
      <div className="bg-white  shadow border  rounded-xl p-4 pb-0">
        <div className="bg-gray-100  rounded flex justify-center items-center min-h-[265px] relative p-12 w-full">
          {product.isNew && (
            <h6 className="bg-[#B0D7F4] absolute top-4 left-0 text-white text-lg rounded-r-md px-6 py-2 font-medium">
              Product
            </h6>
          )}
          <div
            className="absolute top-2.5 right-2.5 w-10 h-10  rounded-full flex justify-center items-center cursor-pointer"
            onClick={handleLikeHeart}
          >
            <FontAwesomeIcon
              icon={faHeart}
              style={{ color: isLiked ? "red" : "gray" }}
            />
          </div>
          <img src={product.image} alt="" className="max-w-full h-[220px]" />
          <Button className="absolute bottom-4 right-0 rounded-l-md  text-black hover:text-white font-bold py-2 px-6">
            Add to cart
          </Button>
        </div>
        <div className="py-6 px-1">
          <div className="flex justify-between items-center">
            <div>
              <h6 className="hover:text-blue-600 text-[17px] font-medium mb-1">
                {product.name?.slice(0, 20)}
              </h6>
              <h6 className="hover:text-blue-600 text-[17px] font-medium mb-1">
                {product.description?.slice(0, 20)}
              </h6>
              <RatingStar
                count={5}
                value={ratingStar}
                onChange={handleRatingChangeProduct}
                size={24}
                color="#d3d3d3"
                hoverColor="#ffcc00"
                activeColor="#ff6600"
                edit
                isHalf
              />
            </div>
            <div>
              <p className="text-xs font-bold">Buy: {product.view}</p>
              <p className="text-3xl mt-3 font-bold">${product.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EPGrid9 = ({ products }: EPGrid9Props) => {
  return (
    <section className="py-14 md:py-24 bg-white  dark:text-white relative overflow-hidden z-10">
      {/* Background shapes */}
      <div className="absolute top-0 right-0">
        <img
          src="https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_shape2.png"
          alt="background shape 1"
        />
      </div>
      <div className="absolute top-1/2 left-0">
        <img
          src="https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_shape1.png"
          alt="background shape 2"
        />
      </div>
      <div className="container relative px-4 mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight text-center">
          Popular Products
        </h2>
        <div className="grid grid-cols-12 gap-6 mt-12">
          {products.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EPGrid9;
