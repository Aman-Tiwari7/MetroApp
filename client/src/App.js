import "./App.css";
import React from 'react'
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import Home from "./Pages/Home";
import GetRoute from './Pages/getRoute'

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/route' element={<GetRoute/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
