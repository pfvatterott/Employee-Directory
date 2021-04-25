import React, { Component } from "react";
import TableHead from "./components/TableHead";
import Table from "./components/Table";
import Wrapper from "./components/Wrapper";
import 'material-icons/iconfont/material-icons.css';
import API from "./utils/API";
import { Button, Navbar, Icon, TextInput, Row, Select } from 'react-materialize';

class App extends Component {
  state = {
    employeeList: "",
    search: "",
  };

  componentDidMount = () => {
    API.getEmployeeList()
      .then(res => {
        
        this.setState({
          employeeList: res.data.results
        })
      }).catch(err => console.log(err))
  }

  handleFormSubmit = e => {
    let foundResults = [];
    for (let i = 0; i < this.state.employeeList.length; i++) {
      if ((this.state.search === this.state.employeeList[i].name.first.toLowerCase()) || (this.state.search === this.state.employeeList[i].name.last.toLowerCase()) || (this.state.search == this.state.employeeList[i].dob.age) || (this.state.search === this.state.employeeList[i].gender.toLowerCase())) {
        foundResults.push(this.state.employeeList[i])
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

  resetList = () => {
    API.getEmployeeList()
      .then(res => {
        console.log(res.data.results)
        this.setState({
          employeeList: res.data.results
        })
      }).catch(err => console.log(err))
  }

  sortBy= (e) => {
    if (e.target.value === "1") {
      this.setState({
        employeeList: this.state.employeeList.sort((a, b) => a.name.first.localeCompare(b.name.first))
      })
    }
    else if (e.target.value === "2") {
      this.setState({
        employeeList: this.state.employeeList.sort((a, b) => a.name.last.localeCompare(b.name.last))
      })
    }
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
          <Row className="container">
          <Select value="" onChange={this.sortBy}>
            <option disabled value="">
              Sort By:
            </option>
            <option value="1">
              First Name
            </option>
            <option value="2">
              Last Name
            </option>
          </Select>
          </Row>

          <Row
            className="container"  
          >
          </Row>
          <Row
            className="container"  
          >
            <TableHead>
            {this.state.employeeList ? this.state.employeeList.slice(0,10).map(emp => (
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
            )): null}
            </TableHead>
          </Row>
          
        </Wrapper>
      </div>
    )
  }

}

export default App;
