import { useState } from 'react';
import bg from './../../assets/bg2.svg';
import resume from './../../assets/resume/vivek-resume.pdf';
import './Home.scss';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';

const Home = () => {
	const [isAtTop, setIsAtTop] = useState(true);
	window.onscroll = () => {
		window.scrollY > 50 ? setIsAtTop(false) : setIsAtTop(true);
	};

	return (
		<div className="home-wrapper" id="home">
			<img className="bg-img" src={bg} />
			<div className="home">
				<div className="info">
					<div>Hello I'm</div>
					<h1>VIVEK Reddy</h1>
					<div>
						Creative Full Stack Developer. Passionate to build
						things from scratch.
					</div>
					<a className="explore-more" download href={resume}>
						Download Resume
					</a>
				</div>
				{!isAtTop && (
					<a href="#" className="go-to-top">
						Go to Top
					</a>
				)}
				{!isAtTop && (
					<div className="sticky-socials">
						<a
							href="https://github.com/Vivekreddyv"
							target="_blank">
							<AiFillGithub />
						</a>
						<a
							href="https://www.linkedin.com/in/vivekreddyv/"
							target="_blank">
							<AiFillLinkedin />
						</a>
						<a
							href="https://www.instagram.com/L_a_m___v"
							target="_blank">
							<AiFillInstagram />
						</a>
					</div>
				)}
			</div>
		</div>
	);
};

export default Home;
