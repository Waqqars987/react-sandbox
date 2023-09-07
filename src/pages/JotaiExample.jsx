import React from 'react';
import { useAtom } from 'jotai';
import { Box, Typography, Stack, Button, Divider } from '@mui/material';

import { count as countAtom, posts as postAtom } from '../atoms';

function Jotai() {
	const [count, setCount] = useAtom(countAtom);
	const [post] = useAtom(postAtom);

	return (
		<Box p={2}>
			<Typography variant='h4' component={'h1'}>
				Jotai Count: {count}
			</Typography>

			<Stack direction={'row'} spacing={2} my={2}>
				<Button color='info' size='small' variant='contained' onClick={() => setCount(c => c + 1)}>
					+
				</Button>
				<Button color='error' size='smal' variant='contained' onClick={() => setCount(c => c - 1)}>
					-
				</Button>
			</Stack>

			<Divider variant='middle' />

			<Typography variant='h4' component={'h2'} my={2}>
				Jotai Async Data
			</Typography>

			<Typography component='pre'>{JSON.stringify(post, null, 4)}</Typography>
		</Box>
	);
}

export default Jotai;
