import "./App.css";import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Error from "./Components/Error/Error";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Login from './Components/Login/Login';

import ServiceDetails from './Components/ServiceDetails/ServiceDetails/ServiceDetails';

import AuthProvider from "./Context/AuthProvider";

import Home from "./Components/Home/Home";

import Footer from './Components/Footer/Footer';
import Header from "./Components/Header/Header";
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


function App() {
 
  return (
    <div className="App">
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
         

          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/ServiceDetails/:id">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>




          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  </div>
  );
}

export default App;
