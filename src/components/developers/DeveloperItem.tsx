import './developerItem.css';

type Developer = {
	devId: string;
	devName: string;
};

function DeveloperItem({ devId, devName }: Developer) {
	return (
		<div className='developer-item'>
			<p className='dev-id'>{devId}</p>
			<p className='dev-name'>{devName}</p>
			<div className='dev-btn-container'>
				<button className='dev-btn'>Delete</button>
			</div>
		</div>
	);
}

export default DeveloperItem;
