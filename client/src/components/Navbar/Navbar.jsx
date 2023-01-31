import React,{useState} from 'react'
import './navbar.scss'
import {motion} from "framer-motion"
import {GiHamburgerMenu,GiCrossedBones}  from 'react-icons/gi'
import {Link} from 'react-router-dom'

import { useDispatch } from 'react-redux'
const Navbar = () => {
  const dispatch = useDispatch()
   const state = localStorage.getItem('profile')
   const [isUser,setIsUser]=useState(JSON.parse(localStorage.getItem('profile')))
  const [toggle,setToggle]=useState(false)

  const handleClick=()=>{
    {state && (
      dispatch({type:'SIGNOUT'})
      
      
    )
  
  setTimeout(()=>
            window.location.reload(),1000
            ) 
  }
  }
  return (
    <nav className='app__flex-space navbar-wrapper'>
        <div>
       <h4 className='h-text'>EduBook</h4>
        </div>


        <div className='list-wrap'>

            <ul>
               <Link className='link-router' to='/'><li>Home</li>
               </Link> 
                <li>About</li>
    
   
 
            
               
                <Link onClick={handleClick}  className='link-router' to='/login'>
                   <li>{state ? 'Logout':'Login'}</li>
                   </Link>
    {state && (
 <h1 className='signed-in'>{`Signed in as : ${isUser?.oldUser.email}`}</h1>
    )}
                {/* {state && (
                  dispatch({type:'SIGNOUT'})
                ) } */}
              <Link to='/create ' className='link-router'>
              <li>Create</li>
              </Link>   
             
            </ul>
        </div>
  <div className={toggle ?  'ham-menu cross-menu':'ham-menu'}>
   {toggle ?   <GiCrossedBones  onClick={()=>setToggle(!toggle)}/>  : 
 <GiHamburgerMenu  onClick={()=>setToggle(!toggle)}/>} 
    </div>
{toggle && (
    

   
    <motion.div 
         whileInView={{ x: [300,0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
    className='app__navbar-small'>

  <div  >
    <ul className='list-small'>
        <li>Home</li>
                <li>About</li>
     
                    <Link onClick={handleClick}  className='link-router' to='/login'>
                   <li>{state ? 'Logout':'Login'}</li>
                   </Link>
    {state && (
 <h1 className='signed-in'>{`Signed in as : ${isUser?.oldUser.email}`}</h1>
    )}
                {/* {state && (
                  dispatch({type:'SIGNOUT'})
                ) } */}
              <Link to='/create ' className='link-router'>
              <li>Create</li>
              </Link>   
    </ul>
        
  </div>

    </motion.div>
)}

    </nav>
  )
}

export default Navbar