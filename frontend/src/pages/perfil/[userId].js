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
    picture: "/media/users/perfiles/2/picture.jpg",
    banner: "/media/users/portadas/2/banner.jpg",
    verified: "unverified",
    url: "https://indra.udemy.com",
    bio: "Este soy Yo",
    user: 2,
    products: [
      {
        model: "products.product",
        pk: 1,
        fields: {
          name: "Programacion",
          photo: "photos/2023/04/backiee-245136_p3Zfeg7.jpg",
          description: "teahre",
          price: "35.00",
          compare_price: "45.00",
          category: 2,
          quantity: 5,
          sold: 0,
        },
      },
      {
        model: "products.product",
        pk: 2,
        fields: {
          name: "BlockChain",
          photo: "photos/2023/04/backiee-204987.jpg",
          description: "el mejor producto del mundo",
          price: "35.00",
          compare_price: "55.00",
          category: 2,
          quantity: 10,
          sold: 0,
        },
      },
      {
        model: "products.product",
        pk: 3,
        fields: {
          name: "Marketing",
          photo: "photos/2023/04/backiee-225322.jpg",
          description: "gfkfv",
          price: "63.00",
          compare_price: "23.00",
          category: 2,
          quantity: 8,
          sold: 0,
        },
      },
    ],
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
