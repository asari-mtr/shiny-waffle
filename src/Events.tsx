import { IDeviceWithEvents } from 'nature-remo';
import React from 'react';

type Props = {
  data: IDeviceWithEvents[];
}

function Events(props: Props) {
    return (
        <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Device</th>
            <th>Value</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {
            props.data.map((data, index) => {
              const events = data.newest_events;
              return (
                <>
                  {
                  events.hasOwnProperty("te") && 
                    <tr key={index * 100 + 1}>
                      <td>{data.name}</td>
                      <td>temperature</td>
                      <td>{events?.te?.val}</td>
                      <td>{events?.te?.created_at.toString()}</td>
                    </tr>
                  }
                  {
                  events.hasOwnProperty("hu") &&
                    <tr key={index * 100 + 2}>
                      <td>{data.name}</td>
                      <td>humidity</td>
                      <td>{events?.hu?.val}</td>
                      <td>{events?.hu?.created_at.toString()}</td>
                    </tr>
                  }{
                  events.hasOwnProperty("il") &&
                    <tr key={index * 100 + 3}>
                      <td>{data.name}</td>
                      <td>illumination</td>
                      <td>{events?.il?.val}</td>
                      <td>{events?.il?.created_at.toString()}</td>
                    </tr>
                  }
                </>
              );
            })
          }
        </tbody>
      </table>
    );
};

export default Events;