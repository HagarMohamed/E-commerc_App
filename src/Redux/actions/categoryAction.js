
import useGetData from "../../Hooks/useGetData";
import { useInsertDataWithImage } from "../../Hooks/useInsertData";
import { CREATE_CATEGORY, GET_ALL_CATEGORY, GET_CATEGORY_PAGE } from "../type/type";
import { GET_ERORR } from "../type/type";

export const getAllCategory = () => async (dispatch) =>{

    try{
        const response = await useGetData('/api/v1/categories');
        console.log(response.data)
        dispatch({
            type: GET_ALL_CATEGORY,
            payload: response,
        
        })
      }catch(e){

        console.log(e)

        dispatch({
            type: GET_ERORR,
            payload: "Error" +e,
        
        })
    
      }

}

export const createCategory = (formData) => async (dispatch) =>{

  try{
      const response = await useInsertDataWithImage('/api/v1/categories',formData);
      console.log(response.data)
      dispatch({
          type: CREATE_CATEGORY,
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

export const getCategoryPage = (page, limit) => async (dispatch) =>{

  try{
      const response = await useGetData('/api/v1/categories?page='+page+'&limit='+limit);
      console.log(response.data)
      dispatch({
          type: GET_CATEGORY_PAGE,
          payload: response,
      
      })
    }catch(e){

      console.log(e)

      dispatch({
          type: GET_ERORR,
          payload: "Error" +e,
      
      })
  
    }

}
  