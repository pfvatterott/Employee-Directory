import React from "react";

function Row(props) {
    return (
        <div class="row container">
            {props.children}
        </div>
    );
}

export default Row;