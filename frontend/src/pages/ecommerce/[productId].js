import { useRouter } from "next/router";
import { useEffect } from "react";
import DetailProduct from "@/containers/detailProduct/detailProduct";
import { get_product, get_related_products } from "@/redux/actions/products";
import { connect } from "react-redux";
import { useState } from "react";

const ProductDetailPage = ({
  get_product,
  get_related_products,
  producto,
  related_products,
}) => {
  const router = useRouter();
  const [productId, setProductId] = useState(null);

  // Hacer nueva peticion de Datos cada vez que se cambien el producto
  useEffect(() => {
    if (productId !== null) {
      get_product(parseInt(productId));
      get_related_products(parseInt(productId));
    }
  }, [productId]);

  // Cambiar el estado de ProductId cada vez que la query Cambie
  useEffect(() => {
    if (router.query.productId) {
      setProductId(Number(router.query.productId));
    }
  }, [router.query.productId]);

  return <DetailProduct producto={producto} related_products={related_products}/>;
};

const mapStateToProps = (state) => ({
  producto: state.Products.product,
  related_products: state.Products.related_products,
});

export default connect(mapStateToProps, {
  get_product,
  get_related_products,
})(ProductDetailPage);
