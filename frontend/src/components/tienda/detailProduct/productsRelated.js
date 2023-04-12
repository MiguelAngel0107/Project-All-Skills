import APP_URL_SERVIDOR from "@/globals";
import React from "react";
import Link from "next/link";

export default function ProductsRelated(props) {
  const RelatedProducts = props.RelatedProducts;

  const showProducts = () => {
    let display = [];

    if (
      RelatedProducts &&
      RelatedProducts !== null &&
      RelatedProducts !== undefined
    ) {
      RelatedProducts.map((product, index) => {
        return display.push(
          <Link href={`/ecommerce/${product.id}`} class="xl:w-1/4 md:w-1/2 p-4" key={index}>
            <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
              <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                src={`${APP_URL_SERVIDOR}${String(product.photo)}`}
                alt="content"
              />
              <h3 class="tracking-widest text-indigo-400 text-xs font-medium title-font">
                {product.price}
              </h3>
              <h2 class="text-lg text-white font-medium title-font mb-4">
                {product.name}
              </h2>
            </div>
          </Link>
        );
      });
    }
    return display;
  };

  return (
    <section class="text-gray-400 body-font bg-gray-900">
      <div class="container px-5 pb-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          {RelatedProducts && showProducts()}
        </div>
      </div>
    </section>
  );
}
