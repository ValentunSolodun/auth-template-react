import {Route} from 'react-router-dom';
import React from "react";
import Login from "../components/login";
import Register from "../components/register";
import Home from "../components/Home";


const Routing = () => {
  return (
    <div className="container">
      <Route path='/' exact component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
    </div>
  )
}

export default Routing;