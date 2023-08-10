import './Projects.scss';
import { projects } from '../../config';
import ProjectCard from '../ProjectCard/ProjectCard';
import { v4 as uuidv4 } from 'uuid';
import bg from './../../assets/bg3.svg';

const Projects = () => {
	return (
		<section className="projects-wrapper" id="projects">
			<img className="bg-img" src={bg} />
			<div className="project">
				<div className="horizontal-line"></div>
				<h2 className="heading">Projects</h2>
				<div className="project-list">
					{projects.map(project => (
						<ProjectCard key={uuidv4()} project={project} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
