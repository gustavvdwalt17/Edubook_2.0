import React,{useState} from 'react'
import './Create_Listing.scss'
import { useDispatch } from 'react-redux'
import { createPost } from '../../actions/posts'
const CreateListing = () => {

const dispatch=useDispatch()
    const initialState ={
        title:'',
        price:'',
        number:'',
        faculty:'',
        campus:'',
        img:''
    }

    const handleChange= (e)=>{

        setInitial({...initial,[e.target.name]:e.target.value})
        console.log(initial)
    }

    const [initial,setInitial]=useState(initialState)

    const handleSubmit=(e)=>{
      e.preventDefault()
      dispatch(createPost(initial))
    }
  return (
    <div className='app__flex center'>

        <form method='POST' className='form-style-2' encType='multipart/form-data' onSubmit={handleSubmit} action="">

                  <h1>Create a Listing 📁</h1>
                  <span>--------------------------------------------------</span>
    <h5>Title</h5>
    <input onChange={handleChange} name='title' type="text"></input>
     <h5>Price</h5>
    <input onChange={handleChange} name='price' type="text"></input>
     <h5>Number</h5>
    <input onChange={handleChange} name='number' type="text"></input>
     <h5>Faculty</h5>
    <input onChange={handleChange} name='faculty' type="text"></input>
     <h5>Campus</h5>
    <input onChange={handleChange} name='campus' type="text"></input>
     <h5 className='file-upload'>Image</h5>
   <input  type="file" name="img" />
   {/* accept="image/*" */}

    <br/>
    <button>Submit</button>
        </form>
    </div>
  )
}

export default CreateListing