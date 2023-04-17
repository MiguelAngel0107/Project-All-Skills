import Blog from "@/containers/blog/blog";
import { useState } from "react";
import { useRouter } from "next/router";

import { connect } from "react-redux";

const BlogPage = ({ isAutheticated }) => {

  return <Blog />;
};

const mapStateToProps = (state) => ({
  isAutheticated: state.Auth.isAutheticated,
});

export default connect(mapStateToProps, {})(BlogPage);
