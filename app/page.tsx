"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    fetch("/api/avo")
      .then((res) => res.json())
      .then(({ data }) => {
        setProductList(data);
      });
  }, []);

  return (
    <main>
      <h1>Platzi and Next.js!</h1>
      <div>-----------------------</div>
      {productList.map((product) => (
        <Link key={product.id} href={`products/${product.id}`}>
          <div>{product.name}</div>
        </Link>
      ))}
    </main>
  );
}
