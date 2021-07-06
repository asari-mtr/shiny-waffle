import React, { useState, useEffect } from 'react';
import './App.css';
import NamePlate from './NamePlate';
import Devices from './Devices';
import Appliances from './Appliances';
import Events from './Events';
import * as NatureRemo from 'nature-remo';
import { IAppliance, IDeviceWithEvents, IUser } from 'nature-remo';
import SmartMeters from './SmartMeters';

declare module "nature-remo" {
  interface IDevice {
    mac_address: string;
    serial_number: string;
  }

  interface IAppliance {
    smart_meter?: ISmartMeter;
  }

  interface ISmartMeter {
    echonetlite_properties: IEchonetliteProperties[];
  }

  interface IEchonetliteProperties {
    name: string;
    epc: number;
    val: string;
    updated_at: Date;
  }

  interface IModel {
    country?: string
    series?: string;
  }
}

function App() {
  const [devices, setDevices]       = useState<Array<IDeviceWithEvents>>([]);
  const [appliances, setAppliances] = useState<Array<IAppliance>>([]);
  const [smartMeters, setSmartMeters] = useState<Array<IAppliance>>([]);
  const [events, setEvents] = useState<Array<IDeviceWithEvents>>([]);
  const [user, setUser] = useState<IUser>({ id: '', nickname: '' });

  useEffect(() => {
    const client = new NatureRemo.Cloud(process.env.REACT_APP_NATURE_REMO_CLOUD_API_TOKEN);
    (async () => {
    client.getDevices().then((d) => {
      setDevices(d);
      setEvents(d);
    })
    })();
  }, [])

  useEffect(() => {
    const client = new NatureRemo.Cloud(process.env.REACT_APP_NATURE_REMO_CLOUD_API_TOKEN);
    (async () => {
    client.getAppliances().then((a) => {
      console.log(a);
      setAppliances(a);
      setSmartMeters(a.filter((item) => { return item.hasOwnProperty("smart_meter"); }));
    })
    })();
  }, [])

  useEffect(() => {
    const client = new NatureRemo.Cloud(process.env.REACT_APP_NATURE_REMO_CLOUD_API_TOKEN);
    (async () => {
    client.getUser().then((a) => {
      setUser(a);
    })
    })();
  }, [])

  return (
    <div className="App">
      <NamePlate data={user}/>
      <Devices data={devices}/>
      <Appliances data={appliances}/>
      <SmartMeters data={smartMeters}/>
      <Events data={events}/>
    </div>
  );
}

export default App;
