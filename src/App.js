// import {Route} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { 
  Route, 
  Switch
} from 'react-router-dom';
// adding css to jsx is that easy
import './App.css'; // This pattern is preferred where css for this component has a matching .css filename
import Auth from '../src/auth/Auth';
import Home from './components/site/Home'
import MyBar from './components/profile/MyBar';
import Navbar from './components/site/Navbar'

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
  return sessionToken === localStorage.getItem('token') ? <MyBar token={sessionToken} /> : <Auth updateToken={updateToken} />
}

  return ( 
    <div className="App">
      <Navbar clickLogout={clearToken} />
          <Switch>
            <Route exact path='/'><Home /></Route>
            {protectedViews()}
          </Switch>
    </div>
  );
}

// Makes our Component available for import
export default App;