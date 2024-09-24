import useDevelopers from '../../hooks/useDevelopers';
import './developerItem.css';

type Developer = {
	devId: string;
	devName: string;
	refreshDevsList: () => void;
};

function DeveloperItem({ devId, devName, refreshDevsList }: Developer) {
	const { deleteDev } = useDevelopers();

	const deleteDevFunc = () => {
		deleteDev(Number.parseInt(devId));
		refreshDevsList();
	};

	return (
		<div className='developer-item'>
			<p className='dev-id'>{devId}</p>
			<p className='dev-name'>{devName}</p>
			<div className='dev-btn-container'>
				<button className='dev-btn' onClick={deleteDevFunc}>
					X
				</button>
			</div>
		</div>
	);
}

export default DeveloperItem;
