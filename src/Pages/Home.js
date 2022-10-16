import homeimage from './sky1.JPG'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'

import {Link} from 'react-router-dom'
const Home=()=>{
const [show, setshow]= useState()
let navigate= useNavigate()
    return(
        <div className='app'>
            <div className='homeimage'>
          <img src={homeimage} className='himg' alt='lol' />
        <div className='navcont'>
            <div className='navcont'>
            <p onClick={()=>navigate('/')}>Home</p>
            <p onClick={()=>navigate('./signup')}>Signup</p>
            <p onClick={()=>navigate('./signin')}>Signin</p>
          
         </div>

        </div>
         
         <div className='mobilenavcont'>
        <FontAwesomeIcon icon={faBarsStaggered}  className='ham'  onClick={()=>setshow(!show)}/>
         {
           show? <div className='sidemenu'>
          <p >Home</p> 
           <Link to='./signup'><p className='signuph'>Signup</p></Link> 
          <Link to='./signin' >  <p className='signinh'>Signin</p></Link>
            <Link to='./facts'><p className='facts'>Did you know</p></Link>
            <p>Contact us</p>
         </div>:null
}
    </div>
        </div>

        <div className='homeintro'>
            <h1 className='explore'>Explore the weather...</h1>
            <h3 className='dits'>What would you do if i told you, you could be your own super hero and your power was being able to predict the weather in a ny city in the world... <br /> Cool right?, Well, its possible with our app</h3>
           <div className='disccover'>
          <Link to='signup'>  <div className='disc'>DISCOVER</div></Link>
           </div>
        </div>

            </div>

        
    )

}
export default Home 