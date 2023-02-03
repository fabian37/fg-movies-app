import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { LandingPage } from './pages/LandingPage';
import { MovieDetail } from './pages/MovieDetail';
import { Footer } from './components/Footer';
import  styles  from './App.module.css'

function App() {
	return (
		<div className={styles.app}>
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route exact path='/' element={<LandingPage />} />
					<Route exact path='/movies/:movieId' element={<MovieDetail />} />
 				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
