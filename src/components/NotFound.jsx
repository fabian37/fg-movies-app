import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ErrorContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1em;
	padding: 1em;
	height: 100vh;
	margin: auto auto auto auto;
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

const Error = styled.p`
	text-align: center;
`;

export const NotFound = () => {
	return (
		<ErrorContainer>
			<Error>The resource you requested could not be found.</Error>
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
		</ErrorContainer>
	);
};
