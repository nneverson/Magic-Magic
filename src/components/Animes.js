import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
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
		image: 'https://cdn.myanimelist.net/images/anime/7/6770.jpg',
		title: 'Magical Girl Lyrical Nanoha',
		id: 76,
	},
];
const Animes = () => {
	const [animes, setAnimes] = useState(shows);

	return (
		<section className='card-container'>
			{animes.map((anime) => (
				<Link to={`./details/${anime.id}`} key={anime.id}>
					<Card style={{ width: '13rem' }}>
						<Card.Img variant='top' src={anime.image} />
						<Card.Body style={{ backgroundColor: 'white' }}>
							<Card.Text style={{ backgroundColor: 'white' }}>
								{anime.title}
							</Card.Text>
						</Card.Body>
					</Card>
				</Link>
			))}
		</section>
	);
};

export default Animes;

