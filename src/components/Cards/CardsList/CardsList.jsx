import React from 'react';

import Card from '../Card/Card.jsx';
import CardGrid from '../CardGrid/CardGrid.jsx';


const Cardlist = (props) => {
	const url = 'https://downloadwap.com/thumbs2/wallpapers/p2ls/2019/abstract/45/c64ba65313143652.jpg';

	return (
		<CardGrid>
			{props.movies && props.movies.map((movie) =>
				<Card key={movie.imdbID} id={movie.imdbID} title={movie.Title} img={movie.Poster === 'N/A' ? url : movie.Poster} />
			)}
		</CardGrid>
	);
};

export default Cardlist;
