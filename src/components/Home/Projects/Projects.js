import React from 'react';
import classes from './Projects.module.scss';
import Project from './Project/Project';
const Projects = (props) => {
	return(
		<div className={classes.ProjectsContainer}>
            <hr className={classes.ruler}/>
            <h1>Most Recent Projects</h1>
            <div className={classes.Projects}>
                {props.projects.map((project, index) => 
                    <Project project={project} key={index}/>
                )}
            </div>
        </div>
	);
};

export default Projects; 