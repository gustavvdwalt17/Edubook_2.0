import React,{useEffect,useState}from 'react'
import {Routes,Route,useParams } from 'react-router-dom'
import './Commerce.scss'
import { useDispatch } from 'react-redux'
import { fetchListing } from '../../actions/posts'
import { useSelector } from 'react-redux'
import CommerceListings from './CommerceListings'
const Commerce = () => {


  const dispatch=useDispatch()


  //  const {name}=userId


const {medicine,commerce}=useParams() 
const [param,setParam]=useState(medicine ? medicine:commerce)
console.log(param)
// if (medicine!==undefined) {
//   setParam(()=>medicine)
// }else if (commerce!==undefined) {
//    setParam(()=>commerce)
// }

 console.log('1')
 
 useEffect(()=>{

dispatch(fetchListing(param))
  },[])

  
  const {listings} = useSelector((state) => state.listings) 

  return (
    <div className='outside-wrapper'>
     
{listings?.map((listing)=>{

return (
  
<div  className='topic-wrapper '  key={listing._id} >

<CommerceListings listing={listing} />
  </div>

)})}

    </div>
  )
}

export default Commerce