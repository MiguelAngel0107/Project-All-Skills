import React from "react";
import ItemProduct from "@/components/tienda/itemProduct";

function ProductsRelatedUser(props) {
  const UserPublic = props.UserPublic;
  const showProducts = () => {
    let display = [];
    if (UserPublic) {
      UserPublic.products.map((product, index) => {
        return display.push(<ItemProduct key={index} product={product} />);
      });
    }
    return display;
  };
  return (
    <section class="text-gray-400 bg-gray-900 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">{showProducts()}</div>
      </div>
    </section>
  );
}

export default ProductsRelatedUser;
