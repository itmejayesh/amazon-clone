"use client";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useAppSelector } from "../../hooks/useRedux";
import { getCart } from "../../redux/cartSlice";
import Image from "next/image";
import { Button } from "./ui/button";
import axios from "axios";
import { supabase } from "../../lib/supabase/products";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIP_PUBLISHABLE_KEY!,
);

const OrderSummary = () => {
  const cart = useAppSelector(getCart);

  const createStripeSession = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const stripe = await stripePromise;

    const checkouSession = await axios.post("/api/checkout-sessions", {
      items: cart,
      email: user?.email,
    });

    const result = await stripe?.redirectToCheckout({
      sessionId: checkouSession.data.id,
    });

    if (result?.error) {
      console.log(result.error.message);
    }
  };

  return (
    <div className="m-10 mx-auto h-fit w-[30%] rounded-xl border  border-white p-5 ">
      <h1 className="text-xl font-semibold">Order Summary </h1>
      <div className="mt-5 rounded-lg bg-white p-5">
        {cart.map((cartItem) => {
          return (
            <div key={cartItem.id} className="pt-22 space-y-2 divide-y">
              <Image
                src={cartItem.image}
                width={100}
                height={100}
                alt=""
                className="object-contain pt-2 mix-blend-multiply"
              />
              <p className="pt-2 text-sm font-medium">
                Product Quantity: {cartItem.quantity}
              </p>
              <p className="pt-2 font-bold">{`₹ ${cartItem.price}`}</p>
            </div>
          );
        })}
        <Button
          onClick={createStripeSession}
          className="mt-2 w-full bg-yellow-400 text-black hover:bg-yellow-500"
        >
          Place Your Order
        </Button>
      </div>
    </div>
  );
};

export default OrderSummary;
