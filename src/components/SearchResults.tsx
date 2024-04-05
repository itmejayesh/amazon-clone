import React from "react";
import ProductCards from "./ProductCards";

function SearchResults({ filterData }: { filterData: any }) {
  return (
    <section className="w-screen">
      <div className="mx-auto w-[80%]">
        <div className=" mt-10 ">
          <h1 className="font-bold">Results {filterData.length}</h1>
          <p>
            Check each product page for other buying options. Price and other
            details may vary based on product size and colour.
          </p>
        </div>
        <div
          className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2
         lg:grid-cols-3 xl:gap-x-8"
        >
          {filterData?.map((products: any) => (
            <ProductCards key={products.id} product={products} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SearchResults;
