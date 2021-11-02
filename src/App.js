import "./App.css";import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Error from "./Components/Error/Error";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Login from './Components/Login/Login';



import AuthProvider from "./Context/AuthProvider";
import PrivateRouter from './Components/PrivateRoute/PrivateRouter';
import Home from "./Components/Home/Home";
import ServiceDetails from './Components/ServiceDetails/ServiceDetails/ServiceDetails';
import Footer from './Components/Footer/Footer';
import Header from "./Components/Header/Header";


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

          <Route path="/ServiceDetails/:id">
            <ServiceDetails></ServiceDetails>
          </Route>




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
