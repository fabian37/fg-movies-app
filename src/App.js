import { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Home } from './pages/Home';
import { MovieDetail } from './pages/MovieDetail';
import { Genres } from './pages/Genres';
import { Series } from './pages/Series';
import { SerieDetail } from './pages/SerieDetail';
import GlobalStyles from './components/GlobalStyles';

export const context = createContext();

function App() {
	const [genres, setGenres] = useState(28);
	return (
		<>
			<GlobalStyles />
			<BrowserRouter>
				<context.Provider value={{ genres, setGenres }}>
					<Nav />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/movies/:movieId" element={<MovieDetail />} />
						<Route path="/genres" element={<Genres key={genres} />} />
						<Route path="/series" element={<Series key={genres} />} />
						<Route path="/series/:serieId" element={<SerieDetail />} />
						<Route path="*" element={<Navigate replace to='/' />} />
					</Routes>
				</context.Provider>
			</BrowserRouter>
		</>
	);
}

export default App;
