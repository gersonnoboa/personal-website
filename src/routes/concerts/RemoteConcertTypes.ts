export type RemoteArtist = {
	name: string,
	id: string,
	image_url: string
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
	id: number,
	start_date: string,
	act_set: RemoteAct[],
	venue: RemoteVenue
}
