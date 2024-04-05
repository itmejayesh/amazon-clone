import { NextResponse, NextRequest } from "next/server";

const stripe = require(`stripe`)(process.env.NEXT_PUBLIC_STRIP_SECRET_KEY);

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const { items, email } = body;
  console.log(items, email);

  const arrangeItems = items.map((item: any) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: item.title,
        images: [item.price],
      },
      unit_amount: Math.floor(item.price * 79),
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ["IN", "US", "GB", "CA"],
    },
    line_items: arrangeItems,
    mode: "payment",
    success_url: "https://amazon-clone-k6cdb9a6e-itmejayesh.vercel.app/",
    cancel_url: "https://amazon-clone-k6cdb9a6e-itmejayesh.vercel.app/checkout",
    metadata: {
      email,
      images: JSON.stringify(items.map((item: any) => item.image)),
    },
  });

  return NextResponse.json({
    id: session.id,
  });
}
