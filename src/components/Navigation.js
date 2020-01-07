import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
	return (
		<header className='main__header'>
			<nav className='main__nav'>
				<div className='nav__items'>
					<ul>
						<li className='mobile-hide'>
							<a href='/'>Home</a>
						</li>

						<li className='mobile-hide'>
							<a href='/'>About Us</a>
						</li>

						<li>
							<Link exact to='/register'>
								Sign Up
							</Link>
						</li>

						<li>
							<Link exact to='/' onClick={props.logOut}>
								Log Out
							</Link>
						</li>
						<li>
							<Link exact to='/login'>
								Log In
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Navigation;
