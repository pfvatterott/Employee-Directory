import React from "react";

function TextField(props) {
    return (
        <div>
            <div class="input-field col s6">
                <input id="first_name" type="text" class="validate"></input>
                <label for="first_name">First Name</label>
            </div>
            <div class="input-field col s6">
                <input id="first_name" type="text" class="validate"></input>
                <label for="first_name">Last Name</label>
            </div>

            {props.children}
        </div>
    );
}

export default TextField;