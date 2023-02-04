import React from 'react';
import styles from './Nav.module.css';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

export const Nav = () => {
	return (
		<>
			<header className={styles.appHeader}>
				<Link className={styles.logoContainer} to="./">
					<img src={logo} className={styles.appLogo} alt="logo" />
					<span className={styles.logoTitle}>FG MOVIES</span>
				</Link>
			</header>
		</>
	);
};
