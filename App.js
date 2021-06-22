
import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet'
import Welcome from './component/Welcome'
import Counter from './component/Counter'


class App extends Component{
  render(){
    return(
      <div className='App'>
        <Counter/>
        <Greet/>
       <Welcome/>
      </div>
    );
  }
}

export default App;
