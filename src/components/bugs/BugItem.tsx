import React from 'react';
import useBugs from '../../hooks/useBugs';
import './bugItem.css';

type Props = {
	bugId: string;
	bugName: string;
	bugDescription: string;
	priority: string;
	timeCreated: string;
	project: string;
	refreshDevsList: () => void;
};

function BugItem({
	bugId,
	bugName,
	priority,
	project,
	timeCreated,
	refreshDevsList,
}: Props) {
	const { deleteBug } = useBugs();

	const deleteBugFunc = () => {
		deleteBug(Number.parseInt(bugId));
		refreshDevsList();
	};

	return (
		<div className='bug-item'>
			<p className='bug-id'>{bugId}</p>
			<p className='bug-name'>{bugName}</p>
			<p className='bug-priority'>{priority}</p>
			<p className='bug-project'>{project}</p>
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
