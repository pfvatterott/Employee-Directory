import React from "react";


function TableHead(props) {
    return (
        <table class="highlight align-center">
        <thead>
          <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Email</th>
          </tr>
        </thead>

        {props.children}

      </table>
    );
}

export default TableHead;