import axios from 'axios';
import { useEffect, useState } from 'react';

type Bugs = {
	bugId: string;
	bugName: string;
	bugDescription: string;
	priority: string;
	timeCreated: string;
	project: string;
};

function useBugs() {
	const [apiData, setApiData] = useState([]);
	const [refresh, setRefresh] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const refreshBugsList = () => {
		setRefresh((prevState) => !prevState);
		console.log('useDev Refresh: ', refresh);
	};

	const createBug = async (
		bugNameText: string,
		bugPriorityText: string,
		bugPIDText: string
	) => {
		const newData = {
			bugName: bugNameText,
			bugDescription: bugNameText,
			priority: bugPriorityText,
			project: { projectId: bugPIDText },
		};
		try {
			const response = await axios.post(
				'http://localhost:8080/add/bug',
				newData
			);
			if (!response.status) {
				throw new Error(`Response status: ${response.status}`);
			}

			const data = await response.data;
			console.log(data);
		} catch (err: unknown) {
			console.error((err as Error).message);
		}
	};

	const deleteBug = async (bugId: number) => {
		try {
			const response = await axios.delete(
				`http://localhost:8080/delete/bug/${bugId}`
			);
			if (!response.status) {
				throw new Error(`Response status: ${response.status}`);
			}

			const data = await response.data;
			console.log(data);
		} catch (err: unknown) {
			console.error((err as Error).message);
		}
	};

	const getBugsData = async () => {
		try {
			const response = await axios.get(
				'http://localhost:8080/get/bugs'
			);
			const data = await response.data.data;
			if (!response.status) {
				throw new Error(`Response status: ${response.status}`);
			}

			setApiData(data);
			setIsLoading(false);
		} catch (err: unknown) {
			console.error((err as Error).message);
		}
	};

	useEffect(() => {
		setIsLoading(true);
		getBugsData();
	}, [refresh]);

	return {
		apiData,
		deleteBug,
		refresh,
		refreshBugsList,
		getBugsData,
		createBug,
		isLoading,
	};
}

export default useBugs;
