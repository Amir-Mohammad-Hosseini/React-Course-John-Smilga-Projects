import axios from "axios";
const authFetch = axios.create({
    baseURL : "http://localhost:5000/api" , 
})
authFetch.interceptors.request.use((request) =>{
    request.headers.common["Accept"]  = "application/json"
    console.log("request sent")
    return request
} , (error) => {
    return Promise.reject(error)
})
authFetch.interceptors.response.use((response) =>{
    console.log("got response")
    return response
} , (error) => {
    console.log(error.response)
})
export default authFetch