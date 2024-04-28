
import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import productReducer from "./productReducer";
import registerReducer from "./registerReducer"
import loginReducer from "./loginReducer";
import brandReducer from "./brandReducer";




export default combineReducers({
    allcategory: categoryReducer,
    allBrands: brandReducer,
    allProduct: productReducer,
    allRegisterData: registerReducer,
    allLoginData: loginReducer,
})