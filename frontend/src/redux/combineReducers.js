import { combineReducers } from "redux";
import AuthReducer from "./reducers/auth";
import AlertReducer from "./reducers/alert";
import CategoryReducer from "./reducers/categories";
import ProductsReducer from "./reducers/products";
import BlogsReducer from "./reducers/blog";
import UserReducer from "./reducers/perfil";
import MessageReducer from "./reducers/message";
import PublicReducer from "./reducers/public";
import Web3Reducer from "./reducers/web3";

const rootReducer = combineReducers({
  Alert: AlertReducer,
  Auth: AuthReducer,
  Category: CategoryReducer,
  Products: ProductsReducer,
  Blog: BlogsReducer,
  User: UserReducer,
  Chat: MessageReducer,
  Public: PublicReducer,
  Web3: Web3Reducer,
});

export default rootReducer;
