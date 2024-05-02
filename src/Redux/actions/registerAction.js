
import useInsertData from "../../Hooks/useGetData";
import { REGISTER_DATA } from "../type/type";


const registerAction = (parm) => async (dispatch) =>{

    try{
        const response = await useInsertData('/api/v1/auth/signup', parm);
        dispatch({
            type: REGISTER_DATA,
            payload: response.data,
        
        })
      }catch(e){

        dispatch({
            type: REGISTER_DATA,
            payload: e.response,
        
        })
    
      }

}

export default registerAction;


  