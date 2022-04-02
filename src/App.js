import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';
import Home from './views/pages/Home';
import Favorites from './views/pages/Favorites';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<DefaultLayout />}>
					<Route index element={<Home />} />
					<Route path='favorites' element={<Favorites />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default App;
