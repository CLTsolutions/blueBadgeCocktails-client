// import {Route} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
// adding css to jsx is that easy
import './App.css'; // This pattern is preferred where css for this component has a matching .css filename
import Home from './components/site/Home'
import MyBar from './components/profile/MyBar';
import Navbar from './components/site/Navbar'
import Splash from './components/splash/Splash';

// Defining our <App /> component the function name matches the file name
function App() {
const [sessionToken, setSessionToken] = useState('');

useEffect(() => {
  if (localStorage.getItem('token')){
    setSessionToken(localStorage.getItem('token'));
  }
}, [])

const updateToken = (newToken) => {
  localStorage.setItem('token', newToken);
  setSessionToken(newToken);
  console.log(sessionToken);
}
//render method is down here?

const clearToken = () => {
  localStorage.clear();
  setSessionToken('');
}

const protectedViews = () => {
  return sessionToken === localStorage.getItem('token') ? <Home token={sessionToken} /> : <Splash updateToken={updateToken} />
}

  return ( 
    <div className="App"> {/* Parent Element. Also we can't use the word class, so we use className in jsx*/}
      {/* Navbar is our imported component*/}
      <Navbar clickLogout={clearToken} />
      {protectedViews()}
      {/* <SearchCards /> */}
      {/* <Home /> */}
      {/* <Switch> */}
          <Route exact path='/'><Home /></Route>
          <Route exact path='/mybar'><MyBar /></Route>
      {/* </Switch> */}
    </div>
  );
}

// Makes our Component available for import
export default App;