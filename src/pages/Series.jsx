import React from 'react';
import styled from 'styled-components';
import { Search } from '../components/Search';
import { useQuery } from '../hooks/useQuery';
import { SeriesGrid } from '../components/SeriesGrid';
import { useDebounce } from '../hooks/useDebounce';

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

export const Series = () => {
	const query = useQuery();
	const search = query.get('search');
	const debouncedSearch = useDebounce(search, 300);
	return (
		<Main>
			<Search />
			<SeriesGrid key={debouncedSearch} search={debouncedSearch} />
		</Main>
	);
};
