import './Footer.scss';

const Footer = () => {
	return (
		<div className="footer-wrapper">
			<div className="footer">
				<div className="top">
					<div className="">
						<div className="label">CALL</div>
						<a href="tel:+919391278797" className="content">
							+91 9391278797
						</a>
					</div>
					<div className="">
						<div className="label">EMAIL</div>
						<a
							href="mailto:saivivek1414@gmail.com"
							className="content">
							saivivek1414@gmail.com
						</a>
					</div>
				</div>
				<div className="bottom">Innovating One project at a time.</div>
			</div>
		</div>
	);
};

export default Footer;
