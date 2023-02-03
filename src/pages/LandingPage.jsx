import React from 'react';
import { MoviesGrid } from '../components/MoviesGrid';
import { Search } from '../components/Search';
import styles from './LandingPage.module.css';

export const LandingPage = () => {
	return (
		<main>
			<Search />
			<h1 className={styles.title}>Lists of films</h1>
			<MoviesGrid />
		</main>
	);
};
