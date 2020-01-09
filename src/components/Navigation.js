import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

const Navigation = () => {
	const logOut = () => {
		console.log('LOGGING OUT');

		localStorage.clear('token');
		return <Redirect to='/login' />;
	};
	return (
		<header className='main__header'>
			<nav className='main__nav'>
				<div className='nav__items'>
					<ul>
						<li className='mobile-hide'>
							<a href='/'>Home</a>
						</li>

						<li className='mobile-hide'>
							<a target="_blank" href='foodtrucktracker.netlify.com/about.html'>About Us</a>
						</li>

						<li>
							<Link exact to='/register'>
								Sign Up
							</Link>
						</li>

						<li>
							<Link exact to='/login' onClick={logOut}>
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
