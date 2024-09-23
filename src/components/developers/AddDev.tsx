import { useState } from 'react';
import './addDev.css';

import useDevelopers from '../../hooks/useDevelopers';

type Props = {
	triggerRefresh: () => void;
};

function AddDev(props: Props) {
	const [devNameText, setDevNameText] = useState('');

	const { addDev } = useDevelopers();

	const updateDevNameText = (e: React.ChangeEvent<HTMLInputElement>) => {
		setDevNameText((prevstate) => (prevstate = e.target.value));
	};

	const addDevFunc = () => {
		addDev(devNameText);
		props.triggerRefresh();
	};

	return (
		<div className='add-dev-container'>
			<input type='text' onChange={updateDevNameText} />
			<button onClick={addDevFunc}>Add New Dev</button>
		</div>
	);
}

export default AddDev;
