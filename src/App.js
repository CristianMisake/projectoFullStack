import React, { Fragment } from 'react';
import './App.css';
//components
import Header from './components/header';
import Body from './components/body';
import Loading from './components/loading';

function App() {

	return (
		<Fragment>
			<div className="alert alert-success" role="alert">información cargada</div>
			<Loading/>
			<Header/>
			<Body/>
		</Fragment>
	);
}

export default App;
