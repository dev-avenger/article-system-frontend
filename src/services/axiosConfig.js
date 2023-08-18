import axios from "axios";

let url = window.baseUrl || process.env.REACT_APP_API_URL;

const axiosConfig = axios.create({
  baseURL: url
});

export default axiosConfig;
