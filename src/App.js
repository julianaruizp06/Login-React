import React from 'react';
import{BrowserRouter, Routes, Route}from 'react-router-dom';

import {Login} from './components/Login'
import { Menu } from './components/Menu';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>}/> 
         
          <Route path="/Menu" component={Menu} />       

        </Routes>
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;
