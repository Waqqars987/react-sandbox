import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function Query1() {
	const { data, isLoading, isPending, isFetching } = useQuery({
		queryKey: ['posts'],
		queryFn: getPosts
	});
	console.log({ data, isLoading, isPending, isFetching });
	return <h1>Query 1</h1>;
}

export async function getPosts() {
	const { data } = await axios.get('https://jsonplaceholder.org/posts');
	return data;
}
