import './addProjects.css';
import { useState } from 'react';
import useProjects from '../../hooks/useProjects';

type Props = {
	triggerRefresh: () => void;
};

function AddProject(props: Props) {
	const [projNameText, setProjNameText] = useState('');

	const { addProject } = useProjects();

	const updateProjectName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setProjNameText((prevstate) => (prevstate = e.target.value));
	};

	const addProjFunc = () => {
		console.log(projNameText);
		addProject(projNameText);
		props.triggerRefresh();
	};

	return (
		<div className='add-proj-container'>
			<input type='text' onChange={updateProjectName} />
			<button onClick={addProjFunc}>Add New Project</button>
		</div>
	);
}

export default AddProject;
