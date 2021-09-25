// import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dimensions: 50,
      maxTunnels: 100,
      maxLength: 10
    };
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  createArray(num, dimensions) {
    var array = [];
    for (var i = 0; i < dimensions; i++) {
      array.push([]);
      for (var d = 0; d < dimensions; d++) {
        array[i].push(num);
      }
    }
    return array;
  }

  onChange(e) {
    this.setState({
      [e.target.name]: this.validator(e.target.value)
    });
  }

  validator(x) {
    let input = Number(x);
    if (isNaN(input)) {
      return 0;
    }
    return input;
  }
  generateMap() {
    let dimensions = this.state.dimensions,
      maxTunnels = this.state.maxTunnels,
      maxLength = this.state.maxLength,
      map = this.createArray(1, dimensions),
      currentRow = Math.floor(Math.random() * dimensions),
      currentColumn = Math.floor(Math.random() * dimensions),
      directions = [[-1, 0], [1, 0], [0, 1], [0, -1]],
      lastDirection = [],
      randomDirection;

    while (maxTunnels && dimensions && maxLenght) {
      do {
        randomDirection = directions[Math.floor(Math.random() * directions.length)];
      } while ((randomDirection[0] === -lastDirection[0] && randomDirection[1]) || (randomDirection[0] === lastDirection[0] && randomDirection[1] === lastDirection[1]));
      var randomLength = Math.ceil(Math.random() * maxLength),
        tunnelLength = 0;
      while (tunnelLength < randomLength) {
        if (((currentRow === 0) && (randomDirection[0] === -1)) ||
          ((currentColumn === 0) && (randomDirection[1] === -1)) ||
          ((currentRow === dimensions - 1) && (randomDirection[0] === 1)) ||
          ((currentColumn === dimensions - 1) && (randomDirection[1] === 1))) {
          break;
        } else {
          map[currentRow][currentColumn] = 0;
          currentRow += randomDirection[0];
          currentColumn += randomDirection[1];
          tunnelLength++;
        }
      }
      if (tunnelLength) {
        lastDirection = randomDirection;
        maxTunnels--;
      }
    }
    return map;
  };
  onClick(e) {
    this.forceUpdate()
  }
  render() {
    let grid = this.generateMap();
    return (
      <div >
        <div className="form-group row text-center">
          <div className="inline">
            <label>dimensions</label>
            <input className="form-control" name="dimensions" type="text" maxLength="2" value={this.state.dimensions} onChange={this.onChange}/>
          </div>
          <div className="inline">
            <label>maxTunnels</label>
            <input className="form-control" name="maxTunnels" type="text" maxLength="3" value={this.state.maxTunnels} onChange={this.onChange}/>
          </div>
          <div className="inline">
            <label>maxLength</label>
            <input className="form-control" name="maxLength" type="text" maxLength="3" value={this.state.maxLength} onChange={this.onChange}/>
          </div>
        </div>
        <table className="grid" onClick={this.onClick}>
          <thead>
            {grid.map((obj, row) => <tr key={row}>{obj.map((obj2, col) =>< td className = {
                obj2 === 1
                  ? 'wall'
                  : 'tunnel'
              }
              key = {
                col
              } > </td>)}</tr>)}
          </thead>
        </table>
      </div>
    );
  }
}

export default App;
