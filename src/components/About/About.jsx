import './About.scss';

const About = () => {
	return (
		<section className="about-wrapper" id="about">
			<div className="about">
				<div className="horizontal-line"></div>
				<h2 className="heading">About Me</h2>
				<div className="about-me">
					My name is{' '}
					<strong
						style={{
							color: '#fffffff5',
						}}>
						Vivek Reddy
					</strong>{' '}
					and I'm from Nellore, India. Passionate about web development
					& love doing epic things with code.
				</div>
				<div className="career-path">
					<div>
						<div>
							<span>2017</span>
							<span className="line-style"></span>
						</div>
						<div>
							Completed High School in Narayana High
							School, Nellore
						</div>
					</div>
					<div>
						<div>
							<span>2019</span>
							<span className="line-style"></span>
						</div>
						<div>Completed Intermediate in Viswasai Junior 
							College, Nellore</div>
					</div>
					<div>
						<div>
							<span>2023</span>
							<span className="line-style"></span>
						</div>
						<div>
						Graduated from Narayana Engineering College, Nellore
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
