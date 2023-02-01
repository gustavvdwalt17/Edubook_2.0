import axios from 'axios'

export const createPost = (formData)=> async (dispatch) =>{
try{

const { data } =await  axios.post('http://localhost:5000/post/create',formData)

}catch(error){
console.log(error.response.data)
}
}
export const fetchPost = () => async (dispatch) =>{

}