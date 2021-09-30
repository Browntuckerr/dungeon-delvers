import React, {Component} from "react";
import Script from "react-load-script";
import Canvas from "./components/map/canvas";


class App extends Component {
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
					url="utils/resources.js"
					onError={this.handleScriptError.bind(this)}
					onLoad={this.handleScriptLoad.bind(this)}

				/>
				
      <Canvas />
 
      <script src="./utils/resources.js"></script>
		
     
      </div>
    );
	}
  
};


export default App;
