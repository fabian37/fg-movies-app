import { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Home } from './pages/Home';
import { MovieDetail } from './pages/MovieDetail';
import { Genres } from './pages/Genres';
import styles from './App.module.css';
import { Series } from './pages/Series';

export const context = createContext();

function App() {
	const [genres, setGenres] = useState(28);
	return (
		<div className={styles.app}>
			<BrowserRouter>
				<context.Provider value={{ genres, setGenres }}>
					<Nav />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/movies/:movieId" element={<MovieDetail />} />
						<Route path="/genres" element={<Genres key={genres} />} />
						<Route path="/series" element={<Series key={genres} />} />
						<Route path="*" element={<Home />} />
					</Routes>
				</context.Provider>
			</BrowserRouter>
		</div>
	);
}

export default App;
