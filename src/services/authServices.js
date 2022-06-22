import todoerAPI from "../config/api";

export async function signUp(data){
    const response = await todoerAPI.post('/auth/signup', data)
    return response.data
}

export async function signIn(data){
    const response = await todoerAPI.post('/auth/signin', data)
    console.log(response.data)
    return response.data
}