import { combineReducers } from "redux";
import AuthReducer from "./reducers/auth";
import AlertReducer from "./reducers/alert";
import CategoryReducer from "./reducers/categories";
import ProductsReducer from "./reducers/products";
import BlogsReducer from "./reducers/blog"

const rootReducer = combineReducers({
  Alert: AlertReducer,
  Auth: AuthReducer,
  Category: CategoryReducer,
  Products: ProductsReducer,
  Blog: BlogsReducer
});

export default rootReducer;
