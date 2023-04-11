import type { RemoteAct, RemoteVenue, RemoteConcert } from "./RemoteConcertTypes";

export default class ConcertConverter {
	static remoteConcertsToLocal(remoteConcerts: RemoteConcert[]): Concert[] {
		return remoteConcerts.map(element => {
			const startDate = ConcertConverter.formattedDate(element.start_date);
			const acts = ConcertConverter.formattedActs(element.act_set);
			const venue = ConcertConverter.formattedVenue(element.venue);

			const concert: Concert = {
				id: element.id,
				startDate: startDate,
				mainAct: acts[0],
				supportActs: acts[1],
				venue: venue
			};

			return concert
		});
	}

	private static formattedDate(date: string) {
		const dateParts: string[] = date.split('-');
		const numberDateParts: number[] = dateParts.map(x => +x);
		const jsDate = new Date(numberDateParts[0], numberDateParts[1] - 1, numberDateParts[2]);

		const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
		return jsDate.toLocaleDateString('en-US', options);
	}

	private static formattedActs(act_set: RemoteAct[]): [Act, Act[]] {
		let mainAct: Act = { name: "", setlistUrl: "", imageUrl: "" };
		const supportActs: Act[] = [];

		act_set.forEach(act => {
			const actObject = {
				name: act.artist.name,
				setlistUrl: act.setlist_url,
				imageUrl: act.artist.image_url
			};

			if (act.is_main) {
				mainAct = actObject
			} else {
				supportActs.push(actObject);
			}
		});

		return [mainAct, supportActs];
	}

	private static formattedVenue(venue: RemoteVenue): Venue {
		return {
			name: venue.name,
			countryName: venue.country.name
		};
	}
}

type Act = {
	name: string,
	setlistUrl: string
	imageUrl: string
}

type Venue = {
	name: string,
	countryName: string
}

type Concert = {
	id: number,
	startDate: string,
	mainAct: Act,
	supportActs: Act[],
	venue: Venue
}
