
import useGetData from "../../Hooks/useGetData";
import { GET_ALL_BRAND, GET_ALL_BRAND_PAGE } from "../type/type";
import { GET_ERORR } from "../type/type";

export const getAllBrands = () => async (dispatch) =>{

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

export const getAllBrandsPage = (page, limit) => async (dispatch) =>{

  try{
      const response = await useGetData('/api/v1/brands?page='+page+'&limit='+limit);
      console.log(response.data)
      dispatch({
          type: GET_ALL_BRAND_PAGE,
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



  