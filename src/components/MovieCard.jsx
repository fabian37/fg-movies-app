import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import notFound from '../assets/imagenf.jpg';

const Card = styled.li`
	filter: brightness(0.9);
	box-sizing: border-box;
	list-style: none;
	text-align: center;
	width: 100%;
	height: 100%;
	border-radius: 1em;
	padding: 0.1em;
	position: relative;

	& img {
		width: 100%;
		height: auto;
		object-fit: cover;
		border-radius: 1em;
		box-shadow: 0.1em 0.1em 1em 0.1em rgba(0, 0, 0, 0.279);
		border: 1px solid transparent;
		transition: 1s;
	}

	& div {
		padding: 0.5em;
	}

	&:hover img {
		filter: brightness(1.2);
		border: 1px solid #5153ff;
	}

	&:hover div {
		opacity: 1;
	}
`;

const Detail = styled.div`
	align-items: center;
	justify-content: center;
	top: 68%;
	background: linear-gradient(
		0deg,
		rgba(2, 0, 36, 1) 0%,
		rgba(0, 0, 0, 0.6138830532212884) 57%,
		rgba(255, 255, 255, 0) 100%
	);
	display: flex;
	flex-direction: column;
	gap: 1em;
	color: white;
	position: absolute;
	width: 98%;
	height: 30%;
	border-radius: 0 0 1em 1em;
	opacity: 0;
	transition: 1s ease-out;
`;

const Title = styled.span`
	font-weight: 700;
`;

const SubTitle = styled.span`
	font-size: 0.8em;
`;

export const MovieCard = ({ title, image, id }) => {
	const imageUrl = 'https://image.tmdb.org/t/p/w300' + image;
	return (
		<Link to={'/movies/' + id}>
			<Card>
				<img src={image ? imageUrl : notFound} alt={title} />
				<Detail>
					<Title>{title}</Title>
					<SubTitle>More information</SubTitle>
				</Detail>
			</Card>
		</Link>
	);
};
