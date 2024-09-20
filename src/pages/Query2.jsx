import { useQueries } from '@tanstack/react-query';
import axios from 'axios';

import { getPosts } from './Query1';

export default function Query1() {
	const result = useQueries({
		queries: [
			{
				queryKey: ['posts'],
				queryFn: getPosts
			},
			{
				queryKey: ['users'],
				queryFn: getComments
			}
		],
		combine
	});

	console.log(result);

	return <h1>Query 2</h1>;
}

export async function getComments() {
	const { data } = await axios.get('https://jsonplaceholder.org/comments');
	return data;
}

function combine(results) {
	return {
		data: results.map(result => result.data),
		isPending: results.some(result => result.isPending),
		isLoading: results.some(result => result.isLoading),
		isFetching: results.some(result => result.isFetching)
	};
}
