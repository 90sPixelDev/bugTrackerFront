import './App.css';
import { Body, Footer, Navbar, Projects } from './components';

function App() {
	return (
		<div className='wrapper'>
			<Navbar />
			<Body>
				<Projects />
			</Body>
			<Footer />
		</div>
	);
}

export default App;
