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

  const [isUser,setIsUser]=useState(JSON.parse(localStorage.getItem('profile')))
const {science,commerce,arts,technology}=useParams() 
const [param,setParam]=useState(science ? science:commerce ,arts ? arts:technology )
// ?  technology: technology ? arts :arts
// 'backgroundColor': status === 'approved' ? 'blue' : status === 'pending' ? 'black' : 'red'}}>
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

console.log(param)  
  const {listings} = useSelector((state) => state.listings) 

  return (

<div className='outside-wrapper'>

    

{ listings!==undefined ? listings.map((listing)=>{

return (
  
<div  className='topic-wrapper '  key={listing._id} >

<CommerceListings listing={listing} />
  </div>

)}):(
  <div>
    <h1>No Listings</h1></div>
)}

    </div>
  )
  
}

export default Commerce