import React from 'react'
import { useSelector } from 'react-redux'
import './Update.scss'
const Update = () => {
    const {listings} = useSelector((state)=>state.listings )
    console.log(listings)
  return (
    <div className='update-container'>
<h1 className='title'>Edit Data ✏️</h1>

<h1>Title</h1>
<input placeholder={listings.title}/>
<h1>Price</h1>
<input placeholder={listings.price}/>
<h1>Number</h1>
<input placeholder={listings.number}/>

    </div>
  )
}

export default Update