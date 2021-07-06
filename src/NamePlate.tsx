import { IUser } from "nature-remo/lib/interfaces";
import React from "react";

type Props = {
    data: IUser;
}

function NamePlate(props: Props) {
    return (
        <React.Fragment>
            <label>ID:</label>{props.data.id}
            <label>Name:</label>{props.data.nickname}
        </React.Fragment>
    );
};

export default NamePlate;