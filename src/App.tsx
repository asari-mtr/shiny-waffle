import React from 'react';
import './App.css';
import NamePlate from './NamePlate';
import Devices from './Devices';
import Appliances from './Appliances';
import Events from './Events';

function App() {
  return (
    <div className="App">
      <NamePlate/>
      <Devices/>
      <Appliances/>
      <Events/>
    </div>
  );
}

export default App;
