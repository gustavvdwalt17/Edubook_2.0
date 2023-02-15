import React,{useState} from 'react'
import './navbar.scss'
import eduvos from '../../assets/eduvos.png'
import {motion} from "framer-motion"
import {GiHamburgerMenu,GiCrossedBones}  from 'react-icons/gi'
import {Link} from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { searchPost } from '../../actions/posts'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const dispatch = useDispatch()
   const state = localStorage.getItem('profile')
   const [searching,setSearching]=useState('')
   const [isUser,setIsUser]=useState(JSON.parse(localStorage.getItem('profile')))
  const [toggle,setToggle]=useState(false)
const nav=useNavigate()
const handleSearch = (e) =>{
  console.log(searching)
  setSearching({...searching,searching:e.target.value})

}
const handleSearchClick =()=>{
dispatch(searchPost(searching,nav))
}
  const handleClick=()=>{
    {state && (
      dispatch({type:'SIGNOUT'})
      
      
    )

  setTimeout(()=>
            window.location.reload(),1000
            ) 
  }
  }
  const handleRef=()=>{
    setTimeout(()=>
            window.location.reload(),1000
            ) 
  }
  return (
    <nav className='app__flex-space navbar-wrapper'>
        <div>
       <h4 className='h-text'>
        <a href='/' onClick={ handleRef}>
          <img className='eduvos-img' src={eduvos} alt="" />
          </a> </h4>
        </div>


        <div className='list-wrap'>

            <ul>
               <Link className='link-router' to='/' onClick={handleRef}><li>Home</li>
               </Link> 
                 <Link className='link-router' to='/about'>       <li>About</li>
               </Link> 
         
    
   
 
            
               
                <Link onClick={handleClick}  className='link-router' to='/login'>
                   <li>{state ? 'Logout':'Login'}</li>
                   </Link>
    {isUser && (
 <h1 className='signed-in'>{`Signed in as : ${isUser?.oldUser?.email}`}</h1>
    )}
                {/* {state && (
                  dispatch({type:'SIGNOUT'})
                ) } */}
              <Link to='/create ' className='link-router '>
              <li className='create' >Create</li>
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
        <Link to='/'>
           <li>Home</li>
        </Link>
     <Link to='/about'>
       <li>About</li>
     </Link>
              
     
                    <Link onClick={handleClick}  className='link-router' to='/login'>
                   <li>{state ? 'Logout':'Login'}</li>
                   </Link>
    {state && (
 <h1 className='signed-in'>{`Signed in as : ${isUser.oldUser.email}`}</h1>
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