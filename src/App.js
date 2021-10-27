import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import React, { createContext, useState,useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Error from "./Components/Error/Error";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Login from './Components/Login/Login';
import Register from "./Components/Register/Register";
export const userContext = createContext();
function App() {
  const [user, setUser] = useState({});
  useEffect(()=>{
    fetch("../public/data.json")
    .then(res=>res.json()
    .then(data=>setUser(data))
    )
  },[])
  return (
    <div className="App">
      <header className="App-header">
      <userContext.Provider value={[user, setUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
               <Register></Register>
            </Route>
            {/* <Route path="/details/:teamId">
              <Details></Details>
            </Route> */}
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
        </Router>
      </userContext.Provider>
      </header>
    </div>
  );
}

export default App;
