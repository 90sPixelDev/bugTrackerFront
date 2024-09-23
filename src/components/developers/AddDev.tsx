import useDevelopers from '../../hooks/useDevelopers';

function AddDev() {
	const { addDev } = useDevelopers();

	return (
		<div>
			<button onClick={() => addDev('Dev 1')}>Add Dev</button>
		</div>
	);
}

export default AddDev;
