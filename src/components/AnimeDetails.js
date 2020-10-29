import React, { useState, useEffect } from 'react';

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
			<p>{animeDetails.title}</p>
		</div>
	);
};

export default AnimeDetails;
