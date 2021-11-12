import Laptop from './views/Laptop'
import './App.css'

function App() {
  return(
      <div className="container">
        <Laptop name={"Apple"} color={"gold"} madeIn={"China"} buttonColor={"magenta"}/>
        <Laptop name={"Dell"} color={"pink"} madeIn={"Lagos"} buttonColor={"darkOrange"}/>
      </div>
  )
}

export default App