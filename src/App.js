import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap'
import Menu from './components/MenuComponent'
import './App.css';
import { DISHES } from './shared/dishes'
//import { render } from 'react-dom';


class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES
    };
  }
  render(){
    return (
      <div>
        <Navbar className="navbar-custom">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}
// function App() {
  
// }

export default App;
