import React from 'react';
import styles from './Footer.module.css';
import imgGit from '../assets/github.png';
import imgIn from '../assets/linkedin.png';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.name}>Handcrafted by Fabian Gomez</div>
			<div className={styles.mediaContainer}>
				<a href="https://github.com/fabian37" target="_blank" rel="noreferrer">
					<img className={styles.socialMedia} src={imgGit} alt="github" />
				</a>

				<a
					href="https://www.linkedin.com/in/fabian37/"
					target="_blank"
					rel="noreferrer"
				>
					<img className={styles.socialMedia} src={imgIn} alt="github" />
				</a>
			</div>
		</footer>
	);
};
