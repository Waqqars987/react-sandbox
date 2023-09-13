import { useEffect } from 'react';

export const useBeforeUnload = ({ when, message }) => {
	useEffect(() => {
		const handleBeforeUnload = event => {
			event.preventDefault();
			event.returnValue = message;
			return message;
		};

		if (typeof when === 'function' ? when() : when) {
			window.addEventListener('beforeunload', handleBeforeUnload);
		}

		return () => window.removeEventListener('beforeunload', handleBeforeUnload);
	}, [when, message]);
};
