import React, { useState, useEffect } from 'react';
import './App.css';
import NamePlate from './NamePlate';
import Devices from './Devices';
import Appliances from './Appliances';
import Events from './Events';
import * as NatureRemo from 'nature-remo';
import { IAppliance, IDeviceWithEvents } from 'nature-remo';
import SmartMeters from './SmartMeters';

declare module "nature-remo" {
  interface IDevice {
    mac_address: string;
    serial_number: string;
  }

  interface IAppliance {
    series?: string;
    smart_meter: ISmartMeter;
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
  }
}

const namePlateData = {
  uuid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  name: "sample remo"
}

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
  const [devices, setDevices]       = useState<Array<IDeviceWithEvents>>([]);
  const [appliances, setAppliances] = useState<Array<IAppliance>>([]);
  const [smartMeters, setSmartMeters] = useState<Array<IAppliance>>([]);

  useEffect(() => {
    const client = new NatureRemo.Cloud(process.env.REACT_APP_NATURE_REMO_CLOUD_API_TOKEN);
    (async () => {
    client.getDevices().then((d) => {
      setDevices(d);
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

  return (
    <div className="App">
      <NamePlate data={namePlateData}/>
      <Devices data={devices}/>
      <Appliances data={appliances}/>
      <SmartMeters data={smartMeters}/>
      <Events data={event_list}/>
    </div>
  );
}

export default App;
