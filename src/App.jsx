import Login from "./Components/Auth/Login"
import Signup from "./Components/Auth/Signup"
import Dash from './Components/dashboard/Dash'
import Home from './Pages/Home'
import Widget from './Pages/Widget'
import About from './Pages/About'
import { HashRouter, Routes, Route,Link } from "react-router-dom"
const App = () => {
  return (
    <HashRouter>
      <Routes>
         <Route path= "/" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/dashboard/:username" element={<Dash />}>
        <Route path='' element={<Home/>} />
        <Route path='Widget' element={<Widget/>} />
        <Route path='About' element={<About/>} />
        </Route>
      </Routes>
    </HashRouter>
  
  )
}

export default App