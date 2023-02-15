import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import about from '../../assets/about01.png'
import './More.scss'
import { redirect } from "react-router-dom";
import { io, Socket } from 'socket.io-client'
import Chat from '../Chat/Chat';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {AiFillDelete} from 'react-icons/ai' 

import {GrUpdate} from 'react-icons/gr' 
import { deleteListing } from '../../actions/posts';
const More = () => {
  const nav=useNavigate()
  const dispatch = useDispatch()
     const [isUser,setIsUser]=useState(JSON.parse(localStorage.getItem('profile')))
     const {listings} = useSelector((state) => state.listings) 

  //  localStorage.setItem('info',JSON.stringify(listings))
     const [isItems,setIsItems]=useState(JSON.parse(localStorage.getItem('info')))
    console.log('itemmss',isItems)
     //  console.log(isUser.oldUser._id)
    //  console.log(isUser)
    
    //  console.log(listings.number)
  // const socket = io.connect("http://localhost:3001")
  // useEffect(()=>{
  //   console.log('1')
  // socket.emit("join_room", id);
  // },[])
const [show,setShow]=useState(false)
 
      const [messageList,setmessageList]=useState([])
      
      // const username = 'person'
      // const id = listings._id
        

      const [message,setMessage]=useState("")



    const handleChange=(e)=>{
     
        setMessage(e.target.value)
      
    }

const handleClick=()=>{
  console.log(listings._id)
  dispatch(deleteListing(listings._id,nav))
}
// const sendMessage= async ()=>{
//     //   socket.emit("join_room",id) 

//       const msg_data={
//         room:id,
//         username:username,
//         msg:message
//       }
//       console.log('this is da msg',message)
//       setmessageList([])
//       await socket.emit("send_message",msg_data)
//       // setmessageList((list)=>[...list,messageList])

//       setShow(!show)

// }

  // useEffect(() => {
          
  //   socket.on("receive_message", (data) => {
  //   setmessageList((list)=>[...list,data])
  //   });
  // }, [socket]);

const handleUpdate=()=>{
  dispatch({type:'UPDATE',payload:listings})
  nav('/update')
}
  const handleClicker=()=>{
setShow(!show)
// setInfo({...info,info:msg_data})
// console.log('the info',info)
// dispatch({type:'MESSAGE_DATA',payload:info})
// navigate('/chat')
}
  return (

<div >

{!show && (
  <div className='more-wrapper'>
<div className='more-inside__wrapper'>
  
  
  {/* {console.log('listingstitle',listings.title)} */}
  <h1 className='h1-center'>  {isItems.title}
  <br/>
   <span>---------------------</span></h1>
 

  <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores cum fugit soluta excepturi eveniet inventore suscipit harum omnis molestias. Nostrum voluptates neque maxime. Delectus aut iure nostrum animi consequatur unde.</small>
<br/>
<small>Price: {isItems.price}</small>
<br/>
<small>Faculty:{isItems.faculty}</small>
<br/>
<small>Campus:{isItems.campus}</small>
<br/>
<small>Number:{isItems.number}</small>

{/* {console.log(isUser.oldUser.id,isItems.id)} */}
<div className='image-div'>
     <img className='about-img' src={isItems.img} alt="" />
</div>
{isUser?.oldUser.id===isItems.id && isUser !== null && (

  <div className='buttons'>

  <div className='delete-btn-div'>
<button className='delete-btnn'  onClick={handleClick}  >
  Delete
 </button> 
  {/* <AiFillDelete onClick={handleClick} className='delete-btn'/> */}
  </div>

<div className='update-btn-div'>
<button  onClick={handleUpdate}>
Update  
  {/* <GrUpdate onClick={handleUpdate} className='update-btn'/> */}
</button>
</div>
  </div>
)}
</div>
   </div>
)}
{/* {/* <div> */}
{/* <small>Message me</small>
<div className='message-div'>
<input className='more__input' value={message}   onChange={handleChange}/> 
{/* <button  onClick={sendMessage}>Send</button> */}
{/* </div> */}
{/* <button onClick={handleClicker}>Go to Chat</button> */}

{/* </div>
</div> */} 

  
{/* {show && (
  <div>

    Chat
    <button onClick={()=>setShow(!show)}>back</button>

  
<div className='message-list'>
{console.log(messageList)}
{messageList.map((message)=>{
   return  <h1 > {message.msg}</h1>
})} */}



    {/* <h1>{messageList} <br/></h1> */}

  {/* </div>

   

  </div>
)} */}

   
    </div>
 
  )
}

export default More