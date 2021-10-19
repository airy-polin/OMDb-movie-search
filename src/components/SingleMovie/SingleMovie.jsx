import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Loader from 'react-loader-spinner';

import Movie from '../Movie/Movie.jsx';

import './SingleMovie.scss';

const SingleMovie = (props) => {
	const id = useParams().id;

	const [movie, setMovie] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		movData(id)
	}, []);

	const movData = async (id) => {
		const url = await fetch('https://www.omdbapi.com/?apikey=685716a4&i=' + id);
		const res = await url.json();
		setMovie(res);
		setIsLoading(false);
	}

	return (
		<div>
			{isLoading ?
				<Loader
					className='center'
					type='Puff'
					color='#000'
					height={100}
					width={100}
				/> :
				<Movie movie={movie} />}
		</div>
	);
};

export default SingleMovie;
