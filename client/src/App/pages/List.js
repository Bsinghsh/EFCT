import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactDataSheet from 'react-datasheet';
import ReactDataGrid from 'react-data-grid';
import '../CSS/Home.css'
const onCellsChanged = (changes) => changes.forEach(({cell, row, col, value}) => console.log("New expression :" + value))
const defaultColumnProperties = {
  resizable: true,
  editable: true,
  width: 120
};
const columns = [
  { key: 'id', name: 'Skill Level', editable:true },
  { key: 'S1', name: 'Skill 1', editable:true, resizable: true },
  { key: 'S2', name: 'Skill 2', editable:true, resizable: true },
  { key: 'S3', name: 'Skill 3', editable:true, resizable: true }, 
  { key: 'S4', name: 'Skill 4', editable:true, resizable: true }, 
  { key: 'S5', name: 'Skill 5', editable:true, resizable: true }  ]
  .map(c => ({ ...c, ...defaultColumnProperties }));
  const rows = [{id: 'Level 6', S1: 'Mathemagic'}, 
  {id: 'Level 5', S1: 'Murder', S2: 'Magic'}, 
  {id: 'Level 4', S1: 'Counting', S2: 'Dancing', S3: 'Breaking In'},
  {id: 'Level 3', S1: 'Driving', S2: 'Design', S3: 'Talky Stuff', S4: 'Eating'},
  {id: 'Level 2', S1: 'Skill-Writing', S2: 'Toasting', S3: 'Flying', S4: 'Drinking', S5: 'Graphing'},
  {id: 'Level 1', S1: 'Timing', S2: 'Action Hero', S3: 'Action Zero', S4: 'Being The Night', S5: 'Heroing'}
]
const parStyle={
  fontFamily:'Georgia',


};

const skillStyle={
  maxHeight: '400px',
  maxWidth: '500px'
};
class Home extends Component {
  state = {rows};
  onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    this.setState(state => {
      const rows = state.rows.slice();
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
      }
      return { rows };
    });
  };
  render () {
    return (
      <React.Fragment>
      <p style={parStyle}>
        I have no idea if this will work, but I'm tired and frustrated and want to be done.
      </p>

      <div style={skillStyle}>
        <ReactDataGrid
          columns={columns}
          rowGetter={i => this.state.rows[i]}
          rowsCount={7}
          onGridRowsUpdated={this.onGridRowsUpdated}
          enableCellSelect={true}
          onColumnResize={(idx, width) =>
        console.log(`Column ${idx} has been resized to ${width}`)
      }

        />
      </div>
      </React.Fragment>
    );
  }
}
export default Home;
