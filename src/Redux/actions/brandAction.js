
import useGetData from "../../Hooks/useGetData";
import { GET_ALL_BRAND } from "../type/type";
import { GET_ERORR } from "../type/type";

const getAllBrands = () => async (dispatch) =>{

    try{
        const response = await useGetData('/api/v1/brands');
        console.log(response.data)
        dispatch({
            type: GET_ALL_BRAND,
            payload: response.data,
        
        })
      }catch(e){

        console.log(e)

        dispatch({
            type: GET_ERORR,
            payload: "Error" +e,
        
        })
    
      }

}

export default getAllBrands;


  