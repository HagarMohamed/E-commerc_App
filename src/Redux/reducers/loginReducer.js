import { LOGIN_DATA, GET_ERORR } from "../type/type";

const initial = {
  
    loginUser : null,
    loading : false,
    error: null
}

const loginReducer = (state = initial, action) => {
    switch(action.type){
        case LOGIN_DATA:
            return {
                ...state,
                loginUser: action.payload,
                loading: false,
                error: null
            }
            case GET_ERORR:
        return{
            loginUser: [],
            loading: false,
            error: action.payload,
        }
        default:
            return state;
    }
    

}

export default loginReducer;