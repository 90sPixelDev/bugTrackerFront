import { ReactNode } from 'react';
import './InfoSelector.css';

type Props = {
	children: ReactNode;
	switchDataDev: () => void;
	switchDataProj: () => void;
	switchDataBugs: () => void;
};

function InfoSelector({
	children,
	switchDataDev,
	switchDataProj,
	switchDataBugs,
}: Props) {
	return (
		<>
			<div className='info-selector'>
				<div>
					<button onClick={switchDataDev}>Developers</button>
				</div>
				<div>
					<button onClick={switchDataProj}>Projects</button>
				</div>
				<div>
					<button onClick={switchDataBugs}>Bugs</button>
				</div>
			</div>
			{children}
		</>
	);
}

export default InfoSelector;
