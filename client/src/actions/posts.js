import axios from 'axios'

export const createPost = (formData)=> async (dispatch) =>{
try{
const { data } = axios.post('http://localhost:5000/post/create',formData)
}catch{

}
}