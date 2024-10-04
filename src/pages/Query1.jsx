import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@mui/material';
import axios from 'axios';

export default function Query1() {
	const [id, setId] = useState(0);
	const { data, isLoading, isPending, isFetching } = useQuery({
		queryKey: ['posts', id],
		queryFn: getPosts,
		enabled: id > 0
	});
	console.log({ data, isLoading, isPending, isFetching });
	return (
		<>
			<h1>Query 1</h1>
			<Button
				variant='outlined'
				onClick={() => setId(prevId => prevId + 1)}
				sx={{ alignSelf: 'flex-start' }}
				size='large'
			>
				Increment ID
			</Button>
		</>
	);
}

export async function getPosts({ queryKey }) {
	const { data } = await axios.get('https://jsonplaceholder.org/posts/' + queryKey[1]);
	return data;
}
