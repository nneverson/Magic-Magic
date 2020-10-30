import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';

class Navbar extends Component {
	render() {
		return (
			<div>
				<nav className='NavbarItems'>
					<h1 className='navbar-logo'>Magic Magic</h1>

					{/* <div className='menu-icon'></div> */}
					<ul className='nav-menu'>
						{MenuItems.map((item, index) => {
							return (
								<li key={index}>
									<a className={item.cName} href={item.url}>
										{item.title}
									</a>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
		);
	}
}

export default Navbar;
