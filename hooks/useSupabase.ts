import { useState } from "react";
import { supabase } from "../lib/supabase/products";

export const useSupabase = () => {
  const [products, setProducts] = useState<any>([]);
  const [filterData, setFilterData] = useState<any>([]);
  const [singleProduct, setSingleProduct] = useState<any>([]);
  const [mensClothing, setMensClothing] = useState<any>([]);
  const [womenClothing, setWomenClothing] = useState<any>([]);
  const [electonicItems, setElectronicItems] = useState<any>([]);

  const getDataFromSupabase = async () => {
    let { data, error } = await supabase.from(`Products`).select("*");

    if (data) {
      setProducts(data);
    } else {
      console.log(error);
    }
  };

  const getFilteredData = async (query: string) => {
    let { data, error } = await supabase
      .from(`Products`)
      .select("*")
      .or(
        `title.ilike.%${query}%, description.ilike.%${query}%, category.ilike.%${query}%`,
      );

    if (data) {
      setFilterData(data);
    } else {
      console.log(error);
    }
  };

  const getProductsById = async (id: number) => {
    let { data, error } = await supabase
      .from(`Products`)
      .select("*")
      .eq("id", id);

    if (data) {
      setSingleProduct(data);
    } else {
      console.log(error);
    }
  };

  const getProductsofMens = async () => {
    let { data, error } = await supabase
      .from(`Products`)
      .select("*")
      .ilike("category", "%men's clothing%");
    if (data) {
      setMensClothing(data);
    } else {
      console.log(error);
    }
  };

  const getProductsofWomen = async () => {
    let { data, error } = await supabase
      .from(`Products`)
      .select("*")
      .ilike("category", "%women's clothing%");
    if (data) {
      setWomenClothing(data);
    } else {
      console.log(error);
    }
  };

  return {
    products,
    filterData,
    getDataFromSupabase,
    getFilteredData,
    singleProduct,
    getProductsById,
    getProductsofMens,
    mensClothing,
    getProductsofWomen,
    womenClothing,
  };
};
