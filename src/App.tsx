import './App.css';
import { Body, Footer, InfoSelector, Navbar, Projects } from './components';

function App() {
	return (
		<div className='wrapper'>
			<Navbar />
			<Body>
				<InfoSelector></InfoSelector>
				<Projects />
			</Body>
			<Footer />
		</div>
	);
}

export default App;
