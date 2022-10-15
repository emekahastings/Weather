import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons"
const Facts=()=>{

    let navigate= useNavigate()
  const [show, setshow]= useState()
    return(
        <div className=''>
                   <div className='mobilenavcont'>
        <FontAwesomeIcon icon={faBarsStaggered}  className='hams'  onClick={()=>setshow(!show)}/>
         {
           show? <div className='sidemenu'>
            <p onClick={()=>navigate('./mainpage')}>Home</p>
            <p onClick={()=>navigate('./hours')}>Hourly Forecast</p>
            <p onClick={()=>navigate('./days')}>7days Forecast</p> 
            <p>Did you know</p>
         </div>:null
         
}
      </div>
      <div className="words">
        <h2>WEATHER FACTS</h2>
        <p className="factos" >The weather stil remains a mystery to many, the facts and ideologies surrounding with are endless. <br/> 
          However we have 35 facts that would blow your mind away
          <div> <br /> <br />
            <ol>
           <li> <h3 className="factno"> Fact 1</h3> 
           <p className="ffacts"> 
            Weather affects the migration patterns of both humans and animals. For example, the greatest wild beast migration occurs in July and September. Zebras, gazelles and other wild beasts migrate looking for fresh grazing

           </p>
           </li>
           <li> <h3 className="factno"> Fact 2</h3>
           <p className="ffacts"> 
      Lightening has about 6 million strikes everyday. Shocking right? The perfect place to see lightening stikes is the Lake Maracaibo in Venezuela, where there is an 80% chance of experiencing nocturnal thunderstorm

           </p>
            </li>

            <li> <h3 className="factno"> Fact 3</h3>
           <p className="ffacts"> 
        The wettest place on earth is Mawsynram, Meghalaya, India and the driest place on earth is Antofagasta in Chile. The city receives less than 0.1mm of rainfall every year
      
           </p>
            </li>

            <li> <h3 className="factno"> Fact 4</h3>
           <p className="ffacts"> 
       At the time lightening strikes, Lightening is hotter than the sun. It is an electrostatic discharge of ionized air and as it finds its way to earth it releases a massive bolt of electricity
      
           </p>
            </li>
            <li> <h3 className="factno"> Fact 5</h3>
           <p className="ffacts"> 
         Worms wriggle up to the surface of the earth before a flood so they can get oxygen when the soil is flooded so they can breathe properly
      
           </p>
            </li>

            <li> <h3 className="factno"> Fact 6</h3>
           <p className="ffacts"> 
       Lightening strikes the same place, its as though lightening has a highway it follows. It strikes the same place especially if that place is tall, pointed, isolated object. The Empire state building for instance gets struck by lightening 23 times every year
      
           </p>
            </li>
            <li> <h3 className="factno"> Fact 7</h3>
           <p className="ffacts"> 
      The hottest temperature was recorded in Greenland ranch in Death valley, California in July10, 1913 while the coldest temperature was recorded in Vostok, Antartica on July 21 1983
      
           </p>
            </li>
            <li> <h3 className="factno"> Fact 8</h3>
           <p className="ffacts"> 
      Lightening can occur as aresult of forest fires. They release colt of electricity that can mix with atmospheric carbon and smoke
      
           </p>
            </li>
            <li> <h3 className="factno"> Fact 9</h3>
           <p className="ffacts"> 
     Between July and Sepember 2001, it was recorded to have rained blood in Kerala, a southern indian state. Well it was not actual blood but red rain
      
           </p>
            </li>
            <li> <h3 className="factno"> Fact 10</h3>
           <p className="ffacts"> 
   Hurricane Irma is the longest lasting hurricane ever recorded. It happened in Sepember 2017 in Cuba, Bahamas and in Florida. It lasted for 37 hours and maintained its intensity
      
           </p>
            </li>
            </ol>
           
          </div>
         </p>
      </div>
        </div>
    )
}
export default Facts