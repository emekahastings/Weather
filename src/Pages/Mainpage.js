import mainimage from './sky2.JPG'
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'

const Mainpage=()=>{
    const [show, setshow]= useState()
     const [current, setcurrent]= useState({})
     const [condition, setcondition]= useState({})
     const [details, setdetails]= useState({})
     
    
    let navigate= useNavigate()

 

    useEffect(()=>{
        axios.get('http://api.weatherapi.com/v1/current.json?key=a527df41ad06453fbfe71051212601&q=Lagos&aqi=no')
        .then(response =>{
          setcurrent(response.data.location)
          setcondition(response.data.current.condition)
          setdetails(response.data.current)
          console.log(response.data) })
         
      }, []) 
    
    function Good(event){
        let searchparam= event.target.value

         console.log(searchparam)
            axios.get(`http://api.weatherapi.com/v1/current.json?key=a527df41ad06453fbfe71051212601&q=${searchparam}&aqi=no`)
            .then(response =>{
              setcurrent(response.data.location)
              setcondition(response.data.current.condition)
              setdetails(response.data.current)
              console.log(response.data) })
             
          }
        
       
    return(
        <div className=''>
            <img  src={mainimage} alt='lol'className='mainimage'/>
            <div className='mobilenavcont'>
        <FontAwesomeIcon icon={faBarsStaggered}  className='ham'  onClick={()=>setshow(!show)}/>
         {
           show? <div className='sidemenu'>
            <p onClick={()=>navigate('./mainpage')}>Home</p>
            <p onClick={()=>navigate('./hours')}>Hourly Forecast</p>
            <p onClick={()=>navigate('./days')}>7days Forecast</p> 
            <p onClick={()=>navigate('./facts')}>Weather facts</p>
         </div>:null
}
    </div>
            <div className='parts'>
            <div className='part1'>
                <h2 className='curr'>Current Forecast</h2> 
                <div className='search'>
                    <input type={'text'} className='sinput' placeholder='Search City...' onChange={Good}   />
                    <p className='submit'  >Submit</p>
                </div>
  
            <div>
                <div>
                    <div className='fullloc'>
                    <h1 className='location'>{current.name} </h1> 
                    <p className='sublocation'> {current.country} </p> <br />
                    </div>
                <p className='tnd'>{current.localtime}</p>
                <img src={condition.icon} className='currhicon' alt='lol' />
                <p className='cond'>{condition.text} </p>
                </div>
                </div>
               

                <div className='detailscontainer'>
               <div className='dc1'>
     
                 
                 <div className='temp'>
                    <b>Temp</b> <br />
                 <b className='val'> {details.temp_c} <sup className='cel'>o</sup>C</b>
                 </div>
                    
                
                   <div className='humidity'>
                   <b>Humidity </b> <br />
                   <b className='val'> {details.humidity}</b> 
                   </div>
                 </div>
                 <div className='dc2'>
                 <div className='wind'>
                    <b>Wind deg</b> <br /> 
                    <b className='val'> {details.wind_degree}</b>
                 </div>
                 <div className='winddir'>
                    <b>Wind dir</b> <br />
                    <b className='val'> {details.wind_dir}</b>
                 </div>
               </div>
                </div>
                
            </div>
            <div className='part2'>

                <h2>7day Forecast</h2>
                <div className='part2a daycont'>
                   <div className='first'>
                     <div className='d1 day'>
                        <div>
                    <p> Day1</p>
                    <p> Icon </p>
                    <p> Text</p>
                    <p> Wind dir </p>
                   
                       </div>
                     </div>
                       <div className='d2 day'>
                       <p> Day2</p>
                       <div>
                    <p> Icon</p>
                    <p>Text </p>
                    <p>Temperature</p>
                    <p> Wind dir</p>
                       </div>
                        </div>
                        <div className='d3 day'>
                        <p> Day3</p>
                        <div>
                    <p> Icon</p>
                    <p> Text </p>
                    <p>Temperature</p>
                    <p> Wind dir</p>
                       </div>
                        </div>
                        <div className='d4 day'>
                        <p> Day4</p>
                        <div>
                    <p> Icon</p>
                    <p>Text</p>
                    <p>Temperature </p>
                    <p>Wind dir</p>
                       </div>
                        </div>
                        </div>
                        <div className='second'>
                        <div className='d5 day'>
                        <p> Day5</p>
                        <div>
                    <p> Icon</p>
                    <p>Text</p>
                    <p>Temperature </p>
                    <p> Wind dir</p>
                       </div>
                        </div>
                        <div className='d6 day'>
                        <p> Day6</p>
                        <div>
                    <p>Icon</p>
                    <p>Text</p>
                    <p> Temp</p>
                    <p> Wind dir </p>
                   
                       </div>
                        </div>
                        <div className='d7 day'>
                        <p> Day7</p>
                        <div>
                    <p>Icon</p>
                    <p> Text</p>
                    <p> Temperature</p>
                    <p> Wind dir </p>
                       </div>
                        </div>
                        <div className='d8 day'>
                        <p> Day8</p>
                        <div>
                    <p>Icon</p>
                    <p> Text</p>
                    <p> Temp</p>
                    <p> Wind dir </p>
                    
                       </div>
                        </div>
                        </div>
                </div>
                <h2>Hourly Forecast</h2>
                <div className='part2c hourcont'>
                   <div className='h1 hour'>
                    <p>1hr</p>
                   </div>
                   <div className='h2 hour'>
                    <p>1hr</p>
                   </div>
                   <div className='h3 hour'>
                    <p>1hr</p>
                   </div>
                   <div className='h4 hour'>
                    <p>1hr</p>
                   </div>
                   <div className='h5 hour'>
                    <p>1hr</p>
                   </div>
                   <div className='h6 hour'>
                    <p>1hr</p>
                   </div>
                   
                </div>
                <div className='part2c hourcont2'>
                   <div className='h1 hour'>
                    <p>1hr</p>
                   </div>
                   <div className='h2 hour'>
                    <p>1hr</p>
                   </div>
                   <div className='h3 hour'>
                    <p>1hr</p>
                   </div>
                   <div className='h4 hour'>
                    <p>1hr</p>
                   </div>
                   <div className='h5 hour'>
                    <p>1hr</p>
                   </div>
                   <div className='h6 hour'>
                    <p>1hr</p>
                   </div>
                   
                </div>


            </div>
          </div>
        </div>
    )

}
export default Mainpage