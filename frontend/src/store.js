import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { productListReducer } from "./reducers/productReducer";

const initialState = {};
const reducer = combineReducers({
  productList: productListReducer,
});

const componseEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  componseEnhancer(applyMiddleware(thunk))
);

export default store;
