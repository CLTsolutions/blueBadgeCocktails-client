// import {Route} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
// adding css to jsx is that easy
import './App.css'; // This pattern is preferred where css for this component has a matching .css filename

import Splash from './components/Splash'
import Navbar from './components/Navbar'
import Home from './components/Home'

// Defining our <App /> component the function name matches the file name
function App() {

  return ( 
    <div className="App"> {/* Parent Element. Also we can't use the word class, so we use className in jsx*/}
      {/* Navbar is our imported component*/}
      <Splash />
      <Navbar />
      <Home />
    </div>
  );
}

// Makes our Component available for import
export default App;