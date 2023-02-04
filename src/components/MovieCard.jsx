import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.li`
	filter: brightness(0.9);
	box-sizing: border-box;
	list-style: none;
	text-align: center;
	width: 100%;
	height: 100%;
	transition: 1s;
	border: 1px solid transparent;
	border-radius: 1em;
	padding: 0.1em;

	& img {
		width: 100%;
		height: auto;
		border-radius: 1em;
		box-shadow: 0.1em 0.1em 1em 0.1em rgba(0, 0, 0, 0.279);
		background-color: #5153ff;
	}

	& div {
		padding: 0.5em;
	}

	&:hover {
		filter: brightness(1.2);
		border: 1px solid #5153ff;
	}
`;

export const MovieCard = ({ title, image, id }) => {
	const imageUrl = 'https://image.tmdb.org/t/p/w300' + image;

	return (
		<Link to={'/movies/' + id}>
			<Card>
				<img src={imageUrl} alt={title} />
			</Card>
		</Link>
	);
};
