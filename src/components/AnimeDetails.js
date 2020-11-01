import React, { useState, useEffect } from 'react';
import './AnimeDetails.css';

const AnimeDetails = ({ match }) => {
	const [animeDetails, setAnimeDetails] = useState(null);

	const detailsUrl = `https://api.jikan.moe/v3/anime/${match.params.id}`;

	useEffect(() => {
		fetch(detailsUrl)
			.then((response) => response.json())
			.then((Json) => {
				setAnimeDetails(Json);
			});
	}, []);
	if (!animeDetails) {
		return <p>page loading</p>;
	}
	return (
		
		<div className='details-container'>
			<div>
				<img src={animeDetails.image_url} />
			</div>
			<div>
				<p>{animeDetails.title_english}</p>
			</div>
			<div>
				<p>{animeDetails.title}</p>
			</div>
			<div className='synopsis'>
				<p >{animeDetails.synopsis}</p>
			</div>
		</div>
	);
};

export default AnimeDetails;
