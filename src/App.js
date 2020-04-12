import React, { Component } from 'react';
import Counter from './components/Counter';
import DecreaseCounter from './components/DecreaseCounter'; 
import IncreaseCounter from './components/IncreaseCounter';
import IncreaseTwoCounter from './components/IncreaseTwoCounter';


class App extends Component {
  render(){
    return (
      <div>
          <Counter/>
          <IncreaseCounter/>
          <DecreaseCounter/>
          <IncreaseTwoCounter/>
      </div>
    );
  }
  
}

export default App;
