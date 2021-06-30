import React, { useState } from 'react';

function NamePlate() {
    const [state] = useState({
        id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        name: "sample remo"
    })
    return (
        <React.Fragment>
            <label>ID:</label>{state.id}
            <label>Name:</label>{state.name}
        </React.Fragment>
    );
};

export default NamePlate;