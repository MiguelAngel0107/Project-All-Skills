import Layout from "@/layouts/layout";
import Banner from "@/components/inicio/banner";
import BannerCount from "@/components/inicio/bannerCount";
import BestProducts from "@/components/inicio/bestProducts";

import { connect } from "react-redux";

const Inicio = ({ photo }) => {
  return (
    <>
      <Layout>
        <Banner photo={photo} />
        <BannerCount />
        <BestProducts />
      </Layout>
    </>
  );
};
const mapStateToProps = (state) => ({
  photo: state.User.picture,
});

export default connect(mapStateToProps, {})(Inicio);
