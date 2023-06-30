"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdOutlineShoppingCart, MdCheck } from "react-icons/md";

export default function Product({ params }: { params: { productId: string } }) {
  const [product, setProduct] = useState<TProduct | null>(null);

  useEffect(() => {
    fetch(`/api/avo/${params.productId}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);

        setProduct(data);
      });
  }, [params.productId]);

  if (!product) {
    return product;
  }

  return (
    <section>
      <div className="flex justify-center gap-16 mb-8">
        <Image
          src={product?.image}
          alt="avocado"
          width={420}
          height={420}
          priority
          className="object-cover"
        />

        <div className="flex flex-col py-20">
          <h2 className="text-xl font-semibold mb-3">{product?.name}</h2>
          <p className="text-gray-500 mb-3">{product?.price}</p>
          <div className="py-1 px-2 bg-stone-100 text-gray-500 font-semibold uppercase rounded-md flex items-center gap-1 mb-6">
            <p>SKU:</p>
            <span>{product?.sku}</span>
          </div>

          <form className="flex items-center mb-2">
            <input
              type="text"
              placeholder="0"
              className="w-48 py-[5px] px-4 outline-none text-gray-700 border border-gray-300 focus:border-bg-stone-100 rounded-tl-md rounded-bl-md border-r-0"
            />

            <div className="py-1 px-4 bg-green-600 hover:bg-green-800 text-lg text-white border rounded-tr-md rounded-br-md transition duration-300 flex items-center gap-1">
              <MdOutlineShoppingCart />
              <p>Add to Cart</p>
            </div>
          </form>

          <div className="flex items-center gap-1 text-green-600">
            <MdCheck className="text-xl" />
            <p>Added to cart</p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">About this avocado</h2>
        <p className="text-lg text-gray-800">
          {product.attributes.description}
        </p>
      </div>

      <div className="border-t border-[#bbbaba] opacity-50 mb-6" />

      <div className="flex flex-col border border-[#bbbaba] rounded-md mb-12">
        <div className="bg-slate-100 text-lg font-semibold pl-4 py-4 rounded-tl-md rounded-tr-md">
          Atributes
        </div>

        <div className="grid grid-cols-3 grid-rows-3 p-4">
          <p className="col-start-1 col-end-2 py-2 ">Shape</p>
          <p className="col-span-2 py-2">{product.attributes.shape}</p>
          <p className="py-2">Hardiness</p>
          <p className="col-span-2 py-2">{product.attributes.hardiness}</p>
          <p className="py-2">Taste</p>
          <p className="py-2">{product.attributes.taste}</p>
        </div>
      </div>
    </section>
  );
}
