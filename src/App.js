// import Laptop from './views/Laptop'
import Register from './views/Register'
// import Login from './views/Login'
// import Home from './views/Home'
import Auth from './ewa/views/auth/Auth'
import './App.css'

function App() {
  return(
      <div className="container">
        {/*<Laptop name={"Apple"} color={"gold"} madeIn={"China"} buttonColor={"magenta"}/>*/}
        {/*<Laptop name={"Dell"} color={"pink"} madeIn={"Lagos"} buttonColor={"darkOrange"}/>*/}
          <Auth/>
        {/*  <Register />*/}
      </div>
  )
}

export default App