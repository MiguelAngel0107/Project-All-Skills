import { useState } from "react";
import FormPost from "@/components/blog/formPost";
import Room from "@/components/blog/room";
import Layout from "@/layouts/layout";
import ShowPost from "@/components/blog/showPost";

import { useEffect } from "react";
import { connect } from "react-redux";
import { get_all_post, add_like_or_dislike } from "@/redux/actions/blog";

const Blog = ({ get_all_post, all_post, photo_user, idUser, add_like_or_dislike }) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    get_all_post();
  }, []);

  useEffect(() => {
    showPost();
  }, [all_post]);

  const showPost = () => {
    let display = [];

    if (all_post && all_post !== null) {
      all_post.map((item, index) => {
        return display.push(
          <ShowPost key={index} post={item} idUser={idUser} add_like_or_dislike={add_like_or_dislike}/>
        );
      });
    }
    return display;
  };

  
  return (
    <Layout>
      <div class="bg-gray-900 dark:bg-dark-main">
        <div class="flex justify-center">
          <div class="w-full lg:w-2/3 xl:w-2/5 pt-4 lg:pt-4 px-2">
            <FormPost />
            {all_post && showPost()}
          </div>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  all_post: state.Blog.Posts,
  photo_user: state.User.picture,
  idUser: state.User.idUser,
});

export default connect(mapStateToProps, {
  get_all_post,
  add_like_or_dislike
})(Blog);
