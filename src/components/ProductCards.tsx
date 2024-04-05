import Image from "next/image";
import React from "react";
import Ratings from "./Ratings";
import { useRouter } from "next/navigation";

const ProductCards = ({ product }: { product: any }) => {
  const router = useRouter();
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div
          className=" flex cursor-pointer flex-col gap-y-3"
          onClick={() => {
            router.push(`/product/${product.id}`);
          }}
        >
          <div className="flex h-72 w-auto justify-center overflow-hidden">
            <Image
              priority
              className="h-auto w-auto p-2 mix-blend-multiply"
              src={product.image}
              alt={product.title}
              width={250}
              height={250}
            />
          </div>
          <h1 className="text-xl font-semibold hover:text-orange-400">
            {product.title}
          </h1>
          <p className="">{`${product.description.substring(0, 40)}...`}</p>
          <Ratings rating={product.rating} />
          <p> {`₹ ${product.price}`}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
