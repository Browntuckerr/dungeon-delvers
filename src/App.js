

// import './App.css';
// import React, { Component } from "react";








// class App extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     size: "small",
//   //     maxTunnels: 100,
//   //     maxLength: 10
//   //   };
//   //   this.onClick = this.onClick.bind(this);
//   //   this.onChange = this.onChange.bind(this);
//   // }

//   var seed ="";
//   var minRoomSize = 5;
//   var maxRoomSize = 15;
//   var roomAttempts= 200;
//   var extraConnectionVal = 0.125;

//   var rooms, connectionList;

//   // createArray(num, size) {
//   //   var array = [];
//   //   for (var i = 0; i < size; i++) {
//   //     array.push([]);
//   //     for (var d = 0; d < size; d++) {
//   //       array[i].push(num);
//   //     }
//   //   }
//   //   return array;
//   // }

//   onChange(e) {
//     // this.setState({
//     //   [e.target.name]: this.validator(e.target.value)
//     // });
//     console.log(this.state.size)
//     this.setState({
//       size: e.target.value 
//     })
//   }

//   // validator(x) {
//   //   let input = Number(x);
//   //   if (isNaN(input)) {
//   //     return 0;
//   //   }
//   //   return input;
//   // }
//   // generateMap() {
//   //   let size = this.state.size,
//   //     maxTunnels = this.state.maxTunnels,
//   //     maxLength = this.state.maxLength,
//   //     map = this.createArray(1, size),
//   //     currentRow = Math.floor(Math.random() * size),
//   //     currentColumn = Math.floor(Math.random() * size),
//   //     directions = [[-1, 0], [1, 0], [0, 1], [0, -1]],
//   //     lastDirection = [],
//   //     randomDirection;

//   //   while (maxTunnels && size && maxLength) {
//   //     do {
//   //       randomDirection = directions[Math.floor(Math.random() * directions.length)];
//   //     } while ((randomDirection[0] === -lastDirection[0] && randomDirection[1]) || (randomDirection[0] === lastDirection[0] && randomDirection[1] === lastDirection[1]));
//   //     var randomLength = Math.ceil(Math.random() * maxLength),
//   //       tunnelLength = 0;
//   //     while (tunnelLength < randomLength) {
//   //       if (((currentRow === 0) && (randomDirection[0] === -1)) ||
//   //         ((currentColumn === 0) && (randomDirection[1] === -1)) ||
//   //         ((currentRow === size - 1) && (randomDirection[0] === 1)) ||
//   //         ((currentColumn === size - 1) && (randomDirection[1] === 1))) {
//   //         break;
//   //       } else {
//   //         map[currentRow][currentColumn] = 0;
//   //         currentRow += randomDirection[0];
//   //         currentColumn += randomDirection[1];
//   //         tunnelLength++;
//   //       }
//   //     }
//   //     if (tunnelLength) {
//   //       lastDirection = randomDirection;
//   //       maxTunnels--;
//   //     }
//   //   }
//   //   return map;
//   // };
 
//   onClick(e) {
//     this.forceUpdate()
//   };
//   createMap(e) {
//     e.preventDefault()
//     console.log(this.state.size)
    
//   }

//   render() {
//     // let grid = this.generateMap();
//     return (
//       <div >
//         <div className="form-group row text-center">
//           <div className="inline">
//             <label>size</label>
//             <select className="form-control" name="size" type="text" maxLength="2" value={this.state.size} onChange={this.onChange} >
//               <option value="small"> small </option>
//               <option value="medium"> medium </option>
//               <option value="large"> large </option>
//             </select>
//           </div>
//           {/* <div className="inline">
//             <label>maxTunnels</label>
//             <input className="form-control" name="maxTunnels" type="text" maxLength="3" value={this.state.maxTunnels} onChange={this.onChange}/>
//           </div> */}
//           {/* <div className="inline">
//             <label>maxLength</label>
//             <input className="form-control" name="maxLength" type="text" maxLength="3" value={this.state.maxLength} onChange={this.onChange}/>
//           </div> */}
//           <button onClick={this.createMap}>Create Map</button>
//         </div>
//         {/* <table className="grid" onClick={this.onClick}>
//           <thead>
//             {grid.map((obj, row) => <tr key={row}>{obj.map((obj2, col) =>< td className = {
//                 obj2 === 1
//                   ? 'wall'
//                   : 'tunnel'
//               }
//               key = {
//                 col
//               } > </td>)}</tr>)}
//           </thead>
//         </table> */}
//       </div>
//     );
//   }
// }

import React from "react";
import Script from "react-load-script";
import "./utils/resource";

class App extends React.Component {
	state = { scriptLoaded: false };

	handleScriptError() {
		console.log("Error while loading script");
	}

	handleScriptLoad() {
		console.log("Script loaded successfully");
		this.setState({ scriptLoaded: true });
	}

	render() {
		return (
			<div>
				<Script
					url="utils/resources.j"
					onError={this.handleScriptError.bind(this)}
					onLoad={this.handleScriptLoad.bind(this)}
				/>
				
			</div>
		);
	}
}

export default App;