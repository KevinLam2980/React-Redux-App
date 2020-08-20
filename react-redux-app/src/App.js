import React from 'react';
import Cocktails from './components/cocktails'
import Drink from './components/drinkPage'
import {Route} from 'react-router-dom' 
import NavBar from './components/navBar'
import Footer from './components/footerBar'


import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path='/' component={Cocktails}/>
      <Route exact path='/drink/:drinkID' component={Drink}/>
      <Footer />
    </div>
  );
}

export default App;
