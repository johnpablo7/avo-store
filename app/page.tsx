// "use client";
import Image from "next/image";
import Link from "next/link";
// import { useEffect, useState } from "react";

// Pagina estatica
export default async function HomePage() {
  const response = await fetch(
    "https://avo-store-johnpablo7.vercel.app/api/avo",
    { next: { revalidate: 60 } }
  );
  const { data: productList }: TAPIAvoResponse = await response.json();

  // Client Side Rendering
  // const [productList, setProductList] = useState<TProduct[]>([]);
  // useEffect(() => {
  //   fetch("/api/avo")
  //     .then((res) => res.json())
  //     .then(({ data }) => {
  //       setProductList(data);
  //     });
  // }, []);

  return (
    <main>
      <div className="flex items-center justify-center mb-8">
        <h1 className="text-4xl font-bold">Platzi</h1>
        <Image src="/images/logo.png" alt="logo" width={82} height={82} />
        <h1 className="text-4xl font-bold">Avo</h1>
      </div>

      <div className="grid grid-cols-6 gap-5">
        {productList.map((product) => (
          <div
            key={product.id}
            className="bg-slate-100 border border-[#bbbaba] rounded-md flex flex-col h-auto"
          >
            <Link href={`products/${product.id}`} rel="preload">
              <Image
                src={product.image}
                alt="avocado"
                width={340}
                height={340}
                priority
                className="rounded-md object-cover"
              />
              <div className="border-t border-[#bbbaba] opacity-30" />
              <div className="p-4">
                <h2 className="text-lg font-bold">{product.name}</h2>
                <p className="text-gray-500">{product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
