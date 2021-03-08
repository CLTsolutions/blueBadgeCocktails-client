import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import Auth from "../src/auth/Auth";
import Home from "./components/site/Home";
import MyBar from "./components/profile/MyBar";
import Navbar from "./components/site/Navbar";
// import Footer from './components/site/Footer'

function App() {
  const [sessionToken, setSessionToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    // console.log(sessionToken);
  };

  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
  };
  
  return (
    <div className="App">
      {sessionToken ? (
      <Navbar clickLogout={clearToken} token={sessionToken} />
      ) : ( null
      )}
      <Route exact path="/home" component={() => <Home token={sessionToken}/>} />
      <Route exact path="/mybar" component={() => <MyBar token={sessionToken} />} />
      <Route exact path="/auth" component={() => <Auth updateToken={updateToken}/>} />
  
      {sessionToken ? <Redirect to='/home' /> : <Redirect to='/auth'/>} 
      
    </div>
  );
}

export default App;
