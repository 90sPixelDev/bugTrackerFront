import './developers.css';

import AddDev from './AddDev';
import DeveloperHeader from './DeveloperHeader';
import DeveloperItem from './DeveloperItem';

import useDevelopers from '../../hooks/useDevelopers';

import { v4 as uuidv4 } from 'uuid';

function Developers() {
	const { apiData } = useDevelopers();

	return (
		<div className='developers'>
			<AddDev />
			<DeveloperHeader />
			{apiData.map((dev) => (
				<DeveloperItem
					key={uuidv4()}
					devId={dev.devId}
					devName={dev.devName}
				/>
			))}
		</div>
	);
}

export default Developers;
