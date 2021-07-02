import React from 'react';

type Props = {
  data: {
    type: string,
    value: string,
    created: Date
  }[];
}

function Events(props: Props) {
    return (
        <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Value</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {
            props.data.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data.type}</td>
                  <td>{data.value}</td>
                  <td>{data.created.toISOString()}</td>
                </tr>
              )
              })
          }
        </tbody>
      </table>
    );
};

export default Events;