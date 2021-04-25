import React, { Component } from "react";
import TableHead from "./components/TableHead";
import Table from "./components/Table";
import Wrapper from "./components/Wrapper";
import employees from "./employees.json"
import 'material-icons/iconfont/material-icons.css'
import { Button, Col, Navbar, Icon, TextInput, Row, Pagination } from 'react-materialize';

class App extends Component {
  state = {
    employeeList: employees.results,
    search: "",
  };

  handleFormSubmit = e => {
    let foundResults = [];
    for (let i = 0; i < employees.results.length; i++) {
      if ((this.state.search === employees.results[i].name.first.toLowerCase()) || (this.state.search === employees.results[i].name.last.toLowerCase()) || (this.state.search == employees.results[i].dob.age) || (this.state.search === employees.results[i].gender.toLowerCase())) {
        foundResults.push(employees.results[i])
      }
    } 
    this.setState({
      employeeList: foundResults
    })
  }


  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value.toLowerCase() ;
    this.setState({
      search: value
    });
  };

  resetList = event => {
    this.setState({
      employeeList: employees.results
    })
  }

  
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
              placeholder="Search for First, Last, Gender, or Age"
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
            <Button
                node="button1"
                style={{
                  marginRight: '5px'
                }}
                waves="light"
                onClick={this.resetList}
              >Reset
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
            {this.state.employeeList.slice(0,10).map(emp => (
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
