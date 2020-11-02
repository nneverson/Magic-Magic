import React from 'react';
import Home from './components/Home';
import About from './components/About';
import { Route } from 'react-router-dom';
import Animes from './components/Animes';
import AnimeDetails from './components/AnimeDetails';
import Navbar2 from './components/Navbar/Navbar2';
import Form from './components/Form';
import './components/App.css';

const App = () => {
	return (
		<div>
			<Navbar2 />
			

			<main>
				<Route path='/about' exact component={About} />
				<Route path='/' exact component={Home} />
				<Route path='/home' exact component={Animes} />
				<Route path='/request' exact component={Form} />
				<Route
					path='/details/:id'
					render={(routerProps) => <AnimeDetails match={routerProps.match} />}
				/>
			</main>
		</div>
	);
};

export default App;
