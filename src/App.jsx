import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Tech from './components/Tech/Tech';
import Footer from './components/Footer/Footer';

const App = () => {
	return (
		<>
			<Header />
			<Home />
			<Projects />
			<Tech />
			<About />
			<Footer />
		</>
	);
};

export default App;
