import { useEffect, useState } from 'react';

import axios from 'axios';

type Project = {
	developers: Array<string>;
	projectId: number;
	projectTitle: string;
	dateCreated: string;
};

export default function useProjects() {
	const [apiData, setApiData] = useState<Project[]>([]);

	async function getApiData() {
		try {
			const response = await axios.get(
				'http://localhost:8080/get/projects'
			);
			if (!response.status) {
				throw new Error(`Response status: ${response.status}`);
			}

			const data = await response.data;
			console.log(data.data);
			setApiData(data.data);
		} catch (err: unknown) {
			console.error((err as Error).message);
		}
	}

	useEffect(() => {
		getApiData();
	}, []);

	return apiData;
}
