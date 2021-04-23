import React, { Component } from "react";
import TableHead from "./components/TableHead";
import Table from "./components/Table";
import Wrapper from "./components/Wrapper";
import employees from "./employees.json"
import { Button, Col, Navbar, Icon, TextInput, Row } from 'react-materialize';

class App extends Component {
  state = {
    employees
  };

  
  render() {
    return (
      <div>
        <Navbar
          alignLinks="left"
          brand={<a className="brand-logo" href="#">Employee Directory</a>}
          centerLogo
          id="mobile-nav"
          menuIcon={<Icon></Icon>}
          fixed="true"
          options={{
            draggable: true,
            edge: 'left',
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true
          }}
        >
        </Navbar>
        <Wrapper>
          <Row
            className="container"  
          >
            <TextInput
            id="TextInput-4"
            placeholder="First Name"
            s={6}
            />
            <TextInput
            id="TextInput-4"
            placeholder="Last Name"
            s={6}
            />
          </Row>
          <Row
            className="container"  
          >
            <Button
            >Search</Button>
          </Row>
          <Row
            className="container"  
          >
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
