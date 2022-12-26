<script>
	import Education from './Education.svelte';
	import Experience from './Experience.svelte';
	import Languages from './Languages.svelte';
	import PersonalInformation from './PersonalInformation.svelte';
	import Skills from './Skills.svelte';
	import Hero from './Hero.svelte';
	import RandomFacts from './RandomFacts.svelte';
</script>

<Hero />
<div class="flex flex-row">
	<div class="basis-1/12 lg:basis-1/5" />
	<div class="basis-10/12 lg:basis-3/5 space-y-10">
		<div />
		<PersonalInformation />
		<Experience />
		<Skills />
		<Education />
		<Languages />
		<RandomFacts />
		<div />
	</div>
	<div class="basis-1/12 lg:basis-1/5" />
</div>
