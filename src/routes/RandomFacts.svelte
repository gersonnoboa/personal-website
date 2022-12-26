<script>
	import RandomFact from './RandomFact.svelte';
</script>

<div class="random-facts bg-base-200 personal-website-section">
	<p class="text-3xl text-center">Random Facts</p>
	<div class="grid md:grid-cols-2 xl:grid-cols-3 gap-12">
		<RandomFact title="Years of experience" value="9" />
		<RandomFact title="GitHub Repos" value="51" />
		<RandomFact title="Programming languages used" value="12" />
		<RandomFact title="Apps in App Store" value="6" />
		<RandomFact title="Watching F1 since" value="2002" />
		<RandomFact title="Concerts attended" value="44" />
		<RandomFact title="Countries visited" value="22" />
		<RandomFact title="Gaming consoles owned" value="11" />
		<RandomFact title="Liked songs in Spotify" value="2000+" />
	</div>
</div>
