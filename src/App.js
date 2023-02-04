import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Home } from './pages/Home';
import { MovieDetail } from './pages/MovieDetail';
import { Footer } from './components/Footer';
import  styles  from './App.module.css'

function App() {
	return (
		<div className={styles.app}>
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route exact path='/movies/:movieId' element={<MovieDetail />} />
 				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
