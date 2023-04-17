import Link from "next/link";
import APP_URL_SERVIDOR from "@/globals";

const ItemProduct = ({ product }) => {
  let Producto;
  let Product_id;
  if (product.id) {
    Producto = product;
    Product_id = product.id;
  } else {
    Producto = product.fields;
    Product_id = product.pk;
  }
  let newString = Producto.photo;
  if (!newString.startsWith("/media/")) {
    newString = "/media/" + newString;
  }

  return (
    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link
        href={`/ecommerce/${String(Product_id)}`}
        class="block relative h-48 rounded overflow-hidden"
      >
        <img
          alt="ecommerce"
          class="object-cover object-center w-full h-full block"
          src={`${APP_URL_SERVIDOR}${String(newString)}`}
        />
      </Link>
      <div class="mt-4">
        <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
          {Producto.category}
        </h3>
        <h2 class="text-white title-font text-lg font-medium">
          {Producto.name}
        </h2>
        <p class="mt-1">{Producto.price}</p>
      </div>
    </div>
  );
};

export default ItemProduct;
