import useProjects from '../../hooks/useProjects';
import './projectItem.css';

type Props = {
	projectId: number;
	projTitle: string;
	projDateCreated: string;
	refreshProjectList: () => void;
};

export default function ProjectItem({
	projTitle,
	projectId,
	projDateCreated,
	refreshProjectList,
}: Props) {
	const { deleteProject } = useProjects();

	const deleteDevFunc = () => {
		deleteProject(projectId);
		refreshProjectList();
	};
	return (
		<div className='project-item'>
			<p className='proj-id'>{projectId}</p>
			<p className='proj-title'>{projTitle}</p>
			<p className='proj-date'>{projDateCreated}</p>
			<div className='proj-btn-container'>
				<button className='proj-btn' onClick={deleteDevFunc}>
					X
				</button>
			</div>
		</div>
	);
}
