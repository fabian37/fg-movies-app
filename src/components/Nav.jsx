import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = styled.header`
	position: fixed;
	top: 0;
	z-index: 1;
	background-image: linear-gradient(
		rgba(0, 0, 0, 0.5) 0.48%,
		rgba(0, 0, 0, 0.47) 3.73%,
		rgba(0, 0, 0, 0.443) 6.67%,
		rgba(0, 0, 0, 0.424) 9.29%,
		rgba(0, 0, 0, 0.404) 11.98%,
		rgba(0, 0, 0, 0.384) 14.88%,
		rgba(0, 0, 0, 0.37) 18.18%,
		rgba(0, 0, 0, 0.34) 25%,
		rgba(0, 0, 0, 0.32) 32.4%,
		rgba(0, 0, 0, 0.28) 39.23%,
		rgba(0, 0, 0, 0.24) 47.42%,
		rgba(0, 0, 0, 0.2) 57.17%,
		rgba(0, 0, 0, 0.12) 68.67%,
		rgba(0, 0, 0, 0.06) 82.12%,
		rgba(0, 0, 0, 0) 97.71%
	);
	height: 4em;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.2em 2em;
	color: white;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
	color: white;
	font-size: 1.5rem;
	cursor: pointer;
`;

const LogoContainer = styled(Link)`
	align-items: center;
	color: aliceblue;
	display: flex;
	gap: 10px;
	justify-content: center;
	text-decoration: none;
`;

const Image = styled.img`
	height: 2em;
	pointer-events: none;
`;

const Title = styled.span`
	font-size: 1.2em;
	font-weight: bold;
	transition: 0.3s ease-in-out;

	&:hover {
		font-size: 1.1em;
	}
`;

export const Nav = () => {
	return (
		<Header>
			<StyledFontAwesomeIcon icon={faBars} />
			<LogoContainer to="./">
				<Image src={logo} alt="logo" />
				<Title>FG MOVIES</Title>
			</LogoContainer>
			<StyledFontAwesomeIcon icon={faMagnifyingGlass} />
		</Header>
	);
};
