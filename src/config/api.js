// information from the backend, URL
import axios from 'axios'

const todoerAPI = axios.create({
    baseURL: "http://localhost:4000"
})

todoerAPI.interceptors.request.use(req => {
    //send the token in the request

    const token = sessionStorage.getItem("token")
    if (token) {
        req.headers["Authorization"] = `Bearer ${token}`
    }

    return req
})

export default todoerAPI