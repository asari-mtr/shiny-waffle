import React, { useState, useEffect } from 'react';
import './App.css';
import NamePlate from './NamePlate';
import Devices from './Devices';
import Appliances from './Appliances';
import Events from './Events';
import * as NatureRemo from 'nature-remo';
import { IDeviceWithEvents } from 'nature-remo';

declare module "nature-remo" {
  interface IDevice {
    mac_address: string
    serial_number: string
  }
}

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
  const [devices, setDevices] = useState<Array<IDeviceWithEvents>>([]);

  useEffect(() => {
    const client = new NatureRemo.Cloud(process.env.REACT_APP_NATURE_REMO_CLOUD_API_TOKEN);
    (async () => {
    client.getDevices().then((devices) => {
      setDevices(devices);
    })
    })();
  }, [])

  return (
    <div className="App">
      <NamePlate data={namePlateData}/>
      <Devices data={devices}/>
      <Appliances data={appliance_list}/>
      <Events data={event_list}/>
    </div>
  );
}

export default App;
