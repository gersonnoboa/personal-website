<script>
	import RootSection from './RootSection.svelte';

	let informationSnippets = [
		{
			title: 'Email',
			subtitle: 'Contact me!',
			type: 'email',
			additionalInfo: {
				main: 'mailto:gerson.noboa@outlook.com'
			}
		},
		{
			title: 'Age',
			subtitle: '31 years old',
			type: 'string'
		},
		{
			title: 'Born in',
			subtitle: 'Guayaquil, Ecuador',
			type: 'string'
		},
		{
			title: 'Living in',
			subtitle: 'Tallinn, Estonia',
			type: 'string'
		}
	];
</script>

<RootSection additionalClasses="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 bg-base-100">
	{#each informationSnippets as information}
		<div class="card shadow-xl bg-neutral break-all">
			<div class="card-body">
				<h2 class="card-title">{information.title}</h2>
				{#if information.type == 'email'}
					<a class="link" href={information.additionalInfo?.main || ''}>{information.subtitle}</a>
				{:else if information.type == 'string'}
					<p>{information.subtitle}</p>
				{/if}
			</div>
		</div>
	{/each}
</RootSection>
