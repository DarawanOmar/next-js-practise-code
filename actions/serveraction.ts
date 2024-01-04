"use server";
import { revalidateTag } from "next/cache";

export const handleSubmit = async (e: FormData) => {
  const product = e.get("prodcut")?.toString();
  const catigorey = e.get("catigorey")?.toString();
  const price = e.get("price")?.toString();

  if (!price || !product || !catigorey) return null;

  const newProducts: Product = {
    product,
    price,
    catigorey,
  };

  await fetch("https://6512b2e2b8c6ce52b3960859.mockapi.io/products/products", {
    method: "POST",
    body: JSON.stringify(newProducts),
    headers: {
      "Content-Type": "application/json",
    },
  });
  revalidateTag("pro");
};
