import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import './SearchPost.scss'
import { Link } from 'react-router-dom'
import {AiOutlinePhone} from 'react-icons/ai'
import {GiPriceTag} from 'react-icons/gi'
import {BiBuildingHouse} from 'react-icons/bi'
import { useDispatch } from 'react-redux'
const SearchPost = () => {
    const dispatch= useDispatch()
      const {listings} = useSelector((state) => state.listings) 
      const [postData,setPostData]=useState(listings)
    const handleClick = () =>{
        console.log('asdasdasd',postData)
         dispatch({type:'MORE',payload:postData})
    }
      return (
        <>
<h1 className='app__flex'>Listings:</h1>
    <div className='search__wrapper' >

        {listings?.map((lis) =>{
            return (
               
   

                   <div className='another-div'>
                      <Link to='/more' onClick={handleClick} >
 
    <h3 className='h3-title'>{lis.title}</h3>
    
    <img className='image-topic' src={lis.img} alt="" />
    <div className='desc-grid'>       
 
 <div>
 <br/><small><AiOutlinePhone/> Number:{lis.number}</small>
 <br/><small ><GiPriceTag/> Price:{lis.price}</small>
 </div>
  <div >
 <br/><small><BiBuildingHouse/> Faculty:{lis.faculty}</small>

</div>


</div> 

 </Link>
    </div>
           


                
            )
        })}
    </div>
    </>
  )
}

export default SearchPost