import React from 'react'
import {Routes,Route,useParams } from 'react-router-dom'
import './Commerce.scss'
import { useDispatch } from 'react-redux'
const Commerce = () => {
 let {commerce}=useParams() 
//  const {name}=userId
 console.log(commerce)
  return (
    <div>Commerce</div>
  )
}

export default Commerce