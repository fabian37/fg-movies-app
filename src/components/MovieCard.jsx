import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MovieCard.module.css';

export const MovieCard = ({ title, image, id }) => {
	const imageUrl = 'https://image.tmdb.org/t/p/w300' + image;

	return (
		<Link to={'/movies/' + id}>
			<li className={styles.card}>
				<img src={imageUrl} alt={title} />
				<div>{title}</div>
			</li>
		</Link>
	);
};
