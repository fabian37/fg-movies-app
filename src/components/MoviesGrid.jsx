import React, { useEffect, useState } from 'react';
import { MovieCard } from './MovieCard';
import { get } from '../utils/httpClient';
import { Loader } from './Loader';
import styled from 'styled-components';

const ListContainer = styled.ul`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, 14em);
	gap: 2em;
	justify-content: center;
	margin: 1em 0;
	@media (max-width: 560px) {
		& {
			grid-template-columns: 100%;
		}
	}
`;

export const MoviesGrid = () => {
	const [movies, setMovies] = useState([]);
	const [loader, setLoader] = useState(true);

	useEffect(() => {
		setLoader(true);
		get('/discover/movie').then((data) => {
			setMovies(data.results);
			setLoader(false);
		});
	}, []);

	if (loader) {
		return <Loader />;
	}

	return (
		<>
			<ListContainer>
				{movies.map((movie) => (
					<MovieCard
						key={movie.id}
						title={movie.title}
						image={movie.poster_path}
						id={movie.id}
					/>
				))}
			</ListContainer>
		</>
	);
};
