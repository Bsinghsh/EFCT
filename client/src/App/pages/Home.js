import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactDataSheet from 'react-datasheet';
import ReactTable from "react-table";
import '../CSS/Home.css'
const grid = [
   [{value:  5, expr: '1 + 4'}, {value:  6, expr: '6'}, {value: new Date('2008-04-10')}],
   [{value:  5, expr: '1 + 4'}, {value:  5, expr: '1 + 4'}, {value: new Date('2004-05-28')}]
]

const onCellsChanged = (changes) => changes.forEach(({cell, row, col, value}) => console.log("New expression :" + value))
const divStyle ={
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '250px',
    textAlign: 'center',
    positoin: 'absolute',
    top: '50%',
    left: '50%',
};

const titleStyle={
  textAlign: 'center',
  fontSize: '50px'
};
const textStyle={
  fontSize: '20px'
};
class Home extends Component {

  render () {

    return (
      <React.Fragment>
      <div className="Title" style={titleStyle}>
        <h1>EFCT</h1>
        <p style={textStyle}> The Eclipse Fate Character Tool </p>
            <br/>
        <Link to="/List" style={textStyle}> Check out a demonstration table</Link>
        <p style={textStyle}> Please enter your username and password to log-in</p>
      </div>
            <br/>


      <div className="Table" style={divStyle}>
        <form>
            Name: 
            <br/>
              <input type ="text" name="name"/>
          <br/>
            Password: 
            <input type="text" name="password"/>
          <br/>
          <input type="submit" value="Submit"/>

        </form>
      </div>
      </React.Fragment>
    )
  }
}
export default Home;
