import React,{useState,useEffect} from 'react'
import './SignIn.scss'
import { signUpp } from '../../actions/auth.js'
import { signIn } from '../../actions/auth.js'
    import { useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
const SignIn = () => {

const id =Math.floor(Math. random() * 100)
    // const initialState = {
    //     email:'',
    //     password:'',
    //     confrimpass:'',
    //     number:''
    // }
const dispatch=useDispatch()
   const state = localStorage.getItem('profile')
    const [signUp,setSignUp]=useState(true)
    const [initialState,setInitialState] = useState(
{
        email:'',
        password:'',
        confrimpass:'',
        number:'',id:''
    }

    
// /https://stackoverflow.com/questions/50376353/why-we-need-to-put-e-target-name-in-square-brackets#:~:text=This%20is%20to%20dynamically%20update,update%20part%20of%20the%20state.
    )
     const handleSubmit=(e)=>{
      e.preventDefault()
      var regx =/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+).([a-z]+)?$/;
    
    if (regx.test(initialState.email) && (signUp)){
      setInitialState({...initialState, id:id})
   dispatch(signUpp(initialState))


  setTimeout(()=>
            window.location.reload(),1000
            ) 
  }else if (!signUp){
      // alert('Invalid Email')
      dispatch(signIn(initialState))
    }

     
    }

    const handleSignIn=(e)=>{
e.preventDefault();
// dispatch(signIn(initialState))

  // setTimeout(()=>
  //           window.location.reload(),1000
  //           ) 

    }


    const handleChange=(e)=>{
        setInitialState({...initialState,[e.target.name]:e.target.value})
    }
    console.log('email',initialState.email)
  return (
    <div className='form-div'>

        <form className='form-style' onSubmit={handleSubmit}>
      
      {signUp && (
        <motion.div
          whileInView={{y:[100,50,0], opacity:[0,0,1]}}
    transition={{duration:0.5}}
        
        >
      <h1>Sign Up 👋</h1>
      <span>------------------------</span>
            <h1>Email</h1>
            <input className='sign__input' onChange={handleChange} required name='email' type='text' ></input>
              <h1>Password</h1>
            <input className='sign__input' onChange={handleChange} required name='password' type='text' ></input>
            
                          <h1>Confirm Password</h1>
            <input className='sign__input' onChange={handleChange} required name='confirmpass' type='text' ></input>
        
                                     <h1>Number</h1>
            <input className='sign__input' onChange={handleChange} required name='number' type='text' ></input>

     <br/>
     <div className='btns'>
        <button  className='app__flex signinup-btn '>SignUp </button>
          <button className='signinup-btn extra-class' onClick={()=>setSignUp(!signUp)}>
            <h6>

            Already have an account?</h6>
            </button>  
     </div>
  
        </motion.div>
      )}

      {!signUp && (
        <div>
      <h1>Sign In 👋</h1>
 <h1>Email</h1>
            <input className='sign__input' onChange={handleChange} required name='email' type='text' ></input>
              <h1>Password</h1>
            <input className='sign__input' onChange={handleChange} required name='password' type='text' ></input>
            
            <br/>
               <div className='btns'>
                {/* onClick={handleSignIn} */}
                <button  className='signinup-btn '>Sign In</button>
       <button className='signinup-btn extra-class' onClick={()=>setSignUp(!signUp)}>
              <h6>Dont have an Account?</h6>
              </button>  
               </div>
        
        </div>
        
      )}
   {/* :(
    <h1>yeet</h1>
   ) */}
        </form>
    </div>
  )
}

export default SignIn