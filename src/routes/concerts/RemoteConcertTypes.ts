export type RemoteArtist = {
	name: string,
	id: string
}

export type RemoteAct = {
	is_main: boolean,
	artist: RemoteArtist,
	setlist_url: string
}

export type RemoteVenue = {
	id: number,
	name: string,
	country: RemoteCountry
}

export type RemoteCountry = {
	name: string
}

export type RemoteConcert = {
	start_date: string,
	act_set: RemoteAct[],
	venue: RemoteVenue
}
