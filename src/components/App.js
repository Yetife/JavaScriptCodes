import React from "react";
import CountButton from "./CountButton/CountButton"
import SearchBar from "./SearchBar/SearchBar"

const App = () => {
  return(
    <div>
        <CountButton incrementBy={1} buttonColor={"blue"} />
        <CountButton incrementBy={5} buttonColor={"red"}/>
        <CountButton incrementBy={7} buttonColor={"green"}/>
    </div>
  )
    return <div>
        <SearchBar />
    </div>
}

export default App