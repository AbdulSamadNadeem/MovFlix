import React from "react";
import Home from './Pages/Home';
import { Route, Routes } from "react-router";
import ActionPage from './Pages/Action.jsx'

const App = () => {

  
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/actionmovies" element={<ActionPage/>}></Route>
    </Routes>
    </>
  )
}

export default App
