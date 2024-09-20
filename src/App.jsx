import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { Security } from '@okta/okta-react';
import { Provider } from 'react-redux';
import { Stack } from '@mui/material';

import store from './store';
import { Router } from './Router';
import Theme from './theme/Theme';
import Navbar from './components/Navbar';
import SkipLink from './components/SkipLink';

const OKTA_AUTH = new OktaAuth({
	clientId: import.meta.env.VITE_OKTA_CLIENT_ID,
	issuer: `https://${import.meta.env.VITE_OKTA_DOMAIN}/oauth2/default`,
	redirectUri: `${window.location.origin}/login/callback`,
	scopes: ['openid', 'profile', 'email'],
	pkce: true
});

const restoreOriginalUri = (_oktaAuth, originalUri) =>
	Router.navigate(toRelativeUrl(originalUri || '/', window.location.origin), { replace: true });

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Infinity,
			gcTime: Infinity,
			refetchInterval: false,
			refetchOnMount: false,
			refetchOnWindowFocus: false,
			refetchIntervalInBackground: false,
			refetchOnReconnect: false
		}
	}
});

function App() {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<QueryClientProvider client={queryClient}>
				<Provider store={store}>
					<Security oktaAuth={OKTA_AUTH} restoreOriginalUri={restoreOriginalUri}>
						<Theme>
							<SkipLink />
							<Navbar />
							{/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
							<Stack id='main-content' tabIndex={0} component='main' p={1}>
								<Outlet />
							</Stack>
						</Theme>
					</Security>
				</Provider>
			</QueryClientProvider>
		</LocalizationProvider>
	);
}

export default App;
