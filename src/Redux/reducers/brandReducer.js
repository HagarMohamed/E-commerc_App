import { GET_ALL_BRAND, GET_ERORR } from "../type/type";

const initial = {
   brands: [],
   loading : true,
   error: []
}

const brandReducer = (state = initial, action) => {
    switch(action.type){
        case GET_ALL_BRAND:
            return {
                ...state,
                brands: action.payload,
                loading: false,
                error: null
            }
        case GET_ERORR:
        return{
            ...state,
            brands: [],
            loading: false,
            error: action.payload,
        }
        default:
            return state;
    }
    

}

export default brandReducer;