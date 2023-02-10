import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { get } from '../utils/httpClient';
import { Loader } from '../components/Loader';
import styled from 'styled-components';
import notImage from '../assets/imagenf.jpg';
import { NotFound } from '../components/NotFound';

const Main = styled.main`
	padding: 2em 0;
	margin-top: 2em;
	@media (max-width: 725px) {
		& {
			margin-top: 0em;
		}
	}
`;

const Title = styled.h2`
	margin-top: 2em;
	text-align: center;
	font-size: 1.5em;
`;

const DetailsContainer = styled.div`
	box-sizing: border-box;
	padding: 0 1em;
	display: flex;
	justify-content: center;
	gap: 1em;
	margin: 1em 0;

	@media (max-width: 725px) {
		& {
			flex-direction: column;
			align-items: center;
			width: 100%;
			margin-bottom: 2em;
		}
	}
`;

const Image = styled.img`
	border-radius: 1em;
	box-shadow: 0.1em 0.1em 1em 0.1em rgba(0, 0, 0, 0.279);
	max-width: 20em;
	height: auto;
	width: 100%;
`;

const Detail = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: justify;
	font-size: 1em;
	gap: 1em;
	max-width: 20em;
	height: auto;
`;

const BtnContainer = styled(Link)`
	text-decoration: none;
`;

const Btn = styled.button`
	margin-top: 1em;
	width: 100%;
	background: #5153ff;
	color: white;
	font-family: inherit;
	padding: 0.35em;
	padding-left: 1.2em;
	font-size: 17px;
	font-weight: 500;
	border-radius: 0.9em;
	border: none;
	letter-spacing: 0.05em;
	display: flex;
	align-items: center;
	box-shadow: 0.1em 0.1em 0.6em 0.2em #6186d76b;
	overflow: hidden;
	position: relative;
	height: 2.8em;
	padding-right: 3.3em;

	& div {
		background: white;
		margin-left: 1em;
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 2.2em;
		width: 2.2em;
		border-radius: 0.7em;
		box-shadow: 0.1em 0.1em 0.6em 0.2em #6186d7;
		right: 0.3em;
		transition: all 0.3s;
		rotate: 180deg;
	}

	&:hover div {
		width: calc(100% - 0.6em);
	}

	& div svg {
		width: 1.1em;
		transition: transform 0.3s;
		color: #3e5fad;
	}

	&:hover div svg {
		transform: translateX(0.1em);
	}

	&:active div {
		transform: scale(0.95);
	}
`;

export const MovieDetail = () => {
	const { movieId } = useParams();
	const [movie, setMovie] = useState(null);
	const [loader, setLoader] = useState(true);
	const [notFound, setNotFound] = useState(false);

	useEffect(() => {
		setLoader(true);
		get('/movie/' + movieId).then((data) => {
			console.log(data);
			if (!data.title) {
				setLoader(false);
				return setNotFound(true);
			} else {
				setLoader(false);
				setMovie(data);
				console.log(data);
			}
		});
	}, [movieId]);

	if (loader) {
		return <Loader />;
	}

	if (notFound) {
		return <NotFound />;
	}

	const imageUrl = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;

	return (
		<Main>
			<Title>Description</Title>
			<DetailsContainer>
				<Image
					src={movie.poster_path ? imageUrl : notImage}
					alt={movie?.title}
				/>
				<Detail>
					<p>
						<strong>Title: </strong>
						{movie?.title}
					</p>
					<p>
						<strong>Genres: </strong>
						{movie?.genres.map((genre) => genre.name).join(', ')}
					</p>
					<p>
						<strong>Description: </strong>
						{movie?.overview}
					</p>
					<BtnContainer to={'/'}>
						<Btn>
							Find another movie
							<div>
								<svg
									height="24"
									width="24"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M0 0h24v24H0z" fill="none"></path>
									<path
										d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
										fill="currentColor"
									></path>
								</svg>
							</div>
						</Btn>
					</BtnContainer>
				</Detail>
			</DetailsContainer>
		</Main>
	);
};
