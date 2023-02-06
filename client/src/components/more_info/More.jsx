import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import about from '../../assets/about01.png'
import './More.scss'
import { redirect } from "react-router-dom";
import { io, Socket } from 'socket.io-client'
import Chat from '../Chat/Chat';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const More = ({postData}) => {
  const socket = io.connect("http://localhost:3001")
  useEffect(()=>{
    console.log('1')
  socket.emit("join_room", id);
  },[])
const [show,setShow]=useState(false)
      const {listings} = useSelector((state) => state.listings) 
      const [messageList,setmessageList]=useState([])
      
      const username = 'person'
      const id = listings._id
        

      const [message,setMessage]=useState("")



    const handleChange=(e)=>{
        console.log(message)
        setMessage(e.target.value)
        console.log(message)
    }


const sendMessage= async ()=>{
    //   socket.emit("join_room",id) 

      const msg_data={
        room:id,
        username:username,
        msg:message
      }
      console.log('this is da msg',message)
      setmessageList([])
      await socket.emit("send_message",msg_data)
      // setmessageList((list)=>[...list,messageList])

      setShow(!show)

}

  useEffect(() => {
          
    socket.on("receive_message", (data) => {
    setmessageList((list)=>[...list,data])
    });
  }, [socket]);


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
  
  
  
  <h1 className='h1-center'>  {listings.title}
  <br/>
   <span>---------------------</span></h1>
 

  <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores cum fugit soluta excepturi eveniet inventore suscipit harum omnis molestias. Nostrum voluptates neque maxime. Delectus aut iure nostrum animi consequatur unde.</small>
<br/>
<small>Price: {listings.price}</small>
<br/>
<small>Faculty:{listings.faculty}</small>
<br/>
<small>Campus:{listings.campus}</small>
<br/>
<small>Number:{listings.number}</small>
<div>
<small>Message me</small>
<div className='message-div'>
<input value={message}   onChange={handleChange}/>
<button  onClick={sendMessage}>Send</button>
</div>
<button onClick={handleClicker}>Go to Chat</button>

</div>
</div>

<div>
     <img className='about-img' src={about} alt="" />
</div>
</div>
)}


  
{show && (
  <div>

    Chat
    <button onClick={()=>setShow(!show)}>back</button>

  
<div className='message-list'>
{console.log(messageList)}
{messageList.map((message)=>{
   return  <h1 > {message.msg}</h1>
})}



    {/* <h1>{messageList} <br/></h1> */}

  </div>

   

  </div>
)}

   
    </div>
  )
}

export default More