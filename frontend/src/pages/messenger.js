import Messenger from "@/containers/messenger/messenger";
import { useRouter } from "next/router";
import { connect } from "react-redux";

const MessengerPage = ({ isAutheticated }) => {
  return <Messenger />;
};
const mapStateToProps = (state) => ({
  isAutheticated: state.Auth.isAutheticated,
});

export default connect(mapStateToProps, {})(MessengerPage);
