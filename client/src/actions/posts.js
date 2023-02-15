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

export const deleteListing = (id,nav) => async (dispatch)=>{
    try{
const {data} = await api.deleteListing(id)
dispatch({type:'DELETE',payload:data})
nav('/')
    }catch(err){
     console.log(err.response.data)   
    }

}
export const updatePost =(id,data) => async (dispatch) =>{
    try{
    const {updatePost} = await api.updatePost(id,data)
    dispatch({type:'UPDATE',payload:updatePost})
    }catch(err){
     console.log(err.response.data)   
    }

}

export const searchPost = (search,nav) => async (dispatch) =>{
    try{
        console.log(search,'asdads')
const { data:{data} } = await api.searchPost(search)
nav(`/searchPost`);
dispatch({type:'SEARCH',payload:data})

console.log(data)
    }catch(err){
      console.log(err.response.data)        
    }
}