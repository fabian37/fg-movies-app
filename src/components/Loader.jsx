import React from 'react';
import styled from 'styled-components';

const LoaderContainer = styled.div`
	margin: 1em;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Loading = styled.div`
	position: relative;
	width: 40px;
	height: 40px;
	border-radius: 50%;

	&::before,
	&::after {
		content: '';
		position: absolute;
		border-radius: inherit;
	}

	&::before {
		width: 100%;
		height: 100%;
		background-image: linear-gradient(0deg, #7a51ff 0%, #5153ff 100%);
		animation: loader 0.5s infinite linear;
	}

	&::after {
		width: 85%;
		height: 85%;
		background-color: #2c2c2c;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	@keyframes loader {
		to {
			transform: rotate(360deg);
		}
	}
`;

export const Loader = () => {
	return (
		<LoaderContainer>
			<Loading></Loading>
		</LoaderContainer>
	);
};
