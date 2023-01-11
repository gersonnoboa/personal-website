<script>
	let buttons = [
		{
			href: 'https://www.github.com/gersonnoboa',
			title: 'GitHub'
		},
		{
			href: 'https://www.linkedin.com/in/gersonnoboa',
			title: 'LinkedIn'
		}
	];
</script>

<div class="hero min-h-screen bg-gradient-to-r from-primary to-secondary">
	<div class="hero-overlay bg-opacity-50" />
	<div class="hero-content text-center text-primary-content">
		<div class="max-w-md lg:max-w-xl">
			<h1 class="mb-5 text-5xl font-bold">Hello! I'm Gerson Noboa.</h1>
			<p class="mb-5">
				Software engineer with years of experience across multiple platforms and tech stacks. Mainly
				proficient in iOS development with Swift, Objective-C, and all related accompanying tools.
				Currently working as a mobile engineer for Glia, primarily on our iOS offerings.
			</p>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				{#each buttons as button}
					<a class="btn btn-primary" href={button.href} target="_blank" rel="noreferrer"
						>{button.title}</a
					>
				{/each}
			</div>
		</div>
	</div>
</div>
