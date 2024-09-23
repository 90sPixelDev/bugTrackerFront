import './projectItem.css';

type Project = {
	projId: number;
	projTitle: string;
	projDateCreated: string;
};

export default function ProjectItem({
	projTitle,
	projId,
	projDateCreated,
}: Project) {
	return (
		<div className='project-item'>
			<p className='proj-id'>{projId}</p>
			<p className='proj-title'>{projTitle}</p>
			<p className='proj-date'>{projDateCreated}</p>
			<div className='proj-btn-container'>
				<button className='proj-btn'>Delete</button>
			</div>
		</div>
	);
}
