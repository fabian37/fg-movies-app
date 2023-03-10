import React from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';

const Form = styled.form`
	align-items: center;
	display: flex;
	justify-content: center;
	margin: 1em 0;
	width: 100%;
`;

const SearchBox = styled.div`
	align-items: center;
	display: flex;
	justify-content: center;
	max-width: 1200px;
	width: 80%;
`;

const InputWrapper = styled.div`
	--width-of-input: 100%;
	--border-height: 1px;
	--border-before-color: rgba(221, 221, 221, 0.39);
	--border-after-color: #5153ff;
	--input-hovered-color: #69696b21;
	position: relative;
	min-width: 100%;
	width: var(--width-of-input);
`;

const Input = styled.input`
	color: #fff;
	font-size: 1rem;
	background-color: transparent;
	width: 100%;
	box-sizing: border-box;
	padding-inline: 0.5em;
	padding-block: 0.7em;
	border: none;
	border-bottom: var(--border-height) solid var(--border-before-color);

	&:hover {
		background: var(--input-hovered-color);
	}

	&:focus {
		outline: none;
	}

	&:focus ~ span {
		width: 100%;
	}
`;

const Span = styled.span`
	position: absolute;
	background: var(--border-after-color);
	width: 0%;
	height: 2px;
	bottom: 0;
	left: 0;
	transition: 0.3s;
`;

const Btn = styled.button`
	padding-right: 1em;
	border: none;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
	color: white;
	font-size: 1.5rem;
	cursor: pointer;
`;

export const Search = () => {
	const [query, setQuery] = useSearchParams();
	const search = query.get('search');
	const handlerSubmit = (e) => {
		e.preventDefault();
	};
	const handlerChange = (e) => {
		const value = e.target.value;
		setQuery({ search: value });
	};
	return (
		<Form onSubmit={handlerSubmit}>
			<SearchBox>
				<Btn type="submit">
					<StyledFontAwesomeIcon icon={faMagnifyingGlass} />
				</Btn>
				<InputWrapper id="search">
					<Input
						placeholder="What are you looking for?"
						required
						type="text"
						aria-label="Search Movies"
						value={search ?? ''}
						onChange={handlerChange}
					/>
					<Span></Span>
				</InputWrapper>
			</SearchBox>
		</Form>
	);
};
