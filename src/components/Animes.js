import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const shows = [
	{
		image: 'https://cdn.myanimelist.net/images/anime/11/55225.jpg',
		title: 'Mahou Shoujo Madoka★Magica',
		id: 9756,

	},
	{
		image: 'https://cdn.myanimelist.net/images/anime/11/55225.jpg',
		title: 'Mahou Shoujo Madoka★Magica',
		id: 9756,
	},
	{
		image: 'https://cdn.myanimelist.net/images/anime/11/55225.jpg',
		title: 'Mahou Shoujo Madoka★Magica',
		id: 9756,
	},

 ]
const Animes = () => {
	const [animes, setAnimes] = useState(shows);

	return (
		<section className='container'>
			{animes.map((anime) => (
				<Link to={`./details/${anime.id}`} key={anime.id}>
					<div className='card'>
						<img src={anime.image} />
						<h4>{anime.title}</h4>
					</div>
				</Link>
			))}
		</section>
	);
};

export default Animes;
