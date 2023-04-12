import NavBar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";
import { useEffect } from "react";
import { connect } from 'react-redux';
import { check_authenticated, refresh, load_user } from "@/redux/actions/auth";
import { view_data_user } from "@/redux/actions/perfil";

const Layout = (props) => {
  useEffect(()=>{
    props.refresh()
    props.check_authenticated()
    props.view_data_user()
}, []);
  return (
    <div className="bg-gray-900">
      <NavBar />
      {props.children}
      <Footer />
    </div>
  );
};

export default connect(null, {
  check_authenticated,
  load_user,
  refresh,
  view_data_user
}) (Layout)
