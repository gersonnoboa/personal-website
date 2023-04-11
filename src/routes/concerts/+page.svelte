<script>
	import RootSection from '../RootSection.svelte';
	import Concert from './Concert.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	$: ({ concerts } = data);
</script>

<RootSection additionalClasses="grid grid-cols-1 grid-flow-row sm:grid-cols-2 lg:grid-cols-3 gap-8">
	{#if concerts && concerts.length > 0}
		{#each concerts as concert}
			<Concert
				id={concert.id}
				artist={concert.mainAct.name}
				date={concert.startDate}
				country={concert.venue.countryName}
				venue={concert.venue.name}
				imageUrl={concert.mainAct.imageUrl}
			/>
		{/each}
	{:else}
		<p>No concerts</p>
	{/if}
</RootSection>
