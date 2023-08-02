import React from 'react';
import { useSearchParams } from 'react-router-dom';

function SearchParams() {
	const [params, setParams] = useSearchParams();
	const paramsObj = Object.fromEntries(params.entries());

	const onSubmit = event => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const newParams = Object.fromEntries(formData.entries());
		setParams(newParams);
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				<fieldset>
					<legend>Enter Query Params</legend>
					<div>
						<label htmlFor='limit'>Limit</label>
						<input type='number' name='limit' id='limit' />
					</div>
					<div>
						<label htmlFor='skip'>Skip</label>
						<input type='number' name='skip' id='skip' />
					</div>
					<button type='submit'>Submit</button>
				</fieldset>
			</form>

			<h1>Search Params:</h1>
			<pre>{JSON.stringify(paramsObj, null, 4)}</pre>
		</>
	);
}

export default SearchParams;
