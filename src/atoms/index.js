import axios from 'axios';
import { atom } from 'jotai';

const sleep = (ms = 1000) => new Promise(resolve => setTimeout(() => resolve(), ms));

export const count = atom(0);

export const posts = atom(async () => {
	await sleep();
	const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
	return data;
});
