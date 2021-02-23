// import {Route} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
// adding css to jsx is that easy
import './App.css'; // This pattern is preferred where css for this component has a matching .css filename

// A component import
import Splash from './components/Splash'

// Defining our <App /> component the function name matches the file name
function App() {

  return ( 
    <div className="App">
      <Splash />
    </div>
  );
}

// Makes our Component available for import
export default App;