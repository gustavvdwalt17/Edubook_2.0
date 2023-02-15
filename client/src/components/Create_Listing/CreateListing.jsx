import React,{useState} from 'react'
import './Create_Listing.scss'
import { useDispatch } from 'react-redux'
import { createPost } from '../../actions/posts'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import postReducer from '../../reducers/posts'
import { Link } from 'react-router-dom'
import FileBase from 'react-file-base64';
import {IoMdArrowDropdown} from 'react-icons/io'
const CreateListing = () => {
 const [isUser,setIsUser]=useState(JSON.parse(localStorage.getItem('profile')))
  const [facultyChosen,setFacultyChosen]=useState('')
    const initialState ={
        title:'',
        price:'',
        number:'',
        faculty:facultyChosen,
        campus:'',
        img:'',
        id:isUser !== null ? isUser.oldUser.id : ''
    }
    console.log(initialState.id)
    function phonenumber(inputtxt) {
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(inputtxt.match(phoneno)) {
    return true;
  }
  else {
    alert("message");
    return false;
  }
}
console.log(initialState.id)
    const nav=useNavigate()
    const [initial,setInitial]=useState(initialState)
const dispatch=useDispatch()


    const handleChange= (e)=>{
      console.log('facultyyyyy',initialState.faculty)
        setInitial({...initial,[e.target.name]:e.target.value})
        console.log(initial)
    }
//https://www.youtube.com/watch?v=fb4QcrpQKUM

    const handleSubmit=(e)=>{
      e.preventDefault()
      if (phonenumber(initial.number)){
             const newval=initialState.faculty = facultyChosen
      const newInitial={...initial,faculty:newval}
      // console.log(newInitial)

      // #send with the id of the logged in ser to store adn when delete check if id is the same
    
    
      // send id with
      dispatch(createPost(newInitial,nav))
      }else{
        console.log('no')
      }
      // let formData = new FormData()
      // formData.append('img',initial.img)
      // fetch('http://localhost:3001/post/create',{
      //   method:'post',
      //   body:formData
      // }).then(res=>res.text()).then((resBody)=>{
      //   console.log(resBody)
      // })

      
      // const newval=initialState.faculty = facultyChosen
      // const newInitial={...initial,faculty:newval}
      // console.log(newInitial)
      // dispatch(createPost(newInitial,nav))
    }

//  const data = useSelector(postReducer.listings) 

    return (
    <div className='app__flex center'>
{isUser ? (


        <form method='POST' className='form-style-2' encType='multipart/form-data' onSubmit={handleSubmit} action="">

                  <h1>Create a Listing 📁</h1>
                  <span>--------------------------------------------------</span>
    <h5>Title</h5>
    <input onChange={handleChange} name='title' type="text"></input>
     <h5>Price</h5>
    <input onChange={handleChange} name='price' type="text"></input>
     <h5>Number</h5>
    <input onChange={handleChange} name='number' type="text"></input>
     <h5>Faculty:  {facultyChosen ? facultyChosen: ''}</h5>
    {/* <input onChange={handleChange} name='faculty' type="text"></input> */}
   <div className='dropdownmenu'>
   <ul className='youel'>
<li className='li-wrapper'>
Faculties: 
<IoMdArrowDropdown className='dropdown-icon'/>

  <div className='dropdown-menu'>
       
          <li  onClick={()=>setFacultyChosen('commerce')}>
        
        Commerce
      </li>
      <li onClick={()=>setFacultyChosen('science')} >
        Science
      </li>
      <li onClick={()=>setFacultyChosen('arts')}>
        Arts
      </li>
      <li onClick={()=>setFacultyChosen('technology')}>
        Technology
      </li>
  </div>
</li>
 {/* <select>
  <option>Commerce</option>
  <option>Commerce</option>
  <option>Commerce</option>
  <option>Commerce</option>
 </select> */}
    </ul>
    </div>
     <h5>Campus</h5>
    <input onChange={handleChange} name='campus' type="text"></input>
     <h5 className='file-upload'>Image</h5>
  <FileBase type="file" multiple={false} onDone={({ base64 }) => setInitial({ ...initial, img: base64 })} /> 
     {/* accept="image/*"  */}

    <br/>
    <button>Submit</button>
        </form>
        ):(

          <div>
          <h1>Please Login to create a Listing.</h1>
          <Link className='app__flex' to='/login'><h1>Login</h1></Link>
          </div>
        )}
    </div>
  )
}

export default CreateListing