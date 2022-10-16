import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Signin from './Pages/Signin'
import Mainpage from './Pages/Mainpage'
import Hours from './Pages/Hours'
import Days from './Pages/Days'
import { Routes , Route, BrowserRouter } from 'react-router-dom'
import Facts from './Pages/Facts'

function App() {

  return (
    <div className="App">
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='signup' element={<Signup />}></Route>
    <Route path='signin' element={<Signin />}></Route>
    <Route path='mainpage' element={<Mainpage />}></Route>
    <Route path='hours' element={<Hours />}></Route>
    <Route path='facts' element={<Facts />}></Route>

    <Route  path='signin'>
    <Route index element={<Signin />} />
      <Route path='mainpage' element={<Mainpage />} />
      <Route path='mainpage/hours' element={<Hours />} />
      <Route path='mainpage/hours/days' element={<Days />} />
      <Route path='mainpage/hours/facts' element={<Facts />} />
    <Route path='days' element={<Days />} />

    </Route>


    <Route path='/mainpage'>
    <Route index element={<Mainpage />} />
    <Route path='hours' element={<Hours />} />
    <Route path='facts' element={<Facts />} />
    <Route path='days' element={<Days />} />
    <Route path='hours/days' element={<Days />} />
    <Route path='hours/facts/days' element={<Days />} />
    <Route path='hours/days/facts' element={<Facts />} />
    <Route path='facts/hours' element={<Hours />} />
    <Route path='facts/hours/days' element={<Days />} />
    <Route path='days/hours' element={<Hours />} />
    <Route path='days/facts' element={<Facts />} />
    <Route path='days/facts/hours' element={<Hours />} />
    <Route path='days/hours/facts' element={<Facts />} />
    </Route>


    {/* <Route path='hours/mainpage' element={<Mainpage />}></Route>
    <Route path='hours/days' element={<Days />}></Route>
    <Route path='mainpage/hours' element={<Hours />}></Route>
    <Route path='mainpage/hours/days' element={<Days />}></Route>
    <Route path='mainpage/days' element={<Days />}></Route> */}
   
    </Routes>

  </BrowserRouter>
   
    </div>
  );
}

export default App;
