import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import store from './store';
import { Router } from './Router';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
	<LocalizationProvider dateAdapter={AdapterDayjs}>
		<Provider store={store}>
			<RouterProvider router={Router} />
		</Provider>
	</LocalizationProvider>
);
