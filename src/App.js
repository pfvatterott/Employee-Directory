import React, { Component } from "react";
import TableHead from "./components/TableHead";
import Table from "./components/Table";
import Wrapper from "./components/Wrapper";
import NavbarCustom from "./components/Navbar"
import 'material-icons/iconfont/material-icons.css';
import API from "./utils/API";
import { Button, Icon, TextInput, Row, Select, Pagination, Col} from 'react-materialize';

class App extends Component {
  state = {
    employeeList: "",
    search: "",
    activeList: "",
    activePagination: 1
  };

  componentDidMount = () => {
    API.getEmployeeList()
      .then(res => {
        this.setState({
          employeeList: res.data.results,
          activeList: res.data.results.slice(0,10)
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
      employeeList: foundResults,
      activeList: foundResults.slice(0,10),
      activePagination: 1

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
          employeeList: res.data.results,
          activeList: res.data.results.slice(0,10),
          activePagination: 1
        })
      }).catch(err => console.log(err))
  }

  sortBy= (e) => {
    if (e.target.value === "1") {
      this.setState({
        employeeList: this.state.employeeList.sort((a, b) => a.name.first.localeCompare(b.name.first)),
        activeList: this.state.employeeList.slice(0,10),
        activePagination: 1
      })
    }
    else if (e.target.value === "2") {
      this.setState({
        employeeList: this.state.employeeList.sort((b, a) => a.name.first.localeCompare(b.name.first)),
        activeList: this.state.employeeList.slice(0,10),
        activePagination: 1
      })
    }
    else if (e.target.value === "3") {
      this.setState({
        employeeList: this.state.employeeList.sort((a, b) => a.name.last.localeCompare(b.name.last)),
        activeList: this.state.employeeList.slice(0,10),
        activePagination: 1
      })
    }
    else if (e.target.value === "4") {
      this.setState({
        employeeList: this.state.employeeList.sort((b, a) => a.name.last.localeCompare(b.name.last)),
        activeList: this.state.employeeList.slice(0,10),
        activePagination: 1
      })
    }
  }

  changePagination = (e) => {
    console.log(e)
    this.setState({
      activePagination: e,
      activeList: this.state.employeeList.slice((e * 10) - 10, (e * 10))
    })

  }

  
  render() {
    return (
      <div>
        <NavbarCustom />
        <Wrapper>
          <Row className="container">
            <Col s={7}>
              <TextInput
                icon="search"
                placeholder="Search for First, Last, Gender, or Age"
                onChange={this.handleInputChange}
                s={12}
              />
            </Col>
            <Col s={5}>
              <Select value="" onChange={this.sortBy} s={12}>
                <option disabled value="">
                  Sort By:
                </option>
                <option value="1">
                  First Name A - Z
                </option>
                <option value="2">
                  First Name Z - A
                </option>
                <option value="3">
                  Last Name A - Z
                </option>
                <option value="4">
                  Last Name Z - A
                </option>
              </Select>
            </Col>
          </Row>
          <Row className="container">
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
            <Col s={12}>
              <TableHead>
              {this.state.activeList ? this.state.activeList.map(emp => (
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
            </Col>
          </Row>
          <Row className="container">
            <Col s={12} className="center-align">
              <Pagination
                className="center-align"
                activePage={this.state.activePagination}
                items={Math.floor(this.state.employeeList.length) / 10}
                leftBtn={<Icon>chevron_left</Icon>}
                maxButtons={5}
                rightBtn={<Icon>chevron_right</Icon>}
                onSelect={this.changePagination}
              />
            </Col>
          </Row>
        </Wrapper>
      </div>
    )
  }

}

export default App;
