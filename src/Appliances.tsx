import React from "react";
import { IAppliance } from 'nature-remo'

type Props = {
  data: Array<IAppliance>
}

function Appliances(props: Props) {
    return (
        <table>
        <thead>
          <tr>
            <th>Device</th>
            <th>State</th>
            <th>NickName</th>
            <th>Type</th>
            <th>Model</th>
            <th>Manufacture</th>
            <th>Countory</th>
          </tr>
        </thead>
        <tbody>
          {
            props.data.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data.device.name}</td>
                  <td>{data.tv?.state.input || data.light?.state?.power || data.settings?.button}</td>
                  <td>{data.nickname}</td>
                  <td>{data.type}</td>
                  <td>{data.model?.name}</td>
                  <td>{data.model?.manufacturer}</td>
                  <td>{data.model?.country}</td>
                </tr>
                )
            })
          }
        </tbody>
      </table>
    );
};

export default Appliances;