import React from 'react';

import './SearchField.scss';

import { storage } from '../../data/storage';
import debounce from '../../helpers/debounce';

const SearchField = (props) => {
	let searchField = storage.search;

	const handleTextChange = (event) => {
		searchField = event.target.value;
		storage.search = searchField;
		props.searchData(searchField);
	};

	const handleTextChangeDebounced = debounce(handleTextChange, 1000);

	return (
		<div className='search-box d-flex align-items-center justify-content-center'>
			<fieldset fieldset='true' className='field-container'>
				<input onChange={handleTextChangeDebounced} type='text' placeholder='Search...' className='field' defaultValue={searchField} />
			</fieldset>
		</div>
	);
};

export default SearchField;
