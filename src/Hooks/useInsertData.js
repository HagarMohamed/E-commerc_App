
import baseUrl from "../Api/baseURL";

//parameter is a form object
const useInsertDataWithImage = async(url, params) => {

    const config ={
        headers:{"Content-Type":"multipart/form-data"}
    }
    const response = await baseUrl.post(url, params, config);
    return response.data;

}

const useInsertData = async(url, params) => {

    const response = await baseUrl.post(url, params);
    return response;

}

export {useInsertData, useInsertDataWithImage };