import React, { Component } from 'react';

import './App.css';
import PaletteContainer from "./containers/PaletteContainer";
import CounterContainer from "./containers/CounterContainer";
import WaitingListContainer from "./containers/WaitingListContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Palette selected="red" />*/}
        <PaletteContainer />
        {/*<Counter value={0} color="red" />*/}
        <CounterContainer/>
        <WaitingListContainer />
      </div>
    );
  }
}

export default App;
