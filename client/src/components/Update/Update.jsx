import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import './Update.scss'
import { useDispatch } from 'react-redux';
import FileBase from 'react-file-base64';
import {IoMdArrowDropdown} from 'react-icons/io'
import { updatePost} from '../../actions/posts';
const Update = () => {
    const dispatch=useDispatch()
    // const {listings} = useSelector((state)=>state.listings )
      const [isItems,setIsItems]=useState(JSON.parse(localStorage.getItem('update')))
    // console.log('the listings',listings)
     const [facultyChosen,setFacultyChosen]=useState('')
    const initialState ={
        title:'',
        price:'',
        number:'',
        faculty:'',
        campus:'',
        img:''
    }
// console.log(listings.title)
    const [updatePosts,setUpdatePost]=useState(initialState)
    const handleChange = (e) => {
        setUpdatePost({...updatePosts,[e.target.name]:e.target.value})
    }
    function phonenumber(inputtxt) {
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(inputtxt.match(phoneno)) {
    return true;
  }
  else {
 
    return false;
  }
}

    const handleSubmit=(e)=>{
         e.preventDefault()
      if (phonenumber(updatePosts.number)){
     const newval=initialState.faculty = facultyChosen
      const newInitial={...updatePosts,faculty:newval}

      console.log(newInitial)

      dispatch(updatePost(isItems._id,newInitial)) 
    }else{
        alert('Please make sure to insert a valid phone number')
      }


      

    }
  return (
    <div className='update-container'>
<h1 className='title'>Edit Data ✏️</h1>
<form onSubmit={handleSubmit}>
<h1>Title</h1>
<input name='title' onChange={handleChange} placeholder={isItems.title}/>
<h1>Price</h1>
<input name='price' onChange={handleChange} placeholder={isItems.price}/>
<h1>Number</h1>
<input name='number' onChange={handleChange} placeholder={isItems.number}/>
<h1>Campus</h1>
<input name='campus' onChange={handleChange} placeholder={isItems.campus}/>


 <div className='dropdownmenu'>
   <ul className='youel'>
<li className='li-wrapper'>
Faculties: 
<IoMdArrowDropdown className='dropdown-icon'/>

  <div className='dropdown-menu'>
            {/* onClick={()=>setFacultyChosen('commerce')} */}
          <li onClick={()=>setFacultyChosen('commerce')}  >
        
        Commerce
      </li>
      <li onClick={()=>setFacultyChosen('science')} >
        Science
      </li>
      <li onClick={()=>setFacultyChosen('arts')} >
        Arts
      </li>
      <li  onClick={()=>setFacultyChosen('technology')}>
        Technology
      </li>
  </div>
</li>
 
    </ul>
    </div>
<FileBase className='filebase-64' placeholder={isItems.img} type="file" multiple={false} onDone={({ base64 }) => setUpdatePost({ ...updatePosts, img: base64 })} />

   
   <button>Submit</button>
   </form>
    </div>
  )
}

export default Update