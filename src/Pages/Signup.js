
import {Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {useState} from 'react'
import { auth } from './firebaseconfig'
const Signup=()=>{
  let navigate= useNavigate()
  const [remail, setremail]= useState()
  const [rpassword, setrpassword]= useState()
   
  const signup= async()=>{
 try{
  const user= await createUserWithEmailAndPassword(auth, remail, rpassword);
  console.log(user)
 } catch(error){
    console.log(error.message)
 }
  }
    return(
        <div className='signup'>
           <div>
      {/* <img src={signupimg} className='suimg' alt='lol' /> */}
      <div className='form'>
      <FontAwesomeIcon icon={faArrowLeft}  className='back' onClick={()=>navigate(-1)} />
        <h2>SIGN UP FORM</h2>
        <input type={'text'} placeholder='Full name...' className='what' /> <br />
        <input type={'email'} placeholder='Email address' onChange={(event)=>{setremail(event.target.value)}} /> <br />
        <input type={'password'} placeholder='Password'  onChange={(event)=>{setrpassword(event.target.value)}} /> <br />
        <input type={'text'} placeholder='Location' /> <br />
        <div className='signupp'>
         <Link to='/'>  <button className='signup' onClick={signup}>SIGN UP</button> </Link> 
           </div>

      </div>
           </div>

        </div>
    )

}
export default Signup