import './bugs.css';
import { ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import BugHeader from './BugHeader';
import useBugs from '../../hooks/useBugs';
import BugItem from './BugItem';
import AddBug from './AddBug';

function Bugs() {
	const { apiData, isLoading, refreshBugsList } = useBugs();

	const bugListElement: ReactNode = apiData?.map((bug) => (
		<BugItem
			key={uuidv4()}
			bugId={bug.bugId}
			bugName={bug.bugName}
			bugDescription={bug.bugDescription}
			priority={bug.priority}
			projectId={bug.projects.projectId}
			timeCreated={bug.timeCreated}
			refreshDevsList={refreshBugsList}
		/>
	));

	return (
		<div className='bugs'>
			<AddBug triggerRefresh={refreshBugsList} />
			<BugHeader />
			{!isLoading ? bugListElement : <p>Loading...</p>}
		</div>
	);
}

export default Bugs;
