import { ReactNode } from 'react';
import useProjects from '../../hooks/useProjects';
import AddProject from './AddProject';
import ProjectHeader from './ProjectHeader';
import ProjectItem from './ProjectItem';
import './projects.css';

import { v4 as uuidv4 } from 'uuid';

function Projects() {
	const { apiData, refreshProjectList, isLoading } = useProjects();

	const projectListElements: ReactNode = apiData.map((proj) => (
		<ProjectItem
			key={uuidv4()}
			projectId={proj.projectId}
			projTitle={proj.projectTitle}
			projDateCreated={proj.dateCreated}
			refreshProjectList={refreshProjectList}
		/>
	));

	return (
		<div className='projects'>
			<AddProject triggerRefresh={refreshProjectList} />
			<ProjectHeader />
			{!isLoading ? projectListElements : <p>Loading...</p>}
		</div>
	);
}

export default Projects;
