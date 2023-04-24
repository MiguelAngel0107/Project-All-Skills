import APP_URL_SERVIDOR from "@/globals";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function ShowItem(props) {
  const [count, setCount] = useState(Number(props.product.count));

  useEffect(() => {
    props.update_item(props.product, count);
    console.log(count);
  }, [count]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCount(value);
  };
  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };
  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const product = props.product;
  return (
    <li key={product.product.id} className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={`${APP_URL_SERVIDOR}${product.product.photo}`}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <Link href={`/ecommerce/${product.id}`}>
                {product.product.name}
              </Link>
            </h3>
            <p className="ml-4">${Number(product.product.price) * count}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Qty {product.count}</p>
          <div>
            <label for="Quantity" class="sr-only">
              {" "}
              Quantity{" "}
            </label>
          </div>

          <div>
            <label for="Quantity" class="sr-only">
              {" "}
              Quantity{" "}
            </label>
          </div>
          <div class="flex items-center gap-1">
            <button
              type="button"
              onClick={handleDecrement}
              class="w-8 h-8 leading-12 text-gray-600 transition hover:opacity-75"
            >
              -
            </button>

            <input
              type="number"
              min="1"
              value={count}
              onChange={handleInputChange}
              class="h-8 w-10 rounded border-gray-200 border-2 text-center -moz-appearance-textfield -webkit-appearance-none appearance-none"
            />

            <button
              type="button"
              onClick={handleIncrement}
              class="w-8 h-8 leading-12 text-gray-600 transition hover:opacity-75"
            >
              +
            </button>
          </div>

          <div className="flex">
            <button
              type="button"
              onClick={(e) => props.remove_item(product.product.id)}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
