import React, { useContext, useEffect, useState } from 'react';
import { MovieCard } from '../components/MovieCard';
import { get } from '../utils/httpClient';
import { Loader } from '../components/Loader';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import { context } from '../App';

const MoviesContainer = styled.div`
	max-width: 1248px;
	width: 100%;
`;

const ListContainer = styled.ul`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, 14em);
	gap: 2em;
	justify-content: center;
	margin: 1em 0;
	@media (max-width: 560px) {
		& {
			gap: 0.5em;
			grid-template-columns: repeat(2, 1fr);
		}
	}
`;

const Title = styled.h1`
	font-size: 1em;
	margin-top: 1em;
	text-align: center;
`;

const Main = styled.main`
	padding: 2em;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 2em;

	@media (max-width: 560px) {
		padding: 2em 0.5em 1em 0.5em;
	}
`;

export const Genres = () => {
	const [movies, setMovies] = useState([]);
	const [loader, setLoader] = useState(true);
	const [hasMore, setHasMore] = useState(true);
	const [page, setPage] = useState(1);
	const { genres } = useContext(context);

	useEffect(() => {
		const searchUrl = '/discover/movie?with_genres=' + genres + '&page' + page;

		get(searchUrl).then((data) => {
			setMovies((prevData) => prevData.concat(data.results));
			setHasMore(page < data.total_pages);
			setLoader(false);
		});
	}, [page, genres]);

	if (loader) {
		return <Loader />;
	}

	return (
		<Main>
			<MoviesContainer>
				<Title>Genres</Title>
				<InfiniteScroll
					dataLength={movies.length}
					hasMore={hasMore}
					next={() => setPage((prePage) => prePage + 1)}
					loader={<Loader />}
					scrollThreshold={0.9}
					endMessage={<p>No hay más peliculas</p>}
				>
					<ListContainer>
						{movies?.map((movie) => (
							<MovieCard
								key={movie.id}
								title={movie.title}
								image={movie.poster_path}
								id={movie.id}
							/>
						))}
					</ListContainer>
				</InfiniteScroll>
			</MoviesContainer>
		</Main>
	);
};
