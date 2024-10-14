import React from "react";
import "./App.css";
import BarNav from "./Components/BarNav";
import Affiche from "./Components/Affiche";
import Feedback from "./Components/Feedback";

function App() {
	return (
		<div className='App'>
			<BarNav />
			<Affiche />
			<Feedback />
			<h1>Workshop React JS</h1>
		</div>
	);
}

export default App;
