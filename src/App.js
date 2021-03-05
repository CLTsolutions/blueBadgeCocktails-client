import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
// import './App.css';
import Auth from '../src/auth/Auth';
import Home from './components/site/Home'
import MyBar from './components/profile/MyBar';
import Navbar from './components/site/Navbar'
// import Footer from './components/site/Footer'

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

  return ( //wrap Navbar and protected views in Router?
    <div className="App">
      <Navbar clickLogout={clearToken} />
          <Switch>
            <Route exact path='/'><Home /></Route>
            {protectedViews()}
          </Switch>
        {/* <Footer /> */}
    </div>
  );
}

export default App;