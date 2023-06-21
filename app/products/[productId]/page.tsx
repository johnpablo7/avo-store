"use client";
import { useEffect, useState } from "react";

export default function Product({ params }: { params: { productId: string } }) {
  const [product, setProduct] = useState<TProduct | null>(null);

  useEffect(() => {
    fetch(`/api/avo/${params.productId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setProduct(data);
      });
  }, [params.productId]);

  return (
    <section>
      <div>
        <h1>Página del producto:</h1>
        {product?.name}
      </div>

      <div>
        <h1>Precio del productoss:</h1>
        {product?.price}
      </div>
    </section>
  );
}
