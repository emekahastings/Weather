import mainimage from './sky2.JPG'
import {useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'

const Hours=()=>{
    const [show, setshow]= useState()
    const [zeroa, setzeroa]= useState([])
    const [zerob, setzerob]= useState([])
    const [zeroc, setzeroc]= useState([])
    const [oneb, setoneb]= useState([])
    const [onec, setonec]= useState([])
    const [twob, settwob]= useState([])
    const [twoc, settwoc]= useState([])
    const [threeb, setthreeb]= useState([])
    const [threec, setthreec]= useState([])
    const [fourb, setfourb]= useState([])
    const [fourc, setfourc]= useState([])
    const [fiveb, setfiveb]= useState([])
    const [fivec, setfivec]= useState([])
    const [sixb, setsixb]= useState([])
    const [sixc, setsixc]= useState([])
    const [sevenb, setsevenb]= useState([])
    const [sevenc, setsevenc]= useState([])
    const [eightb, seteightb]= useState([])
    const [eightc, seteightc]= useState([])
    const [nineb, setnineb]= useState([])
    const [ninec, setninec]= useState([])
    const [tenb, settenb]= useState([])
    const [tenc, settenc]= useState([])
    const [elevenb, setelevenb]= useState([])
    const [elevenc, setelevenc]= useState([])
    const [twelveb, settwelveb]= useState([])
    const [twelvec, settwelvec]= useState([])
    let navigate= useNavigate()

  useEffect(()=>{
axios.get('http://api.weatherapi.com/v1/forecast.json?key=a527df41ad06453fbfe71051212601&q=Lagos&days=1&aqi=no&alerts=no')
.then(response=>{
  setzeroa(response.data.location)
  setzerob(response.data.forecast.forecastday[0].hour[0].condition)
  setzeroc(response.data.forecast.forecastday[0].hour[0])
  setoneb(response.data.forecast.forecastday[0].hour[1].condition)
  setonec(response.data.forecast.forecastday[0].hour[1])
  settwob(response.data.forecast.forecastday[0].hour[2].condition)
  settwoc(response.data.forecast.forecastday[0].hour[2])
  setthreeb(response.data.forecast.forecastday[0].hour[3].condition)
  setthreec(response.data.forecast.forecastday[0].hour[3])
  setfourb(response.data.forecast.forecastday[0].hour[4].condition)
  setfourc(response.data.forecast.forecastday[0].hour[4])
  setfiveb(response.data.forecast.forecastday[0].hour[5].condition)
  setfivec(response.data.forecast.forecastday[0].hour[5])
  setsixb(response.data.forecast.forecastday[0].hour[6].condition)
  setsixc(response.data.forecast.forecastday[0].hour[6])
  setsevenb(response.data.forecast.forecastday[0].hour[7].condition)
  setsevenc(response.data.forecast.forecastday[0].hour[7])
  seteightb(response.data.forecast.forecastday[0].hour[8].condition)
  seteightc(response.data.forecast.forecastday[0].hour[8])
  setnineb(response.data.forecast.forecastday[0].hour[9].condition)
  setninec(response.data.forecast.forecastday[0].hour[9])
  settenb(response.data.forecast.forecastday[0].hour[10].condition)
  settenc(response.data.forecast.forecastday[0].hour[10])
  setelevenb(response.data.forecast.forecastday[0].hour[11].condition)
  setelevenc(response.data.forecast.forecastday[0].hour[11])
  settwelveb(response.data.forecast.forecastday[0].hour[12].condition)
  settwelvec(response.data.forecast.forecastday[0].hour[12])
 
  console.log(response.data)
  console.log(response.data.forecast.forecastday[0].hour[0].time)
})
  }, [])

  function Better(event){
    let searchparam= event.target.value
    axios.get(`http://api.weatherapi.com/v1/forecast.json?key=a527df41ad06453fbfe71051212601&q=${searchparam}&days=10&aqi=no&alerts=no`)
    .then(response=>{

      setzeroa(response.data.location)
      setzerob(response.data.forecast.forecastday[0].hour[0].condition)
      setzeroc(response.data.forecast.forecastday[0].hour[0])
      setoneb(response.data.forecast.forecastday[0].hour[1].condition)
      setonec(response.data.forecast.forecastday[0].hour[1])
      settwob(response.data.forecast.forecastday[0].hour[2].condition)
      settwoc(response.data.forecast.forecastday[0].hour[2])
      setthreeb(response.data.forecast.forecastday[0].hour[3].condition)
      setthreec(response.data.forecast.forecastday[0].hour[3])
      setfourb(response.data.forecast.forecastday[0].hour[4].condition)
      setfourc(response.data.forecast.forecastday[0].hour[4])
      setfiveb(response.data.forecast.forecastday[0].hour[5].condition)
      setfivec(response.data.forecast.forecastday[0].hour[5])
      setsixb(response.data.forecast.forecastday[0].hour[6].condition)
      setsixc(response.data.forecast.forecastday[0].hour[6])
      setsevenb(response.data.forecast.forecastday[0].hour[7].condition)
      setsevenc(response.data.forecast.forecastday[0].hour[7])
      seteightb(response.data.forecast.forecastday[0].hour[8].condition)
      seteightc(response.data.forecast.forecastday[0].hour[8])
      setnineb(response.data.forecast.forecastday[0].hour[9].condition)
      setninec(response.data.forecast.forecastday[0].hour[9])
      settenb(response.data.forecast.forecastday[0].hour[10].condition)
      settenc(response.data.forecast.forecastday[0].hour[10])
      setelevenb(response.data.forecast.forecastday[0].hour[11].condition)
      setelevenc(response.data.forecast.forecastday[0].hour[11])
      settwelveb(response.data.forecast.forecastday[0].hour[12].condition)
      settwelvec(response.data.forecast.forecastday[0].hour[12])
     
      console.log(response.data)
      console.log(response.data.location)

    })
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
            <div className='part1' >
            <h2 className='curr'>Current Weather</h2> 
                <div className='search'>
                    <input type={'text'} className='sinput' placeholder='Search City...'  onChange={Better}/>
                    <p className='submit'>Submit</p>
                </div>
                <h1 className='location'>{zeroa.name}</h1> <h4 className='sublocation'>{zeroa.country}</h4> <br />
                <div>
                <p className='tnd'>{zeroc.time}</p>          
                </div>
                <div className='group'>
              <img src={zerob.icon} alt='lol' className='currhicon' />
              <p className='condit'>{zerob.text} </p>
              <h1 className='tnd'>{zeroc.temp_c}<sup className='o'>o</sup>C</h1>  
              </div>

                <div className='detailscontainerh'>
               <div className='dc3'>

                 <div className='h h1'>
                  <div className='h1cont'>
                       <b>01:00</b> <br />
                 <img src={oneb.icon} className='hicon' alt='lol' /> <br /> 
                 <b>{oneb.text}</b> <br />
                 <b>{onec.temp_c} <sup className='o'>o</sup>C</b> <br />
                
                       </div>

                
                
               
                 </div>
                
                 <div className='h h2'>
                 <b>02:00</b> <br /> 
                 <img src={twob.icon} className='hicon' alt='lol' /> <br /> 
                 <b>{twob.text}</b> <br />
                 <b>{twoc.temp_c} <sup className='o'>o</sup>C</b> <br />
                 </div>

                 <div className='h h3'>
                 <b>03:00</b> <br />
                 <img src={threeb.icon} className='hicon' alt='lol' /> <br /> 
                 <b>{threeb.text}</b> <br />
                 <b>{threec.temp_c} <sup className='o'>o</sup>C</b> <br />
                 </div>
                 </div>

                 <div className='dc4'>
                 <div className='h h4'>
                 <b>04:00</b> <br />
                 <img src={fourb.icon} className='hicon' alt='lol' /> <br /> 
                 <b>{fourb.text}</b> <br />
                 <b>{fourc.temp_c} <sup className='o'>o</sup>C</b> <br />
                 </div>
                 <div className='h h5'>
                 <b>05:00</b> <br />
                 <img src={fiveb.icon} className='hicon' alt='lol' /> <br /> 
                 <b>{fiveb.text}</b> <br />
                 <b>{fivec.temp_c} <sup className='o'>o</sup>C</b> <br />
                 </div>
                 <div className='h h6'>
                 <b>06:00</b> <br />
                 <img src={sixb.icon} className='hicon' alt='lol' /> <br /> 
                 <b>{sixb.text}</b> <br />
                 <b>{sixc.temp_c} <sup className='o'>o</sup>C </b> <br />
                 </div>
               </div>
               <div className='dc3'>
                 <div className='h h7'>
                 <b>07:00</b> <br />
                 <img src={sixb.icon} className='hicon' alt='lol' /> <br /> 
                 <b>{sevenb.text}</b> <br />
                 <b>{sevenc.temp_c} <sup className='o'>o</sup>C</b> <br />
                 </div>
                 <div className='h h8'>
                 <b>08:00</b> <br />
                 <img src={sixb.icon} className='hicon' alt='lol' /> <br /> 
                 <b>{eightb.text}</b> <br />
                 <b>{eightc.temp_c} <sup className='o'>o</sup>C</b> <br />
                 </div>
                 <div className='h h9'>
                 <b>09:00</b> <br />
                 <img src={sixb.icon} className='hicon' alt='lol' /> <br /> 
                 <b>{nineb.text}</b> <br />
                 <b>{ninec.temp_c} <sup className='o'>o</sup>C</b> <br />
                 </div>
               </div>
               <div className='dc4'>
                 <div className='h h10'>
                 <b>10:00</b> <br />
                 <img src={sixb.icon} className='hicon' alt='lol' /> <br /> 
                 <b>{tenb.text}</b> <br />
                 <b>{tenc.temp_c} <sup className='o'>o</sup>C</b> <br />
                </div>
                 <div className='h h11'>
                 <b>11:00</b> <br />
                 <img src={sixb.icon} className='hicon' alt='lol' /> <br /> 
                 <b>{elevenb.text}</b> <br />
                 <b>{elevenc.temp_c} <sup className='o'>o</sup>C</b> <br />
                 </div>
                 <div className='h h12'>
                 <b>12:00</b> <br />
                 <img src={sixb.icon} className='hicon' alt='lol' /> <br /> 
                 <b>{twelveb.text}</b> <br />
                 <b>{twelvec.temp_c} <sup className='o'>o</sup>C</b> <br />
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
                    <p> Weather </p>
                    <p> Temp</p>
                    <p> Wind dir </p>
                    <p> Humidity</p>
                       </div>
                     </div>
                       <div className='d2 day'>
                       <p> Day2</p>
                       <div>
                    <p> Weather </p>
                    <p> Temp</p>
                    <p> Wind dir </p>
                    <p> Humidity</p>
                       </div>
                        </div>
                        <div className='d3 day'>
                        <p> Day3</p>
                        <div>
                    <p> Weather </p>
                    <p> Temp</p>
                    <p> Wind dir </p>
                    <p> Humidity</p>
                       </div>
                        </div>
                        <div className='d4 day'>
                        <p> Day4</p>
                        <div>
                    <p> Weather </p>
                    <p> Temp</p>
                    <p> Wind dir </p>
                    <p> Humidity</p>
                       </div>
                        </div>
                        </div>
                        <div className='second'>
                        <div className='d5 day'>
                        <p> Day5</p>
                        <div>
                    
                    <p> Weather </p>
                    <p> Temp</p>
                    <p> Wind dir </p>
                    <p> Humidity</p>
                       </div>
                        </div>
                        <div className='d6 day'>
                        <p> Day6</p>
                        <div>
                 
                    <p> Weather </p>
                    <p> Temp</p>
                    <p> Wind dir </p>
                    <p> Humidity</p>
                       </div>
                        </div>
                        <div className='d7 day'>
                        <p> Day7</p>
                        <div>
                    <p> Weather </p>
                    <p> Temp</p>
                    <p> Wind dir </p>
                    <p> Humidity</p>
                       </div>
                        </div>
                        <div className='d8 day'>
                        <p> Day8</p>
                        <div>
                    <p> Weather </p>
                    <p> Temp</p>
                    <p> Wind dir </p>
                    <p> Humidity</p>
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


            </div>
          </div>
        </div>
    )

}
export default Hours