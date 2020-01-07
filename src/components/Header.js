import React from 'react';
import Navigation from './Navigation';
import styled from 'styled-components';


const Header = (props) => {
	const HeaderContent = styled.div`width: 100%;`;
	return (
		<HeaderContent>
			<Navigation toggleLogin={props.toggleLogin} logOut={props.logOut} isLoggedIn={props.isLoggedIn} />
		</HeaderContent>
	);
};

export default Header;
