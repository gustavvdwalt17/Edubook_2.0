import axios from 'axios'


export const signUpp = (formData) => async (dispatch) => {

try{
    // console.log('fomrdata',formData)
    console.log('yeetingggggggggggg')
    const {data} = await axios.post('http://localhost:5000/auth/signup',formData)
console.log(data)
dispatch({type:'AUTH',data})
}catch(error){
    console.log(error.response.data)
}

}

export const signIn = (formData) => async (dispatch)=>{
  try{
    console.log('the formadata',formData)
    const {data} =  await axios.post('http://localhost:5000/auth/signin',formData)
    dispatch({type:'AUTH',data})
  }catch(error){
    console.log(error.response.data)
}
}
