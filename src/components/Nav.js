import React from 'react';
import { Link } from 'react-router-dom';
import Animes from './Animes';

const Nav = () => {
	return (
		<nav>
			<div className='logo'>
		
				<a href='/'>Magic Magic</a>
			</div>
			<ul className='navlinks'>
				<li>
					<a href='/'>Home</a>
				</li>
				<li>
					<a href='/about'>About</a>
				</li>
			</ul>
		</nav>
		
	);
};

export default Nav;
