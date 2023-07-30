import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import counterReducer from './slices/counter';
import postsReducer from './slices/posts';

const store = configureStore({
	reducer: {
		counter: counterReducer,
		posts: postsReducer
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
	devTools: import.meta.env.DEV
});

export default store;
