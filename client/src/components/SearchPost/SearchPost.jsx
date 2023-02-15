import React from 'react'
import { useSelector } from 'react-redux'
import './SearchPost.scss'
import {AiOutlinePhone} from 'react-icons/ai'
import {GiPriceTag} from 'react-icons/gi'
import {BiBuildingHouse} from 'react-icons/bi'
const SearchPost = () => {
      const {listings} = useSelector((state) => state.listings) 
  console.log('listings',listings)
       {console.log('len',listings.length)}
      return (
    <div>
<h1 className='app__flex'>Listings:</h1>
        {listings?.map((lis) =>{
            return (
               
                <div className='search__wrapper'>

                   <div className='another-div'>
 
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

 
    </div>
           


                </div>
            )
        })}
    </div>
  )
}

export default SearchPost