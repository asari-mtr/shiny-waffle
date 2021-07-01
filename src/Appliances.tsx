import React from "react";

type Props = {
  data: {
    state: string,
    nick_name: string,
    type: string,
    model: string,
    manufacture: string,
    country: string,
  }[];
}

function Appliances(props: Props) {
    return (
        <table>
        <thead>
          <tr>
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
            props.data.map((data) => {
              return (
                <tr>
                  <td>{data.state}</td>
                  <td>{data.nick_name}</td>
                  <td>{data.type}</td>
                  <td>{data.model}</td>
                  <td>{data.manufacture}</td>
                  <td>{data.country}</td>
                </tr>
                )
            })
          }
        </tbody>
      </table>
    );
};

export default Appliances;