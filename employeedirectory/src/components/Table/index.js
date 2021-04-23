import React from "react";

function Table(props) {
    return (
        <tbody>
          <tr>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.gender}</td>
            <td>{props.email}</td>
          </tr>
        </tbody>
    );
}

export default Table;