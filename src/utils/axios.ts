import axios from "axios";

const apiURL = "";

const axiosAPI = axios.create({ baseURL: apiURL });

export { axiosAPI };
