import './bugHeader.css';

function BugHeader() {
	return (
		<div className='bug-header'>
			<p className='bug-header-id'>ID</p>
			<p className='bug-header-name'>Name</p>
			<p className='bug-header-priority'>Priority</p>
			<p className='bug-header-projectId'>PID</p>
			<p className='bug-header-timeCreated'>Time Created</p>
		</div>
	);
}

export default BugHeader;
