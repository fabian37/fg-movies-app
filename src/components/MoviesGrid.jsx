import React, { useEffect, useState } from 'react';
import { MovieCard } from './MovieCard';
import styles from './MoviesGrid.module.css';
import { get } from '../utils/httpClient';
import { Loader } from './Loader';

export const MoviesGrid = () => {
	const [movies, setMovies] = useState([]);
	const [loader, setLoader] = useState(true);

	useEffect(() => {
		setLoader(true);
		get('/discover/movie').then((data) => {
			setMovies(data.results);
			setLoader(false)
		});
	}, []);

	if (loader) {
		return <Loader />
	}

	return (
		<ul className={styles.listContainer}>
			{movies.map((movie) => (
				<MovieCard
					key={movie.id}
					title={movie.title}
					image={movie.poster_path}
					id={movie.id}
				/>
			))}
		</ul>
	);
};
