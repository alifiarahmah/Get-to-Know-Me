import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/navbar.js';
import Content from './components/content.js';
import Footer from './components/footer.js';
import './App.css';
import background from './img/4907157.jpg';

function App() {
	return (
		<div class="page-container" style={{ 
			backgroundImage: `url(${background})`,
			backgroundAttachment: `fixed`,
			backgroundSize: `cover`,
		}}>
			<BrowserRouter>
			<NavBar/>
			<div>
				<Content/>
				<Footer />
			</div>
			</BrowserRouter>
		</div>
	);
}

export default App;