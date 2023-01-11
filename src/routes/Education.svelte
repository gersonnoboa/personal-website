<script>
	import RootSection from './RootSection.svelte';

	let institutions = [
		{
			name: 'University of Tartu',
			period: 'August 2016 - August 2018',
			title: 'M.Sc. of Science (Software Engineering)'
		},
		{
			name: 'Universidad de Especialidades Espíritu Santo',
			period: 'May 2009 - June 2015',
			title: "Engineer's degree, Software Engineering"
		},
		{
			name: 'Colegio Americano de Guayaquil',
			period: 'April 1999 - January 2009',
			title: 'Acquired specialization in physics and math'
		}
	];
</script>

<RootSection additionalClasses="bg-base-200">
	<p class="text-3xl text-center">Education</p>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-12">
		{#each institutions as institution}
			<div class="card shadow-xl bg-neutral basis-1/4 break-word">
				<div class="card-body">
					<h2 class="card-title">{institution.name}</h2>
					<div>{institution.period}</div>
					<div>{institution.title}</div>
				</div>
			</div>
		{/each}
	</div>
</RootSection>
