import React from 'react';
import { useAtom } from 'jotai';

import { count as countAtom, posts as postAtom } from '../atoms';

function Test() {
	const [count, setCount] = useAtom(countAtom);
	const [post] = useAtom(postAtom);

	return (
		<section>
			<h1>Jotai Count: {count}</h1>
			<div>
				<button style={{ padding: '1em 2em' }} onClick={() => setCount(c => c + 1)}>
					+
				</button>
				<button style={{ padding: '1em 2em' }} onClick={() => setCount(c => c - 1)}>
					-
				</button>
			</div>

			<h2>Jotai Async Data</h2>

			{JSON.stringify(post, null, 4)}
		</section>
	);
}

export default Test;
