import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Stack, Typography, Button, Box } from '@mui/material';

import { decrement, increment, reset } from '../store/slices/counter';
// import './counter.scss'; // CSS is also lazily loaded

function Counter() {
	const value = useSelector(({ counter }) => counter.value);
	const dispatch = useDispatch();

	useEffect(() => () => dispatch(reset()), [dispatch]);

	return (
		<Box p={2}>
			<Typography variant='h3' component='h1'>
				Counter
			</Typography>

			<Typography variant='body1' my={2}>
				Value: {value}
			</Typography>

			<Stack direction={'row'} spacing={2} mt={2}>
				<Button variant='contained' color='info' size='small' onClick={() => dispatch(increment())}>
					Increase
				</Button>
				<Button variant='contained' color='error' size='small' onClick={() => dispatch(decrement())}>
					Decrease
				</Button>
			</Stack>
		</Box>
	);
}

export default Counter;
