import Layout from "@/layouts/layout";
import BannerDetail from "@/components/tienda/detailProduct/bannerDetail";
import ReviewsProdruct from "@/components/tienda/detailProduct/reviewsProdruct";
import ProductsRelated from "@/components/tienda/detailProduct/productsRelated";

export default function ViewProduct(props) {
  return (
    <Layout>
      <BannerDetail
        Producto={props.Producto}
        add_item={props.add_item}
        get_items={props.get_items}
        get_total={props.get_total}
        get_item_total={props.get_item_total}
        idUser={props.idUser}
      />
      <ProductsRelated RelatedProducts={props.RelatedProducts} />
      <ReviewsProdruct />
    </Layout>
  );
}
