import mainimage from './sky2.JPG'
import {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Days=()=>{
    const [show, setshow]= useState()
    const [d1a, setd1a]= useState([])
    const [d1b, setd1b]= useState([])
    const [d2a, setd2a]= useState([])
    const [d2b, setd2b]= useState([])
    const [d3a, setd3a]= useState([])
    const [d3b, setd3b]= useState([])
    const [d4a, setd4a]= useState([])
    const [d4b, setd4b]= useState([])
    const [d5a, setd5a]= useState([])
    const [d5b, setd5b]= useState([])
    const [d6a, setd6a]= useState([])
    const [d6b, setd6b]= useState([])
    const [d7a, setd7a]= useState([])
    const [d7b, setd7b]= useState([])
    const [current, setcurrent]= useState({})
    const [condition, setcondition]= useState({})
    



    useEffect(()=>{
    axios.get('http://api.weatherapi.com/v1/forecast.json?key=a527df41ad06453fbfe71051212601&q=Lagos&days=9&aqi=no&alerts=no')
    .then(response=>{
      setcurrent(response.data.location)
      setcondition(response.data.current.condition)
      setd1a(response.data.forecast.forecastday[0].day)
      setd1b(response.data.forecast.forecastday[0].day.condition)
      setd2a(response.data.forecast.forecastday[1].day)
      setd2b(response.data.forecast.forecastday[1].day.condition)
      setd3a(response.data.forecast.forecastday[2].day)
      setd3b(response.data.forecast.forecastday[2].day.condition)
      setd4a(response.data.forecast.forecastday[2].hour[5])
      setd4b(response.data.forecast.forecastday[2].hour[5].condition)
      setd5a(response.data.forecast.forecastday[2].hour[8])
      setd5b(response.data.forecast.forecastday[2].hour[8].condition)
      setd6a(response.data.forecast.forecastday[0].hour[6])
      setd6b(response.data.forecast.forecastday[1].hour[6].condition)
      setd7a(response.data.forecast.forecastday[1].hour[3])
      setd7b(response.data.forecast.forecastday[1].hour[3].condition)
     
      console.log(response.data.forecast.forecastday[2].hour[6])
    })
    }, [])

    function Good(event){
      let searchparam= event.target.value
      axios.get(`http://api.weatherapi.com/v1/forecast.json?key=a527df41ad06453fbfe71051212601&q=${searchparam}&days=7&aqi=no&alerts=no`)
       .then(response=>{
         setcurrent(response.data.location)
         setcondition(response.data.current.condition)
         setd1a(response.data.forecast.forecastday[0].day)
      setd1b(response.data.forecast.forecastday[0].day.condition)
      setd2a(response.data.forecast.forecastday[1].day)
      setd2b(response.data.forecast.forecastday[1].day.condition)
      setd3a(response.data.forecast.forecastday[2].day)
      setd3b(response.data.forecast.forecastday[2].day.condition)
      setd4a(response.data.forecast.forecastday[2].hour[5])
      setd4b(response.data.forecast.forecastday[2].hour[5].condition)
      setd5a(response.data.forecast.forecastday[2].hour[8])
      setd5b(response.data.forecast.forecastday[2].hour[8].condition)
      setd6a(response.data.forecast.forecastday[0].hour[6])
      setd6b(response.data.forecast.forecastday[1].hour[6].condition)
      setd7a(response.data.forecast.forecastday[1].hour[3])
      setd7b(response.data.forecast.forecastday[1].hour[3].condition)
         console.log(response.data)
       })
        
        }
let navigate= useNavigate()
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
           
            <div className='part1' >
            <h2 className='curr'>7 day Forecast</h2> 
                <div className='search'>
                    <input type={'text'} className='sinput' placeholder='Search City...' onChange={Good} />
                    <p className='submit'>Submit</p>
                </div>
                <div>
                    <div className='fullloc'>
                    <h1 className='location'>{current.name} </h1> 
                    <p className='sublocation'> {current.country} </p> <br />
                    </div>
                <p className='tnd'>{current.localtime}</p>
                <img src={condition.icon} className='currhicon' alt='lol' />
                <p className='cond'>{condition.text} </p>
                </div>
                

              
          
         

<div className='detailscontainers'>

<h2>7day Forecast</h2>
   <div className='first'>
     <div className='day1 d'>
        <b>Mon </b>
       <img src={d1b.icon} alt='lol' className='dicon' />
       <p className='t1'>{d1a.avgtemp_c} <sup>o</sup>C</p>
        <p className='tx1'>{d1b.text}</p>
     </div>
     <div className='day2 d'>
        <b>Tues </b>
        <img src={d2b.icon} alt='lol' className='dicon' />
       <p className='t1'>{d2a.avgtemp_c} <sup>o</sup>C</p>
        <p className='tx1'>{d2b.text}</p>
     </div>
     <div className='day3 d'>
        <b>Wed </b>
        <img src={d3b.icon} alt='lol' className='dicon' />
       <p className='t1'>{d3a.avgtemp_c} <sup>o</sup>C</p>
        <p className='tx1'>{d3b.text}</p>
     </div>
     <div className='day4 d'>
        <b>Thu </b>
        <img src={d4b.icon} alt='lol' className='dicon' />
       <p className='t1'>{d4a.temp_c} <sup>o</sup>C</p>
        <p className='tx1'>{d4b.text}</p>
     </div>
     <div className='day5 d'>
        <b>Frid </b>
        <img src={d5b.icon} alt='lol' className='dicon' />
       <p className='t1'>{d5a.temp_c} <sup>o</sup>C</p>
        <p className='tx1'>{d5b.text}</p>
     </div>
     <div className='day6 d'>
        <b>Satu </b>
        <img src={d6b.icon} alt='lol' className='dicon' />
       <p className='t1'>{d6a.temp_c} <sup>o</sup>C</p>
        <p className='tx1'>{d6b.text}</p>
     </div>
     <div className='day7 d'>
        <b>Sund </b>
        <img src={d7b.icon} alt='lol' className='dicon' />
       <p className='t1'>{d7a.temp_c} <sup>o</sup>C</p>
        <p className='tx1'>{d7b.text}</p>
       
     </div>

      
</div>



</div>
            
          </div>
        </div>
    )

}
export default Days