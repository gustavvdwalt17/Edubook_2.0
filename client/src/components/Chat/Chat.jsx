import React from 'react'
import { useSelector } from 'react-redux'
const Chat = () => {
    const {listings} = useSelector((state) => state.listings) 
    console.log('lisisisi',{listings})
  return (
    <div>Chatyeyeyeyey</div>
  )
}

export default Chat