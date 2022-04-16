// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import {Switch} from "react"

// mengimport screen
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';
import { useState } from 'react';

// import components
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';



function App() {
  // logik untuk sidedrawernya menggunakan usestate
  const [sideToggle, setSideToggle] = useState(false);

  return (
  <Router>
  <main>
    <Navbar click={() => setSideToggle(true)}/>
    <SideDrawer show={sideToggle} click={() => setSideToggle(false)}/>
    <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
    
    <Switch>
         <Route path="/" component= {HomeScreen} />
         <Route path="/product/:id" component= {ProductScreen} />
         <Route path="/cart" component= {CartScreen} />
    </Switch>     
    </main>
  </Router> 
  
  );
};

export default App;
