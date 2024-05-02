
import useInsertData from "../../Hooks/useGetData";
import { LOGIN_DATA } from "../type/type";


const loginAction = (parm) => async (dispatch) =>{

    try{
        const response = await useInsertData('/api/v1/auth/login', parm);
        dispatch({
            type: LOGIN_DATA,
            payload: response.data,
        
        })
      }catch(e){

        dispatch({
            type: LOGIN_DATA,
            payload: e.response,
        
        })
    
      }

}

export default loginAction;


  