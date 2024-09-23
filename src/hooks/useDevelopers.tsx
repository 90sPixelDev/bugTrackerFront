import axios from 'axios';
import { useEffect, useState } from 'react';

type Developer = {
	devId: string;
	devName: string;
};

function useDevelopers() {
	const [apiData, setApiData] = useState<Developer[]>([]);
	const [refresh, setRefresh] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const refreshDevsList = () => {
		setRefresh((prevState) => !prevState);
		console.log('useDev Refresh: ', refresh);
	};

	const addDev = async (devNameText: string) => {
		const newData = {
			devName: devNameText,
		};
		try {
			const response = await axios.post(
				'http://localhost:8080/add/dev',
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

	const deleteDev = async (devId: number) => {
		try {
			const response = await axios.delete(
				`http://localhost:8080/delete/dev/${devId}`
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

	const getDevelopersData = async () => {
		try {
			const response = await axios.get(
				'http://localhost:8080/get/devs'
			);
			const data = await response.data;
			if (!response.status) {
				throw new Error(`Response status: ${response.status}`);
			}

			setApiData([...data.data]);
			setIsLoading(false);
		} catch (err: unknown) {
			console.error((err as Error).message);
		}
	};

	useEffect(() => {
		setIsLoading(true);
		getDevelopersData();
	}, [refresh]);

	return {
		apiData,
		deleteDev,
		refresh,
		refreshDevsList,
		getDevelopersData,
		addDev,
		isLoading,
	};
}

export default useDevelopers;
