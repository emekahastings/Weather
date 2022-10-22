import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Signin from './Pages/Signin'
import Mainpage from './Pages/Mainpage'
import Hours from './Pages/Hours'
import Days from './Pages/Days'
import Nomatch from './Pages/Nomatch'
import { Routes , Route, BrowserRouter, Outlet } from 'react-router-dom'
import Facts from './Pages/Facts'

function App() {

  return (
    <div className="App">
  <BrowserRouter>

  <Routes>
    <Route index element={<Home />} />
    <Route path='/' element={<Home />}></Route>
    <Route path='signup' element={<Signup />}></Route>
    <Route path='signin' element={<Signin />}></Route>
    <Route path='signin/mainpage' element={<Mainpage />} />  
    <Route path='signin/mainpage' element={<Mainpage />} /> 
    <Route path='signin/mainpage/hours' element={<Hours />} /> 
    <Route path='signin/mainpage/days' element={<Days />} /> 
    <Route path='signin/mainpage/facts' element={<Facts />} /> 
    <Route path='signin/mainpage/facts/hours' element={<Hours />} /> 
    <Route path='signin/mainpage/facts/days' element={<Days />} /> 
    <Route path='signin/mainpage/facts/days/hours' element={<Hours />} /> 
    <Route path='signin/mainpage/facts/hours/days' element={<Days />} /> 
    <Route path='signin/mainpage/hours/days' element={<Days />} /> 
    <Route path='signin/mainpage/hours/facts' element={<Facts />} /> 
    <Route path='signin/mainpage/hours/days/facts' element={<Facts />} /> 
    <Route path='signin/mainpage/hours/facts/days' element={<Days />} /> 
    <Route path='signin/mainpage/days/hours' element={<Hours />} /> 
    <Route path='signin/mainpage/days/facts' element={<Facts />} /> 
    <Route path='signin/mainpage/days/hours/facts' element={<Facts />} /> 
    <Route path='signin/mainpage/days/facts/hours' element={<Hours />} /> 
    <Route path='mainpage' element={<Mainpage />} /> 
     <Route path='days' element={<Days />} />
     <Route path='hours' element={<Hours />} />
     <Route path='facts' element={<Facts />} />

     <Route path='*' element={<Nomatch />} ></Route>
    
      </Routes>
   <Outlet />
 

  </BrowserRouter>
   
    </div>
  );
}

export default App;
