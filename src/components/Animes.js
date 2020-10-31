import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const shows = [
	{
		image: 'https://cdn.myanimelist.net/images/anime/11/55225.jpg',
		title: 'Mahou Shoujo Madoka★Magica',
		id: 9756,
	},
	{
		image: 'https://cdn.myanimelist.net/images/anime/2/81087.jpg',
		title: 'magical girl raising project',
		id: 33003,
	},
	{
		image: 'https://cdn.myanimelist.net/images/anime/4/51071.jpg',
		title: 'magical girl site',
		id: 36266,
	},
	{
		image: 'https://cdn.myanimelist.net/images/anime/1514/100469.jpg',
		title: 'Magical Girl Special Ops Asuka',
		id: 37979,
	},
	{
		image: 'https://cdn.myanimelist.net/images/anime/8/77057.jpg',
		title: 'Yuuki Yuuna is a Hero',
		id: 25519,
	},
	{
		image: 'https://cdn.myanimelist.net/images/anime/1798/91548.jpg',
		title: 'School-Live!',
		id: 55163,
	},
];
const Animes = () => {
	const [animes, setAnimes] = useState(shows);

	return (
		<section className='card-container'>
			{animes.map((anime) => (
				<Link to={`./details/${anime.id}`} key={anime.id}>
					<div className='card'>
						<div><img src={anime.image} /></div>
						<h4>{anime.title}</h4>
					</div>
				</Link>
			))}
		</section>
	);
};

export default Animes;
/// This is the home page where all the shows are listed in a grid. Linked to was used to make each picture and title clickable. It should lead to more details about whichever show that was clicked.
