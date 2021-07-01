import React from "react";

type Props = {
    data: {
        uuid: string,
        name: string
    }
}

function NamePlate(props: Props) {
    return (
        <React.Fragment>
            <label>ID:</label>{props.data.uuid}
            <label>Name:</label>{props.data.name}
        </React.Fragment>
    );
};

export default NamePlate;