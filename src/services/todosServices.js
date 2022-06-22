import todoerAPI from "../config/api";

export async function getTodos(){
    const response = await todoerAPI.get('/todos')
    return response.data
}

export async function createTodo(data){
    const response = await todoerAPI.post('/todos', data)
    console.log(response.data)
    return response.data
}