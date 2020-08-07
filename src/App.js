import React from 'react';
import Inventory from './containers/Inventory'
import Header from './components/common/Header'
import Contact from './containers/Contact'
import Cart from './containers/Cart'
import Home from './containers/Home'
import Socials from './components/common/Socials'
import Footer from './components/common/Footer'
import {Switch, Route, BrowserRouter} from 'react-router-dom'

function App(){
  return(
    <div>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/shop" component={Inventory}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/cart" component={Cart}/>
        </Switch>
        <Socials/>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App;
