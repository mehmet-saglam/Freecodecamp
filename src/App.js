import "./App.css"
import React from 'react'
import Login from "./Components/Login/Login"
import Counter  from "./Components/Counter/CounterReducer"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"


function App () {
 
  return (
    <>
     <Router>
      <Routes>
        < Route exact path="" element={<Login />} />
        < Route exact path="counter" element= { <Counter />}/>
      </Routes>
     </Router> 
    </>
  )
  
}

export default App
