"use client";
import SingleProduct from "@/components/SingleProduct";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { useSupabase } from "../../../../hooks/useSupabase";

const page = () => {
  const { id } = useParams();
  const { singleProduct, getProductsById } = useSupabase();
  useEffect(() => {
    getProductsById(Number(id));
  }, []);
  return (
    <div>
      <SingleProduct singleProduct={singleProduct} />
    </div>
  );
};

export default page;
