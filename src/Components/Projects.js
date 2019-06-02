import React from 'react';
import Project from './Project';


function Projects(props) {

	return(
		<ul className="project-grid">
			{props.projects.map((project, idx) => <Project key={idx} project={project} />)}
		</ul>
	)
}

export default Projects