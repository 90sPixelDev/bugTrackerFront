import useProjects from '../../hooks/useProjects';
import ProjectHeader from './ProjectHeader';
import ProjectItem from './ProjectItem';
import './projects.css';

import { v4 as uuidv4 } from 'uuid';

export default function Projects() {
	const { apiData } = useProjects();

	return (
		<div className='projects'>
			<ProjectHeader />
			{apiData.map((proj) => (
				<ProjectItem
					key={uuidv4()}
					projId={proj.projectId}
					projTitle={proj.projectTitle}
					projDateCreated={proj.dateCreated}
				/>
			))}
		</div>
	);
}
