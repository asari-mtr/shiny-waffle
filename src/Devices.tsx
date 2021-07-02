import React from 'react';

type Props = {
  data: {
    name: string,
    mac: string,
    serial: string,
    firmware: string,
    create: Date
  }[];
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
                  <td>{data.mac}</td>
                  <td>{data.serial}</td>
                  <td>{data.firmware}</td>
                  <td>{data.create.toISOString()}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    );
};

export default Devices;