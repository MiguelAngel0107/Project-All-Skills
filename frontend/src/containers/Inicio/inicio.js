import Layout from "@/layouts/layout";
import Banner from "@/components/inicio/banner";
import BannerCount from "@/components/inicio/bannerCount";
import BestProducts from "@/components/inicio/bestProducts";

const Inicio = () => {
  return (
    <>
      <Layout>
        <Banner />
        <BannerCount />
        <BestProducts />
      </Layout>
    </>
  );
};
export default Inicio;
