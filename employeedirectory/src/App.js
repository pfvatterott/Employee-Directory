import React, { Component } from "react";
import Navbar from "./components/Navbar";
import TableHead from "./components/TableHead";
import Table from "./components/Table";
import Wrapper from "./components/Wrapper";
import Row from "./components/Row";
import TextField from "./components/TextField"
import employees from "./employees.json"

class App extends Component {
  state = {
    employees
  };

  
  render() {
    return (
      <div>
        <Navbar />
        <Wrapper>
          <Row>
            <TextField />
          </Row>
          <Row>
            <TableHead>
            {this.state.employees.results.map(emp => (
              <Table
              firstName={emp.name.first}
              lastName={emp.name.last}
              gender={emp.gender}
              email={emp.email}
              />
            ))}
            </TableHead>
          </Row>
        </Wrapper>
      </div>
    )
  }

}

export default App;
