import axios from 'axios'
import * as api from '../api/index.js';
export const createPost = (formData,nav)=> async (dispatch) =>{
try{
console.log('data going',formData)
const { data } =await api.createListing(formData)
// const { data } =await axios.post('http://localhost:5000/post/create',formData)
console.log('data received',data)
nav(`/faculty/${data.faculty}`);
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

export const deleteListing = (id) => async (dispatch)=>{
    try{
const {data} = await api.deleteListing(id)

    }catch(err){
     console.log(err.response.data)   
    }

}