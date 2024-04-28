import { GET_ALL_CATEGORY, GET_ERORR } from "../type/type";

const initial = {
   category: [],
   loading : true,
   error: []
}

const categoryReducer = (state = initial, action) => {
    switch(action.type){
        case GET_ALL_CATEGORY:
            return {
                ...state,
                category: action.payload,
                loading: false,
                error: null
            }
        case GET_ERORR:
        return{
            ...state,
            category: [],
            loading: false,
            error: action.payload,
        }
        default:
            return state;
    }
    

}

export default categoryReducer;