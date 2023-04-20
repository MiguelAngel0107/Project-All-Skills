import Layout from "@/layouts/layout"
import BannerDetail from "@/components/tienda/detailProduct/bannerDetail"
import ReviewsProdruct from "@/components/tienda/detailProduct/reviewsProdruct"
import ProductsRelated from "@/components/tienda/detailProduct/productsRelated"

export default function ViewProduct(props) {
  return (
    <Layout>
        <BannerDetail Producto={props.Producto}/>
        <ProductsRelated RelatedProducts={props.RelatedProducts}/>
        <ReviewsProdruct/>
    </Layout>
  )
}
