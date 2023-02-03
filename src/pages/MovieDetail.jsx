import React, { useEffect, useState } from 'react';
import styles from './MovieDetail.module.css';
import { Link, useParams } from 'react-router-dom';
import { get } from '../utils/httpClient';
import { Loader } from '../components/Loader';
// import {Loader} from '../components/Loader'


export const MovieDetail = () => {
	const { movieId } = useParams();
	const [movie, setMovie] = useState(null);
	const [loader, setLoader] = useState(true);

	useEffect(() => {
		setLoader(true)
		get('/movie/' + movieId).then((data) => {
			setLoader(false)
			setMovie(data);
		});
	}, [movieId]);

	if (loader) {
		return <Loader />
	}

	if (!movie) {
		return null;
	}

	const imageUrl = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
	return (
		<>
			<main>
				{/* <Loader /> */}
				<h2 className={styles.title}>Description</h2>
				<div className={styles.detailsContainer}>
					<img
						className={`${styles.col} + ${styles.movieImage}`}
						src={imageUrl}
						alt={movie.title}
					/>
					<div className={`${styles.col} ${styles.movieDetail}`}>
						<p>
							<strong>Title: </strong>
							{movie.title}
						</p>
						<p>
							<strong>Genres: </strong>
							{movie.genres.map((genre) => genre.name).join(', ')}
						</p>
						<p>
							<strong>Description: </strong>
							{movie.overview}
						</p>
						<Link to={'/'} className="link">
							<button className={styles.btn}>
								Ver otras películas
								<div className={styles.icon}>
									<svg
										height="24"
										width="24"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M0 0h24v24H0z" fill="none"></path>
										<path
											d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
											fill="currentColor"
										></path>
									</svg>
								</div>
							</button>
						</Link>
					</div>
				</div>
			</main>
		</>
	);
};
