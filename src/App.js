import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import preloader from './assets/images/preloader.gif';

import {
	fetchFreelancers,
	toggleFreelancer,
} from './redux/slices/freelancerSlice';

const Home = React.lazy(() => import('./views/pages/Home'));
const Favorites = React.lazy(() => import('./views/pages/Favorites'));
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'));

const preloaderStyle = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	width: '100vw',
	height: '100vh',
};

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchFreelancers());
	}, []);

	const toggleFavoriteFreelancer = (id) => {
		dispatch(toggleFreelancer(id));
	};

	return (
		<Router>
			<Suspense
				fallback={
					<div style={preloaderStyle}>
						<img style={{ width: 100 }} src={preloader} alt='preloader' />
						<p>Loading...</p>
					</div>
				}
			>
				<Routes>
					<Route path='/' element={<DefaultLayout />}>
						<Route
							index
							element={
								<Home toggleFavoriteFreelancer={toggleFavoriteFreelancer} />
							}
						/>
						<Route
							path='favorites'
							element={
								<Favorites
									toggleFavoriteFreelancer={toggleFavoriteFreelancer}
								/>
							}
						/>
					</Route>
				</Routes>
			</Suspense>
		</Router>
	);
};

export default App;
