import axios from "axios";
const BASE_URL = "https://employees-service-5o46.onrender.com/";

export default axios.create({
    baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
    withCredentials: true,
});
