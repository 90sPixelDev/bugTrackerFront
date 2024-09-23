import './body.css';
import InfoSelector from './InfoSelector';
import Developers from '../developers/Developers';
import Projects from '../projects/Projects';
import { ReactNode, useEffect, useState } from 'react';

export default function Body() {
	const [dataSelector, setDataSelector] = useState<string>('projects');
	const [bodyDataView, setBodyDataView] = useState<ReactNode | null>(null);

	const switchDataDev = () => {
		setDataSelector('developers');
	};
	const switchDataProj = () => {
		setDataSelector('projects');
	};
	const switchDataBugs = () => {
		setDataSelector('bugs');
	};

	useEffect(() => {
		const setDataChannel = () => {
			console.log(
				'%c◆ Viewing:' + `%c ${dataSelector}`,
				'color: yellow',
				'color: white'
			);
			switch (dataSelector) {
				case 'projects':
					setBodyDataView(<Projects />);
					break;
				case 'developers':
					setBodyDataView(<Developers />);
					break;
				case 'bugs':
					setBodyDataView(<Projects />);
					break;
			}
		};

		return setDataChannel();
	}, [dataSelector]);

	return (
		<div className='main-content-wrapper'>
			<InfoSelector
				switchDataDev={switchDataDev}
				switchDataProj={switchDataProj}
				switchDataBugs={switchDataBugs}
			>
				{bodyDataView ? bodyDataView : <p>Loading...</p>}
			</InfoSelector>
		</div>
	);
}
