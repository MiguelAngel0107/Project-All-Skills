import { useRouter } from "next/router";
import { useEffect } from "react";
import { get_public_user } from "@/redux/actions/public";
import { connect } from "react-redux";
import { useState } from "react";
import Layout from "@/layouts/layout";
import PortadaPublic from "@/components/public/perfil/portada";
import ProductsRelatedUser from "@/components/public/perfil/productsRelated";

const ProductDetailPage = ({ get_public_user, dataUser }) => {
  const router = useRouter();
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    if (router.query.userId) {
      const userIdFromQuery = Number(router.query.userId);
      setUserId(userIdFromQuery);
      get_public_user(userIdFromQuery);
      console.log("Success Create:", userIdFromQuery);
    }
  }, [router.query.userId]);

  const TemplateAsync = {
    id: 2,
    email: "miguel@gmail.com",
    name: "Miguel",
    wallet_address: null,
    profile: {
      picture: "/media/users/user_default_profile.jpg",
      banner: "/media/users/user_default_bg.jpg",
      verified: "unverified",
      url: null,
      bio: null,
    },
    products: [],
  };

  let UserPublic;
  dataUser ? (UserPublic = dataUser) : (UserPublic = TemplateAsync);

  return (
    <Layout>
      <PortadaPublic UserPublic={UserPublic} />
      <ProductsRelatedUser UserPublic={UserPublic} />
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  dataUser: state.Public.profilePublic,
});

export default connect(mapStateToProps, {
  get_public_user,
})(ProductDetailPage);
