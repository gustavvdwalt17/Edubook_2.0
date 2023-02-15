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
console.log(listings)
const handleSelect=(e)=>{
  console.log('taret',e.target.value)
  console.log('brownie',listings)

  if (e.target.value==='A-Z'){
  dispatch({type:'SORT',payload:listings})
  }else if (e.target.value==='Price: Low to High'){
      dispatch({type:'SORT_BY_PRICE_LOW_TO_HIGH',payload:listings})
  }else if (e.target.value==='Price: High To Low'){
  dispatch({type:'SORT_BY_PRICE_HIGH_TO_LOW',payload:listings})
  }

}
// useEffect(()=>{
//   setTimeout(()=>
//             window.location.reload(),1000
//             ) 
// },[])


    useEffect(() => {
    window.onpopstate = e => {
       setTimeout(()=>
            window.location.reload(),1000
            ) 
    }});

  return (
<div>
  <div className='top__div'>
  <h4 className='commerce__sort'>Sort:</h4>
  

  <select onChange={handleSelect}>
    <option >All</option>
    <option >Price: Low to High</option>
    <option >Price: High To Low</option>
    <option>A-Z</option>
  </select>
</div>
  <span className='underline'></span>

<div className='outside-wrapper'>

    

{ listings!==undefined &&  listings!==null ? listings?.map((listing)=>{

return (

  
<div  className='topic-wrapper '  key={listing._id} >
  {console.log('listings there is')}
<CommerceListings listing={listing} />
  </div>

)}
):(

  <div className='app__flex'>
  
    <h1>Loading...</h1>
    
    </div>
)}

    </div>
    </div>
  )
  
}

export default Commerce