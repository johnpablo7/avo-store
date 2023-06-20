"use client";
import { Navbar } from "@/components/Navbar/Navbar";
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
    <main className="flex min-h-screen flex-col p-8">
      <Navbar />
      <h1>Platzi and Next.js!</h1>
      {productList.map((product) => (
        <Link key={product.id} href={`api/avo/${product.id}`}>
          <div>{product.name}</div>
        </Link>
      ))}
    </main>
  );
}
