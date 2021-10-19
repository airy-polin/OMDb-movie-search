import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { storage } from './data/storage';
// import startView from './data/defaultList';

import CardsList from './components/Cards/CardsList/CardsList.jsx';
import SearchField from './components/SearchField/SearchField.jsx';

function App() {
	// let defaultList = startView;
	let defaultList = null;

	const [searchValue, setSearchValue] = useState(storage.search);
	const [movieList, setMovieList] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [movieNotFound, setMovNotFound] = useState(false);

	const handleSearchValue = (value) => {
		setSearchValue(value);
		setIsLoading(true);
	};

	const movieData = async () => {
		const url = await fetch('https://www.omdbapi.com/?apikey=685716a4&s=' + searchValue);

		const res = await url.json();
		setMovieList(await res.Search);

		setIsLoading(false);
		res.Response === 'False' ? setMovNotFound(true) : setMovNotFound(false);
	}

	useEffect(() => {
		if (searchValue === '') {
			setMovieList(defaultList);
			setIsLoading(false);
		} else {
			movieData();
		}
	}, [searchValue]);

	return (
		<div >
			<SearchField searchData={handleSearchValue} />
			{
				isLoading ? <Loader className='center' type='Puff' color='#f3ca20' height={100} width={100} /> :
				(movieNotFound && searchValue !== '' ? <h1 className='not height' style={{color: '#f3ca20'}}> Oops... movie not found...</h1> : <CardsList movies={movieList} />)
			}
		</div>
	)
}

export default App;
