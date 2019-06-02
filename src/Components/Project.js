import React from 'react';
import {Link} from 'react-router-dom';

function Project(props) {
		const project = props.project
		return(
			<li className="project-wrapper">
				{/*<Link to={project.link}>*/}
				<a href={project.link}>
				<div >
		            <img src={project.img}/>
				</div>
					<h4 className="project-title">{project.title}</h4>
					<p className="project-description" dangerouslySetInnerHTML={{__html: project.description}} />
				{/*</Link>*/}
				</a>

			</li>
		)
}

export default Project