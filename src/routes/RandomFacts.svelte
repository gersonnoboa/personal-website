<script>
	import RandomFact from './RandomFact.svelte';
	import RootSection from './RootSection.svelte';

	let facts = [
		{
			title: 'Years of experience',
			value: '9'
		},
		{
			title: 'GitHub Repos',
			value: '52'
		},
		{
			title: 'Programming languages used',
			value: '12'
		},
		{
			title: 'Apps in App Store',
			value: '6'
		},
		{
			title: 'Watching F1 since',
			value: '2002'
		},
		{
			title: 'Concerts attended',
			value: '44'
		},
		{
			title: 'Countries visited',
			value: '22'
		},
		{
			title: 'Gaming consoles owned',
			value: '11'
		},
		{
			title: 'Liked songs in Spotify',
			value: '2000+'
		}
	];
</script>

<RootSection additionalClasses="bg-base-200">
	<p class="text-3xl text-center">Random Facts</p>
	<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
		{#each facts as fact}
			<RandomFact {...fact} />
		{/each}
	</div>
</RootSection>
