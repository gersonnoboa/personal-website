<script>
	import RootSection from './RootSection.svelte';
	let languages = [
		{
			name: 'Spanish',
			proficiency: 'Full professional proficiency',
			level: 'Native'
		},
		{
			name: 'English',
			proficiency: 'Full professional proficiency',
			level: 'TOEFL score 112/120'
		},
		{
			name: 'Estonian',
			proficiency: 'Limited working proficiency',
			level: 'B1 level'
		},
		{
			name: 'German',
			proficiency: 'Elementary proficiency',
			level: 'A1 level'
		}
	];
</script>

<RootSection additionalClasses="bg-base-100">
	<p class="text-3xl text-center">Languages</p>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
		{#each languages as language}
			<div class="card shadow-xl bg-neutral">
				<div class="card-body">
					<h2 class="card-title">{language.name}</h2>
					<p>{language.proficiency}</p>
					<p>{language.level}</p>
				</div>
			</div>
		{/each}
	</div>
</RootSection>
