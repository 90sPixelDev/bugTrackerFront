import './developers.css';

import AddDev from './AddDev';
import DeveloperHeader from './DeveloperHeader';
import DeveloperItem from './DeveloperItem';

import useDevelopers from '../../hooks/useDevelopers';

import { v4 as uuidv4 } from 'uuid';
import { ReactNode } from 'react';

function Developers() {
	const { apiData, isLoading, refreshDevsList } = useDevelopers();

	const devsListElement: ReactNode = apiData?.map((dev) => (
		<DeveloperItem
			key={uuidv4()}
			devId={dev.devId}
			devName={dev.devName}
			refreshDevsList={refreshDevsList}
		/>
	));

	return (
		<div className='developers'>
			<AddDev triggerRefresh={refreshDevsList} />
			<DeveloperHeader />
			{!isLoading ? devsListElement : <p>Loading...</p>}
		</div>
	);
}

export default Developers;
