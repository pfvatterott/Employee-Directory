import React from "react";

function Wrapper(props) {
    return (
        <section class="section white">
            {props.children}
        </section>
    );
}

export default Wrapper;