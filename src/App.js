import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// import './App.css';
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
    console.log(sessionToken);
  };
  //render method is down here?

  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
  };

  const PrivateRoute = ({Component, ...rest}) => (
        <Route {...rest} render={(props) => (
      sessionToken != ""
      ? <Component {...props}/>
      : <Redirect to='/auth' />
    )}/>
  )


  return (
    //wrap Navbar and protected views in Router?
    <div className="App">
      <Route>
        <Navbar clickLogout={clearToken} token={sessionToken} />
      </Route>
      <Route exact path="/" component={Home} />
      <Route path="/auth" component={() => <Auth updateToken={updateToken}/>} />
      <PrivateRoute path="/mybar" Component={() => <MyBar token={sessionToken}/>}/>
      {sessionToken && <Redirect to='/mybar'/>}
      </div>
  );
}

export default App;
