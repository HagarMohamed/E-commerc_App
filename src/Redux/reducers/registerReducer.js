import { REGISTER_DATA, GET_ERORR } from "../type/type";

const initial = {
  
    user : null,
    loading : false,
    error: null
}

const registerReducer = (state = initial, action) => {
    switch(action.type){
        case REGISTER_DATA:
            return {
                ...state,
                user: action.payload,
                loading: false,
                error: null
            }
            case GET_ERORR:
        return{
            user: [],
            loading: false,
            error: action.payload,
        }
        default:
            return state;
    }
    

}

export default registerReducer;