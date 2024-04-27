
import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import productReducer from "./productReducer";
import registerReducer from "./registerReducer"
import loginReducer from "./loginReducer";




export default combineReducers({
    allcategory: categoryReducer,
    allProduct: productReducer,
    allRegisterData: registerReducer,
    allLoginData: loginReducer,
})