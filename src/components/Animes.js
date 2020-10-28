import React, { useState, useEffect } from 'react';

const Animes = () => {
	const [anime, setAnime] = useState([]);

	useEffect(() => {
		fetch('https://api.jikan.moe/v3/search/anime?q=madoka%20magica')
			.then((response) => response.json())
			.then((response) => {
				setAnime(response);
				console.log(response);
			})
			.catch(console.error);
	}, []);
	if (anime.length === 0) {
		return null; //why does it only display with this if statement
	}
	return (
		<section className='container'>
			<div className='card'>
				{/* {anime.results.map((anime) => {
					return <p>{anime.title}</p>; */}
				{/* })} */}
				<img src='https://cdn.myanimelist.net/images/anime/11/55225.jpg?s=cff930c5de079dbeab2107067050e03c' />
				{anime.results[0].title} 
				{/* import link componet form react router dom and */}
				{/* wrap around image. rout to detail component. */}
			</div>
		</section>
	);
};

export default Animes;
