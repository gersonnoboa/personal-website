<script>
	import RootSection from '../RootSection.svelte';
	import Concert from './Concert.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<RootSection additionalClasses="grid grid-cols-1 grid-flow-row sm:grid-cols-2 lg:grid-cols-3 gap-8">
	{#each data.concerts as concert}
		<Concert
			artist={concert.acts.mainAct.name}
			date={concert.startDate}
			country={concert.venue.countryName}
			venue={concert.venue.name}
		/>
	{/each}
</RootSection>
