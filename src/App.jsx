import Login from "./Components/Auth/Login"
import Signup from "./Components/Auth/Signup"
import Dashboard from "./Components/Dashboard"
import { HashRouter, Routes, Route,Link } from "react-router-dom"
const App = () => {
  return (
    <HashRouter>
      <Routes>
         <Route path= "/Login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </HashRouter>
  
  )
}

export default App