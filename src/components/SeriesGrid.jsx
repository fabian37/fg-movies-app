import React, { useEffect, useState } from 'react';
import { get } from '../utils/httpClient';
import { Loader } from './Loader';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import { SerieCard } from './SerieCard';

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

const NotFound = styled.p`
	margin-top: 3em;
`;

export const SeriesGrid = ({ search }) => {
	const [series, setSeries] = useState([]);
	const [loader, setLoader] = useState(true);
	const [hasMore, setHasMore] = useState(true);
	const [page, setPage] = useState(1);

	useEffect(() => {
		const searchUrl = search
			? '/search/tv?query=' + search + '&page=' + page
			: '/discover/tv?page=' + page;
		get(searchUrl).then((data) => {
			setSeries((prevData) => prevData.concat(data.results));
			console.log(data.results);
			setHasMore(page < data.total_pages);
			setLoader(false);
		});
	}, [page, search]);

	if (loader) {
		return <Loader />;
	}

	if (series.length === 0) {
		return <NotFound>We didn't find anything related to {search}</NotFound>;
	}

	return (
		<MoviesContainer>
			<Title>Popular Searches</Title>
			<InfiniteScroll
				dataLength={series.length}
				hasMore={hasMore}
				next={() => setPage((prePage) => prePage + 1)}
				loader={<Loader />}
				scrollThreshold={0.9}
			>
				<ListContainer>
					{series?.map((serie) => (
						<SerieCard
							key={serie.id}
							title={serie.name}
							image={serie.poster_path}
							id={serie.id}
						/>
					))}
				</ListContainer>
			</InfiniteScroll>
		</MoviesContainer>
	);
};
