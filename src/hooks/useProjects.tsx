import { useEffect, useState } from 'react';

import axios from 'axios';

type Project = {
	developers: Array<string>;
	projectId: number;
	projectTitle: string;
	dateCreated: string;
};

function useProjects() {
	const [apiData, setApiData] = useState<Project[]>([]);
	const [refresh, setRefresh] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const refreshProjectList = () => {
		setRefresh((prevState) => !prevState);
		console.log('useProjects Refresh: ', refresh);
	};

	const addProject = async (projectName: string) => {
		const newData = {
			projectTitle: projectName,
		};
		console.log(newData);
		try {
			const response = await axios.post(
				'http://localhost:8080/add/project',
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

	const deleteProject = async (projectId: number) => {
		try {
			const response = await axios.delete(
				`http://localhost:8080/delete/project/${projectId}`
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

	async function getProjectsData() {
		try {
			const response = await axios.get(
				'http://localhost:8080/get/projects'
			);
			const data = await response.data.data;
			if (!response.status) {
				throw new Error(`Response status: ${response.status}`);
			}

			setApiData([...data]);
			setIsLoading(false);
		} catch (err: unknown) {
			console.error((err as Error).message);
		}
	}

	useEffect(() => {
		setIsLoading(true);
		getProjectsData();
	}, [refresh]);

	return {
		apiData,
		isLoading,
		refreshProjectList,
		deleteProject,
		addProject,
	};
}

export default useProjects;
