import React, { Component } from "react";
import TableHead from "./components/TableHead";
import Table from "./components/Table";
import Wrapper from "./components/Wrapper";
import employees from "./employees.json"
import 'material-icons/iconfont/material-icons.css'
import { Button, Col, Navbar, Icon, TextInput, Row, Pagination } from 'react-materialize';

class App extends Component {
  state = {
    employees: employees.results,
    search: "",
  };

  handleFormSubmit = e => {
    let foundResults = [];
    console.log(this.state.search)
    console.log(this.state.employees.results)
    for (let i = 0; i < this.state.employees.length; i++) {
      if (this.state.search === this.state.employees[i].name.first) {
        foundResults.push(this.state.employees[i])
      }
    }
    this.setState({
      employees: foundResults
    })
  }


  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    this.setState({
      search: value
    });
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
              placeholder="Search for Name"
              s={6}
              onChange={this.handleInputChange}
            />
            <Button
                node="button"
                style={{
                  marginRight: '5px'
                }}
                waves="light"
                onClick={this.handleFormSubmit}
              >Search
            </Button>
            </Row>
          <Row
            className="container"  
          >
          </Row>
          <Row
            className="container"  
          >
            <TableHead>
            {this.state.employees.slice(0,10).map(emp => (
              <Table
              firstName={emp.name.first}
              lastName={emp.name.last}
              gender={emp.gender}
              age={emp.dob.age}
              email={emp.email.trim()}
              picture={emp.picture.large}
              city={emp.location.city}
              country={emp.location.country}
              cell={emp.cell}
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
