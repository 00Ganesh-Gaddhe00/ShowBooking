import axios from "axios"

// const token = localStorage.getItem('token');
// console.log("Token being sent:", token);

export const axiosInstance = axios.create({
    headers:{
        // credentials : 'include',
        'Content-Type' : 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token') || ''}`
    }
})