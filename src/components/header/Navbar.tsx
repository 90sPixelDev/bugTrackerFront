import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeProvider';
import './navbar.css';

export default function Navbar() {
	const theme = useContext(ThemeContext);

	return (
		<div className='navbar'>
			<h1>Bug Tracker 101</h1>
			<div className='nb-button-container'>
				<button>Log In</button>
				<button
					id='theme-change-btn'
					title='Change Theme'
					onClick={theme?.setTheme}
				>
					Theme
				</button>
			</div>
		</div>
	);
}
