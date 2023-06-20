"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProductPage() {
  const [product, setProduct] = useState<TProduct>();
  const { query } = useRouter();

  useEffect(() => {
    fetch(`/api/avo/${query.id}`)
      .then((res) => res.json())
      .then(({ data }) => {
        setProduct(data);
      });
  }, [query.id]);

  return (
    <section className="flex min-h-screen flex-col p-8">
      <h1>Página del producto: {product?.name}</h1>
      <h1>Precio del producto: {product?.price}</h1>
    </section>
  );
}
