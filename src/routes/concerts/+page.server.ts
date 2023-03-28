import type { PageServerLoad } from './$types';
import ConcertConverter from './ConcertConverter';
import type { RemoteConcert } from './RemoteConcertTypes';

export const load = (async ({ params }) => {
	try {
		const response = await fetch(
			'https://bold-moon-5946.fly.dev/concerts/', {
			method: 'GET',
			headers: {
				'ContentType': 'application/json'
			}
		}
		);

		const data: RemoteConcert[] = await response.json();
		const convertedData = ConcertConverter.remoteConcertsToLocal(data);

		return { concerts: convertedData };
	} catch (err) {
		console.error(err);
	}
}) satisfies PageServerLoad;
