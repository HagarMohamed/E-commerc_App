
import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import productReducer from "./productReducer";




export default combineReducers({
    allcategory: categoryReducer,
    allProduct: productReducer
})