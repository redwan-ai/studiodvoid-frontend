import React from 'react';
import NavBar from '../NavBar/NavBar';
import ProjectsShowcase from '../ProjectsShowcase/ProjectsShowcase';
import SubFooter from '../SubFooter/SubFooter';

const Projects = () => {
    return (
        <div className=''>
            <NavBar />
            <ProjectsShowcase />
            <SubFooter />
        </div>
    );
};

export default Projects;