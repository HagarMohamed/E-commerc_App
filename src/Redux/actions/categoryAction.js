
import useGetData from "../../Hooks/useGetData";
import { GET_ALL_CATEGORY } from "../type/type";
import { GET_ERORR } from "../type/type";

const getAllCategory = () => async (dispatch) =>{

    try{
        const response = await useGetData('/api/v1/categories');
        dispatch({
            type: GET_ALL_CATEGORY,
            payload: response.data,
        
        })
      }catch(e){

        dispatch({
            type: GET_ERORR,
            payload: "Error" +e,
        
        })
    
      }

}

export default getAllCategory;


  