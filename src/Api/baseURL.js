import axios from 'axios';


const baseUrl = axios.create({baseUrl: "http://127.0.0.1:8000"})


export default baseUrl;