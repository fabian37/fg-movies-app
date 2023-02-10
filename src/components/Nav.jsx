import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBars,
	faMagnifyingGlass,
	faXmark,
} from '@fortawesome/free-solid-svg-icons';
import imgGit from '../assets/github.png';
import imgIn from '../assets/linkedin.png';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { context } from '../App';

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
	background-color: ${(props) =>
		props.background ? 'rgb(15, 15, 15)' : 'transparent'};
	height: 4em;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.2em 2em;
	color: white;
	transition: 0.3s ease-in-out;
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

const NavContainer = styled.div`
	top: 0;
	left: ${(props) => (props.click ? 0 : '-100%')};
	opacity: ${(props) => (props.click ? 1 : 0)};
	position: absolute;
	background-color: rgba(0, 0, 0, 0.7);
	width: 100%;
	height: 100vh;
	transition: 0.3s ease-in-out;
`;

const NabBar = styled.nav`
	padding: 1.2em 2em 2em 2em;
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	gap: 3em;
	position: absolute;
	top: 0;
	left: 0;
	box-shadow: rgb(0 0 0 / 35%) 0px 2px 8px;
	background-color: rgb(15, 15, 15);
	width: 229px;
	height: 100vh;
`;

const List = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1em;
	align-items: flex-start;
	& a {
		color: aliceblue;
		text-decoration: none;
		transition: 0.3s ease-in;

		&:hover {
			color: #5153ff;
			margin-left: 1em;
		}
	}
`;

const SocialMedia = styled.div`
	display: flex;
	gap: 1em;
`;

export const Nav = () => {
	const [menu, setMenu] = useState(false);
	const [scroll, setScroll] = useState(false);
	const { setGenres } = useContext(context);

	const handlerMenu = () => {
		setMenu(!menu);
	};

	const handlerScroll = () => {
		if (window.scrollY >= 156) {
			setScroll(true);
		} else {
			setScroll(false);
		}
	};

	window.addEventListener('scroll', handlerScroll);

	return (
		<Header background={scroll}>
			<NavContainer click={menu} onClick={handlerMenu}>
				<NabBar>
					<StyledFontAwesomeIcon icon={faXmark} onClick={handlerMenu} />
					<List>
						<Link to="/">Movies</Link>
						<Link to="/series">Series</Link>
					</List>
					<List>
						<Link to="/genres" onClick={()=> setGenres(28)}>
							Action
						</Link>
						<Link to="/genres" onClick={()=> setGenres(35)}>
							Comedy
						</Link>
						<Link to="/genres" onClick={()=> setGenres(99)}>
							Documentary
						</Link>
						<Link to="/genres" onClick={()=> setGenres(18)}>
							Drama
						</Link>
						<Link to="/genres" onClick={()=> setGenres(878)}>
							Science Fiction
						</Link>
					</List>
					<SocialMedia>
						<a
							href="https://github.com/fabian37"
							target="_blank"
							rel="noreferrer"
						>
							<img src={imgGit} alt="github" />
						</a>

						<a
							href="https://www.linkedin.com/in/fabian37/"
							target="_blank"
							rel="noreferrer"
						>
							<img src={imgIn} alt="github" />
						</a>
					</SocialMedia>
					<p>Handcrafted by Fabian Gomez</p>
				</NabBar>
			</NavContainer>
			<StyledFontAwesomeIcon icon={faBars} onClick={handlerMenu} />
			<LogoContainer to="./">
				<Image src={logo} alt="logo" />
				<Title>FG MOVIES</Title>
			</LogoContainer>
			<Link to="/">
				<StyledFontAwesomeIcon icon={faMagnifyingGlass} />
			</Link>
		</Header>
	);
};
