// import Laptop from './views/Laptop'
import Register from './views/Register'
// import Login from './views/Login'
// import Home from './views/Home'
import Auth from './ewa/views/auth/Auth'
import Dashboard from './ewa/views/dashboard/Dashboard'
import { useState } from "react"
import './App.css'
function App() {
    let value = false
    let email = ""
    try {
        email = localStorage.getItem("userEmail")
        if(email !== "" && email !== null) {
            console.log(email)
            value = true
        }
    }catch (error) {
        email = ""
        value = false
    }

    const [authenticated, setAuthenticated] = useState(value)
  return(
      <div className="container">
        {/*<Laptop name={"Apple"} color={"gold"} madeIn={"China"} buttonColor={"magenta"}/>*/}
        {/*<Laptop name={"Dell"} color={"pink"} madeIn={"Lagos"} buttonColor={"darkOrange"}/>*/}
          {authenticated ? <Dashboard /> : <Auth setAuthenticated={setAuthenticated}/>}
        {/*  <Register />*/}
      </div>
  )
}

export default App