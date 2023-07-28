import "./Home.scss"
import {AiFillPhone,AiOutlineMail,AiOutlineMessages} from 'react-icons/ai'
import React,{useEffect,useState} from 'react'
import about from '../../assets/about01.png'
import tech from '../../assets/faculty-tech.png'
import arts from '../../assets/faculty-arts.png'
import business from '../../assets/faculty-business.png'
import science from '../../assets/faculty-science.png'
import {motion} from "framer-motion"
import {Link} from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { searchPost } from '../../actions/posts'
import { useNavigate } from 'react-router-dom'

   


const Home = () => {
  const [searching,setSearching]=useState('')
const nav=useNavigate()
const dispatch=useDispatch()

    const handleSearch = (e) =>{
  console.log(searching)
  setSearching({...searching,searching:e.target.value})

}
const handleSearchClick =()=>{
dispatch(searchPost(searching,nav))
}
// useEffect(()=>{
//   setTimeout(()=>
//             window.location.reload(),1000
//             ) 
// },[])

  return (
    <div className="home__page" >
      <div className="search__post" >
        <div className="input__nav-div" >
<input name='search' onChange={handleSearch} className='input__nav'/>
        </div>

      <div className=" navbar__search-div" >
   <AiOutlineSearch onClick={handleSearchClick} className='navbar__search'/>   
      </div>
     
      </div>
       
    <motion.div 
              whileInView={{y:[100,50,0], opacity:[0,0,1]}}
    transition={{duration:0.5}}
    className="home-wrapper">
 

      
        <motion.div 
   whileInView={{opacity:1}}
  whileHover={{scale:1.1}}
  transition={{duration:0.5}}
        
        className="module-wrapper">


          
          <Link className="link" to='/faculty/commerce'>
          <h4>
       
            Faculty of Commerce and Law</h4>
    </Link>
          <img className="image" src={business} alt="" />

       
        </motion.div >
                <motion.div 
   whileInView={{opacity:1}}
  whileHover={{scale:1.1}}
  transition={{duration:0.5}}
        
        className="module-wrapper">
          <Link className="link" to='/faculty/arts'>
          <h4>
       
            Faculty of Humanities and Arts</h4>
    </Link>
          <img className="image" src={arts} alt="" />

       
        </motion.div >
                <motion.div 
   whileInView={{opacity:1}}
  whileHover={{scale:1.1}}
  transition={{duration:0.5}}
        
        className="module-wrapper">
          <Link className="link" to='/faculty/science'>
          <h4>
       
            Faculty of Applied Science</h4>
    </Link>
          <img className="image" src={science} alt="" />

       
        </motion.div >
                <motion.div 
   whileInView={{opacity:1}}
  whileHover={{scale:1.1}}
  transition={{duration:0.5}}
        
        className="module-wrapper">
          <Link className="link" to='/faculty/technology'>
          <h4>
       
            Faculty of IT</h4>
    </Link>
          <img className="image" src={tech} alt="" />

       
        </motion.div >

    </motion.div>
    </div>
  )
}

export default Home