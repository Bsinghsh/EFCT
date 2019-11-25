import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactDataSheet from 'react-datasheet';
const grid = [
   [{value:  5, expr: '1 + 4'}, {value:  6, expr: '6'}, {value: new Date('2008-04-10')}],
   [{value:  5, expr: '1 + 4'}, {value:  5, expr: '1 + 4'}, {value: new Date('2004-05-28')}]
]
const onCellsChanged = (changes) => changes.forEach(({cell, row, col, value}) => console.log("New expression :" + value))
const divStyle ={
  margin: '40px',

  position: 'absolute',
  top: '0%',
  right: '0%',
  border: '40px'
};
class Home extends Component {

  render () {
    return (
      <React.Fragment>
      <p>
        I have no idea if this will work, but I'm tired and frustrated and want to be done.
      </p>

      <div className="Table" style={divStyle}>
        <ReactDataSheet
          data={grid}
            valueRenderer={(cell, i, j) => j == 2 ? cell.value.toDateString() : cell.value}
            dataRenderer={(cell, i, j) => j == 2 ? cell.value.toISOString() : cell.expr}
            onCellsChanged={onCellsChanged}/>
      </div>
      </React.Fragment>
    )
  }
}
export default Home;
