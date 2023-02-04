import React from 'react';
import styled from 'styled-components';
import { MoviesGrid } from '../components/MoviesGrid';
import { Search } from '../components/Search';

const Main = styled.main`
	padding: 2em;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 2em;
`;

const Title = styled.h1`
	font-size: 1em;
	margin-top: 1em;
`;

export const Home = () => {
	return (
		<Main>
			<Search />
			<Title>Popular Searches</Title>
			<MoviesGrid />
		</Main>
	);
};
