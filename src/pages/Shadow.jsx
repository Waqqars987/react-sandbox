import { useRef, useLayoutEffect } from 'react';
import { createRoot } from 'react-dom/client';

import css from './shadow.scss';

export const Box = () => {
	return (
		<>
			<style>{css}</style>
			<div className='box'>Box</div>
		</>
	);
};

export default function TestWrapper() {
	const shadowHost = useRef();

	useLayoutEffect(() => {
		if (!shadowHost.current.shadowRoot) {
			const shadowRoot = shadowHost.current.attachShadow({ mode: 'open' });

			const root = createRoot(shadowRoot);
			root.render(<Box />);
		}
	}, []);

	return <section ref={shadowHost}></section>;
}
