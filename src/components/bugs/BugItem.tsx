import React from 'react';
import useBugs from '../../hooks/useBugs';
import './bugItem.css';

type Props = {
	bugId: string;
	bugName: string;
	bugDescription: string;
	priority: string;
	timeCreated: string;
	projectId: string;
	refreshDevsList: () => void;
};

function BugItem({
	bugId,
	bugName,
	priority,
	projectId,
	timeCreated,
	refreshDevsList,
}: Props) {
	const { deleteBug } = useBugs();

	const deleteBugFunc = () => {
		deleteBug(Number.parseInt(bugId));
		refreshDevsList();
	};

	return (
		<div className='developer-item'>
			<p className='bug-id'>{bugId}</p>
			<p className='bug-name'>{bugName}</p>
			<p className='bug-priority'>{priority}</p>
			<p className='bug-projectId'>{projectId}</p>
			<p className='bug-timeCreated'>{timeCreated}</p>
			<div className='bug-btn-container'>
				<button className='bug-btn' onClick={deleteBugFunc}>
					X
				</button>
			</div>
		</div>
	);
}

export default BugItem;
