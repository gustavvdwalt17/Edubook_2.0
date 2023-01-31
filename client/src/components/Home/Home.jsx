import "./Home.scss"
import {AiFillPhone,AiOutlineMail,AiOutlineMessages} from 'react-icons/ai'
import React from 'react'
import about from '../../assets/about01.png'
import {motion} from "framer-motion"
import { Link } from "react-router-dom"
const Home = () => {
  return (
    <div className="home-wrapper">
      
      
        <motion.div 
   whileInView={{opacity:1}}
  whileHover={{scale:1.1}}
  transition={{duration:0.5}}
        
        className="module-wrapper">
          <Link to='/commerce'>
          <h4>
       
            Commerce</h4>
    </Link>
          <img src={about} alt="" />

       
        </motion.div >
        <motion.div 
         whileInView={{opacity:1}}
  whileHover={{scale:1.1}}
  transition={{duration:0.5}}
        className="module-wrapper">  <h4>Medicine
          
          </h4>
          
              <img src={about} alt="" /></motion.div>
        <motion.div 
         whileInView={{opacity:1}}
  whileHover={{scale:1.1}}
  transition={{duration:0.5}}
        className="module-wrapper">  <h4>Technology</h4>
        
            <img src={about} alt="" /></motion.div>
    </div>
  )
}

export default Home