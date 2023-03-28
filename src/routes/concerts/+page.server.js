/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	try {
		const response = await fetch(
			'https://bold-moon-5946.fly.dev/concerts/', {
			method: 'GET',
			headers: {
				'ContentType': 'application/json'
			}
		}
		);

		const data = await response.json();
		const concerts = formattedConcerts(data);

		return { concerts: concerts };
	} catch (err) {
		console.error(err);
	}
}

function formattedConcerts(data) {
	let concerts = [];

	data.forEach(concert => {
		const startDate = concert.start_date;
		const formattedStartDate = formattedDate(startDate);
		const acts = formattedActs(concert.act_set);
		const venue = formattedVenue(concert.venue);


		concerts.push(new Concert(formattedStartDate, acts, venue).toPojo());
	});

	return concerts;
}

function formattedDate(date) {
	const dateParts = date.split('-');
	const jsDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);

	const options = { year: 'numeric', month: 'long', day: 'numeric' };
	return jsDate.toLocaleDateString('en-US', options);
}

function formattedActs(act_set) {
	var mainAct = {};
	let supportActs = [];
	act_set.forEach(act => {
		let actObject = new Act(act.artist.name, act.setlist_url).toPojo();
		if (act.is_main) {
			mainAct = actObject
		} else {
			supportActs.push(actObject);
		}
	});

	return {
		mainAct: mainAct,
		supportActs: supportActs
	}
}

function formattedVenue(venue) {
	return new Venue(venue.name, venue.country.name).toPojo();
}

class Act {
	constructor(name, setlistUrl) {
		this.name = name;
		this.setlistUrl = setlistUrl;
	}

	toPojo() {
		return { ...this }
	}
}

class Venue {
	constructor(name, countryName) {
		this.name = name;
		this.countryName = countryName;
	}

	toPojo() {
		return { ...this }
	}
}

class Concert {
	constructor(startDate, acts, venue) {
		this.startDate = startDate;
		this.acts = acts;
		this.venue = venue;
	}

	toPojo() {
		return { ...this }
	}
}
