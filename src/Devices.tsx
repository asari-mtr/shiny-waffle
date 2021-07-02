import React from 'react';
import { IDeviceWithEvents } from 'nature-remo'

type Props = {
  data: Array<IDeviceWithEvents>
}
function Devices(props: Props) {
    return(
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mac</th>
            <th>Seriral</th>
            <th>Firmware</th>
            <th>Create</th>
          </tr>
        </thead>
        <tbody>
          {
            props.data.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.mac_address}</td>
                  <td>{data.serial_number}</td>
                  <td>{data.firmware_version}</td>
                  <td>{data.created_at.toString()}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    );
};

export default Devices;