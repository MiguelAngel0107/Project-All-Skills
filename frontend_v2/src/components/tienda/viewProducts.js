import ItemProduct from "./itemProduct";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  get_products,
  get_filtered_products,
} from "../../redux/actions/products";

const ViewProducts = ({ filtered_products, products, get_products, filtered }) => {
  useEffect(() => {
    get_products();
  }, []);
  const showProducts = () => {
    let display = [];

    if (
      filtered_products &&
      filtered_products !== null &&
      filtered_products !== undefined &&
      filtered
    ) {
      filtered_products.map((product, index) => {
        return display.push(<ItemProduct key={index} product={product} />);
      });
    } else if (
      !filtered &&
      products &&
      products !== null &&
      products !== undefined
    ) {
      products.map((product, index) => {
        return display.push(<ItemProduct key={index} product={product} />);
      });
    }
    return display;
  };

  return (
    <section class="text-gray-400 bg-gray-900 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          {products && showProducts()}
        </div>
      </div>
    </section>
  );
};
const mapStateToProps = (state) => ({
  products: state.Products.products,
  filtered_products: state.Products.filtered_products,
});

export default connect(mapStateToProps, {
  get_products,
})(ViewProducts);
