import React from "react";
import { IAppliance } from 'nature-remo'

type Props = {
  data: Array<IAppliance>
}

function SmartMeters(props: Props) {
    return (
        <table>
        <thead>
          <tr>
            <th>Instantaneous</th>
          </tr>
        </thead>
        <tbody>
          {
            props.data.map((data, index) => {
              const smart_meter = data.smart_meter;
              if (!smart_meter) {
                return undefined;
              }
              const properties = smart_meter.echonetlite_properties;
              const powers = properties.filter((item) => { return item.epc === 231; });
              return powers.map((power, i) => {
                return (<tr key={index * 10 + i}><td>{Number(power.val).toFixed()} w</td></tr>);
              });
            })
          }
        </tbody>
      </table>
    );
};

export default SmartMeters;