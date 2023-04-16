import { useRouter } from "next/router";
import { useEffect } from "react";
import { get_public_user } from "@/redux/actions/public";
import { connect } from "react-redux";
import { useState } from "react";
import Layout from "@/layouts/layout";
import APP_URL_SERVIDOR from "@/globals";

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
      <div class="w-full max-w-screen-lg mx-auto rounded-md overflow-hidden shadow-lg">
        <div class="relative h-72 md:h-96 bg-indigo-200">
          <img
            class="absolute inset-0 h-full w-full object-cover"
            src={`${APP_URL_SERVIDOR}${String(UserPublic.banner)}`}
            alt="Banner"
          />
          <div class="absolute bottom-0 left-0 right-0 p-4 md:p-8 lg:p-12 flex items-center">
            <div class="mr-4 lg:mr-8">
              <img
                class="h-24 w-24 md:h-32 md:w-32 rounded-full border-4 border-white"
                src={`${APP_URL_SERVIDOR}${UserPublic.picture}`}
                alt="Profile picture"
              />
            </div>
            <div class="text-white">
              <p class="text-2xl md:text-4xl font-bold leading-tight">
                {UserPublic.fullName}
              </p>
              <p class="text-base md:text-lg">@{UserPublic.fullName}</p>
            </div>
          </div>
        </div>
        {UserPublic.biografia && (
          <div class="p-4 md:p-2">
            <div class="mt-2">
              <p class="text-gray-200 font-semibold text-lg md:text-xl">
                Biografia:
              </p>
              <p class="text-gray-400 mt-2 text-base md:text-lg">
                {String(UserPublic.biografia)}s
              </p>
            </div>
          </div>
        )}
        {UserPublic.birthday && (
          <div class="p-4 md:p-2">
            <div class="mt-2">
              <p class="text-gray-200 font-semibold text-lg md:text-xl">
                Birthday:
              </p>
              <p class="text-gray-400 mt-2 text-base md:text-lg">
                {String(UserPublic.birthday)}s
              </p>
            </div>
          </div>
        )}
        {UserPublic.urlWeb && (
          <div class="p-4 md:p-2">
            <div class="mt-2">
              <p class="text-gray-200 font-semibold text-lg md:text-xl">
                My Page:
              </p>
              <p class="text-gray-400 mt-2 text-base md:text-lg hover:text-blue-500">
                <a href={`${String(UserPublic.urlWeb)}`}>{String(UserPublic.urlWeb)}</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  dataUser: state.Public.profilePublic,
});

export default connect(mapStateToProps, {
  get_public_user,
})(ProductDetailPage);
