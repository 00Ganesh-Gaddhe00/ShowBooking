import { axiosInstance } from ".";


export const RegisterUser = async(values)=>{
try{
    const response = await axiosInstance.post("api/users/register", values)
    return response.data
} catch(err){
    return err
}
}

export const LoginUser = async(values)=>{
    try{
       const response = await axiosInstance.post("api/users/login", values)
       return response.data
    }
    catch(err){
        return err

    }
}


export const GetCurrentUser = async ()=>{

    try{


   const response = await axiosInstance.get('/api/users/get-current-user', {
    headers:{
        "Authorization":`Bearer ${localStorage.getItem('token')}`
    }

   })

   return response.data;

    }catch(err){
        console.log(err)
    }
}