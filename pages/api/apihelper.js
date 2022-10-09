import React from 'react'
const axios = require('axios').default;

const getTodoitems =  async ()=>{
    const data= await axios.get('http://localhost:8000/api/todos');
    console.log(data)
    return data;
}

const createTodo = async ({title,description,status})=>{
    const {data} = await axios.post(`${process.env.NEXT_PUBLIC_api}/createtodo`, {
        title,description,status
          })
    return data.data;      
}
// /todo/:id
const getTodoById = async (id)=>{
    const {data} = await axios.get(`${process.env.NEXT_PUBLIC_api}/todo/${id}`)
    return data;
}

//update todo

const updateTodo = async (todo)=>{
    // console.log("update todo" , todo)
    const {data} = await axios.put(`${process.env.NEXT_PUBLIC_api}/todo/update`,{todo})
    return data.data;
}

// del todo 
const delTodo = async (todo)=>{
    let id = todo._id
    const {data} = await axios.delete(`${process.env.NEXT_PUBLIC_api}/todo/del/${id}`)
    return data.data;
}

export {getTodoitems,createTodo,getTodoById,updateTodo,delTodo}

