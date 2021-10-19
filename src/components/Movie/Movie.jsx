import React from 'react';

import './Movie.scss';

const Movie = (props) => {
	const url = 'https://downloadwap.com/thumbs2/wallpapers/p2ls/2019/abstract/45/c64ba65313143652.jpg',
		movie = props.movie,
		img = movie.Poster;

	let rat = 'Not yet released :('; // just in case

	if (movie.Ratings.length > 0) {
		rat = movie.Ratings[0].Value;
	}

	const closeDetailedView = () => {
		window.history.go(-1);
	}

	return (
		<div id='root' className='fluid-container'>
			<div className='row mt-5'>
				<div className='col-lg-4 text-center'>
					<img width={img === 'N/A' ? '300' : ''} height={img === 'N/A' ? '400' : ''} src={img === 'N/A' ? url : img} alt={movie.Title} />
					<div className='cent'>
						<h3 className='mt-4 start'>
							<i className='bi bi-star-fill'> </i>
							{rat}
						</h3>
					</div>
				</div>

				<div className='col-lg-8 bot'>
					<div className='containter'>
						<h1>
							{movie.Title}
						</h1>
					</div>
					<h3>
						Directed by: {movie.Director}
					</h3>
					<div className='containter'>
						<div className='row'>
							<p className='mt-4'>
								<span>{movie.Year}</span>
							</p>
							<p>
								<span>{movie.Runtime}</span>
							</p>
							<p>
								{movie.Genre}
							</p>
							<p className='mt-4 plot d-flex justify-content-center'>
								{movie.Plot}
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className='row mt-5'>
				<div onClick={closeDetailedView}>
					<i className='bi bi-x-lg'></i>
				</div>
			</div>
		</div>
	);
};

export default Movie;
