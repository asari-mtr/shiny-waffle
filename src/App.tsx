import React from 'react';
import './App.css';
import NamePlate from './NamePlate';
import Devices from './Devices';
import Appliances from './Appliances';
import Events from './Events';

const namePlateData = {
  uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  name: "sample remo"
}

const appliance_list = [
  {
    state: "t",
    nick_name: 'テレビ',
    type: 'TV',
    model: 'Sharp',
    manufacture: 'sharp',
    country: 'JA',
  },
  {
    state: "t",
    nick_name: 'テレビ',
    type: 'TV',
    model: 'Sharp',
    manufacture: 'sharp',
    country: 'US',
  },
  {
    state: "t",
    nick_name: 'テレビ',
    type: 'TV',
    model: 'Sharp',
    manufacture: 'sharp',
    country: 'CN',
  }
];

const device_list = [
  {
    name: "Remo mini",
    mac: "cc-12-2a-46-0c-39",
    serial: "00000000000001",
    firmware: "202.200000001",
    create: new Date()
  },
  {
    name: "Remo mini",
    mac: "cc-12-2a-46-0c-39",
    serial: "00000000000001",
    firmware: "202.200000001",
    create: new Date()
  },
  {
    name: "Remo mini",
    mac: "cc-12-2a-46-0c-39",
    serial: "00000000000001",
    firmware: "202.200000001",
    create: new Date()
  },
]

const event_list = [
  {
    type: "te",
    value: "25.7",
    created: new Date()
  },
  {
    type: "te",
    value: "25.7",
    created: new Date()
  },
  {
    type: "te",
    value: "25.7",
    created: new Date()
  },
  {
    type: "te",
    value: "25.7",
    created: new Date()
  },
]

function App() {
  return (
    <div className="App">
      <NamePlate data={namePlateData}/>
      <Devices data={device_list}/>
      <Appliances data={appliance_list}/>
      <Events data={event_list}/>
    </div>
  );
}

export default App;
