import { GET_ALL_CATEGORY, GET_ERORR } from "../type/type";

const initial = {
   cateory: [],
   loading : true,
   error: null,
}

const categoryReducer = (state = initial, action) => {
    switch(action.type){
        case GET_ALL_CATEGORY:
            return {
                ...state,
                cateory: action.payload,
                loading: false,
                error: null
            }
            case GET_ERORR:
        return{
            cateory: [],
            loading: false,
            error: action.payload,
        }
        default:
            return state;
    }
    

}

export default categoryReducer;