import axios from 'axios';
import { useEffect, useState } from 'react';

type Developer = {
	devId: string;
	devName: string;
};

function useDevelopers() {
	const [apiData, setApiData] = useState<Developer[]>([]);

	async function addDev(devNameText: string) {
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
			console.log(data.data);
		} catch (err: unknown) {
			console.error((err as Error).message);
		}
	}

	async function getApiData() {
		try {
			const response = await axios.get(
				'http://localhost:8080/get/devs'
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

	return { apiData, addDev };
}

export default useDevelopers;
