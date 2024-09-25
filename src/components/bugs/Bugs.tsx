import './bugs.css';
import { ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import BugHeader from './BugHeader';
import useBugs from '../../hooks/useBugs';
import BugItem from './BugItem';
import AddBug from './AddBug';

type Bug = {
	bugId: string;
	bugName: string;
	bugDescription: string;
	priority: string;
	timeCreated: string;
	project: { projectId: string };
};

function Bugs() {
	const { apiData, isLoading, refreshBugsList } = useBugs();

	const bugListElement: ReactNode = apiData?.map((bug: Bug) => (
		<BugItem
			key={uuidv4()}
			bugId={bug.bugId}
			bugName={bug.bugName}
			bugDescription={bug.bugDescription}
			priority={bug.priority}
			project={bug.project.projectId}
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
