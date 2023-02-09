import React,{useState} from 'react'
import { GiConsoleController } from 'react-icons/gi'
import './Commerce.scss'
import about from '../../assets/about01.png'
import {AiOutlinePhone,AiOutlineMail} from 'react-icons/ai'
import {GiPriceTag} from 'react-icons/gi'
import { Link } from 'react-router-dom'
import {BiBuildingHouse} from 'react-icons/bi'
import More from '../more_info/More'
import { useDispatch } from 'react-redux'
const CommerceListings = ({listing,index}) => {
    const dispatch = useDispatch()
    console.log('in',index)
    const [postData,setPostData]=useState(listing)
    const [id,setId]=useState(null)
    console.log(postData)
const handleClick = (e)=>{
    setId(e.target._id)
    console.log('handleClick')
    dispatch({type:'MORE',payload:postData})
}


        return (
    <div className='another-div'>
    <Link to='/more' onClick={handleClick} >
    <h3 className='h3-title'>{postData.title}</h3>
    
    <img className='image-topic' src={postData.img} alt="" />
    <div className='desc-grid'>       
 
 <div>
 <br/><small><AiOutlinePhone/> Number:{postData.number}</small>
 <br/><small ><GiPriceTag/> Price:{postData.price}</small>
 </div>
  <div >
 <br/><small><BiBuildingHouse/> Faculty:{postData.faculty}</small>
 <br/><small >  <AiOutlineMail/> Message me</small>
</div>


</div> 
  </Link> 
 
    </div>
 


 )
 

}

export default CommerceListings