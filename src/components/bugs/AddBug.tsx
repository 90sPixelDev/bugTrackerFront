import React, { useState } from 'react';
import useBugs from '../../hooks/useBugs';

type Props = {
	triggerRefresh: () => void;
};

function AddBug(props: Props) {
	const [bugNameText, setBugNameText] = useState('');
	const [bugPriorityText, setBugPriorityText] = useState('');
	const [bugPIDText, setBugPIDText] = useState('');

	const { createBug } = useBugs();

	const updateBugName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setBugNameText((prevstate) => (prevstate = e.target.value));
	};
	const updateBugPriority = (e: React.ChangeEvent<HTMLInputElement>) => {
		setBugPriorityText((prevstate) => (prevstate = e.target.value));
	};
	const updateBugPID = (e: React.ChangeEvent<HTMLInputElement>) => {
		setBugPIDText((prevstate) => (prevstate = e.target.value));
	};

	const createBugFunc = () => {
		console.log(bugNameText);
		createBug(bugNameText, bugPriorityText, bugPIDText);
		props.triggerRefresh();
	};

	return (
		<div className='add-proj-container'>
			<input type='text' placeholder='name' onChange={updateBugName} />
			<input
				type='text'
				placeholder='priority level'
				onChange={updateBugPriority}
			/>
			<input type='text' placeholder='pid' onChange={updateBugPID} />
			<button onClick={createBugFunc}>Create New Bug</button>
		</div>
	);
}

export default AddBug;
