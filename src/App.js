import React from 'react';
import Home from './components/Home';
import About from './components/About';
import { Route } from 'react-router-dom';
import Animes from './components/Animes';
import AnimeDetails from './components/AnimeDetails';
import Navbar2 from './components/Navbar/Navbar2';
import './components/App.css';

const App = () => {
	return (
		<div>
			<Navbar2 />
			<Home />

			<main>
				<Route path='/about' exact component={About} />
				<Route path='/home' exact component={Home} />
				<Route path='/' exact component={Animes} />
				<Route
					path='/details/:id'
					render={(routerProps) => <AnimeDetails match={routerProps.match} />}
				/>
			</main>
		</div>
	);
};

export default App;
