import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap'
import Menu from './components/MenuComponent'
import './App.css';
//import { render } from 'react-dom';


class App extends React.Component {
  render(){
    return (
      <div>
        <Navbar className="navbar-custom">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu />
      </div>
    );
  }
}
// function App() {
  
// }

export default App;
