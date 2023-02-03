import React from 'react';
import styles from './Search.module.css';

export const Search = () => {
	return (
		<form className={styles.searchContainer}>
			<div className={styles.searchBox}>
				<input className={styles.searchInput} type="text" />
				<button className={styles.searchButton} type="submit">
					Search
				</button>
			</div>
		</form>
	);
};
