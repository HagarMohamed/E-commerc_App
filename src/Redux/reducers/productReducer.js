import { GET_ALL_PRODUCT } from "../type/type";

const initial = {
   product: [],
   loading : true,
   error: null,
}

const productReducer = (state = initial, action) => {
    switch(action.type){
        case GET_ALL_PRODUCT:
            return {
                ...state,
                product: action.payload,
                loading: false,
                error: null
            }
        default:
            return state;
    }

}

export default productReducer;