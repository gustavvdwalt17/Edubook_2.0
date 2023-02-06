import axios from 'axios'
import * as api from '../api/index.js';
export const createPost = (formData)=> async (dispatch) =>{
try{

const { data } =await  axios.post('http://localhost:5000/post/create',formData)
dispatch({type:'CREATE',payload:data})
}catch(error){
console.log(error.response.data)
}
}


export const fetchListing = (type) => async (dispatch) => {

try{
 const { data:{data} } = await api.fetchListing(type)
//  const { data:{data} } = await axios.get(`http://localhost:5000/post/${type}`)
console.log(data)
 dispatch({type:'FETCH',payload:data})
}catch(error){
console.log(error.response.data)
}
   
}