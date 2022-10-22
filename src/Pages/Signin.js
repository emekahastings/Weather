
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from './firebaseconfig'
 


const Signin=()=>{
let navigate= useNavigate()
const [lemail, setlemail]= useState()
const [lpassword, setlpassword]= useState()
const [eerror, seteerror ]= useState({})
const [perror, setperror ]= useState({})
 
function shine(event){
    setlemail(event.target.value)
     console.log(event.target.value)
    }
    let verify = async()=>{
        try{
          if(lemail==='' || lpassword===''){
          seteerror({
            message:'Email/Password cannot be empty'
          })
        }  
        if(lpassword.length < 6 && lpassword.length > 1){
          setperror({
            message: 'Password cannot be less than 6 digits', 
          })
          }
          console.log('Enter')
        }
        catch(error){
         
        seteerror({
          message: 'No field should be empty', 
        })
        
      }

   
   }
const signin= async()=>{
    
    try{
        let response= await signInWithEmailAndPassword(auth, lemail, lpassword)
        navigate('./mainpage')
        console.log(response)
       

       }
    catch(error){
       verify()
    }
}

    return(
        <div className=''>
       <div className='s'>
        {/* <img src={signinimage} className='siimg' alt='lol'/> */}
        <div className='signinform'>
            
            <FontAwesomeIcon icon={faArrowLeft}  className='back' onClick={()=>navigate(-1)} />
                <h2>SIGN IN</h2>
                                <p className='uerror'>{eerror.message}</p>
                <input type={'email'} placeholder='Enter Email Address'className='siemail' value={lemail || ""}  onChange={shine} /> <br />
                                 <p className='uerror'> {perror.message} </p>                                             
                <input type={'password'} placeholder='Enter Password' className='sipassword' value={lpassword || ""}  onChange={(event)=>{setlpassword(event.target.value)}} /> <br /> 

                <div className='sign' >
                   <button className='signin' onClick={signin}>SignIn</button>
                </div>
                
           
            <div className='lil'>
           <p className='if'> If you dont have an account please  <b className='bold' onClick={()=>navigate('/signup')}>Sign up</b> </p> 
                {/* <p className='rem'><input type={'checkbox'} /> Remember me </p>
                <p className='forgot'>Forgot Password</p> */}
            </div>
            {/* <p className='lil1'> Kindly keep your password a secret to avoud being compromised 
                if you have any suggestions, ideas please <a href='/'> Contact us </a>
                Have a lovely time enjoying your new super power <br />
                If you dont have an account please <Link to='/signup'  >Signup</Link>
            </p> */}
        </div>
       </div>
        </div>
    )
        }

export default Signin