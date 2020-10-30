import React from 'react';
import Home from './components/Home';
import About from './components/About';
import { Route } from 'react-router-dom';
import Animes from './components/Animes';
import AnimeDetails from './components/AnimeDetails';
import Navbar from './components/Navbar/Navbar';


const App = () => {
	return (
		<div>
			<Navbar />
			<Home />

			<main>
				<Route path='/' exact component={Animes} />
				<Route
					path='/details/:id'
					render={(routerProps) => <AnimeDetails match={routerProps.match} />}
				/>
				<Route path='/about' exact component={About} />
			</main>
		</div>
	);
};

export default App;
