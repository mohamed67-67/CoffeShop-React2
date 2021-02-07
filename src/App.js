import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/main.css';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Mainpage from './components/Mainpage';
import Menu from './components/Menu';
import AboutUsPage from './components/AboutUsPage'




function App() {
 
 
  
  
  return (
    <div >
      <Router>
        <NavBar/>
            <Switch>
              <Route path='/' exact> <Mainpage/> </Route>
              <Route path='/menu' > <Menu/> </Route>
              <Route path='/about'>  <AboutUsPage/> </Route>
            </Switch>
        <Footer/>
      </Router>
    </div>
  );
  
}

export default App;
