<script>
	import RootSection from './RootSection.svelte';
	import SkillBadge from './SkillBadge.svelte';
	let mobileSkills = [
		'Swift',
		'Objective-C',
		'Java',
		'Objective-C',
		'SDK Development',
		'WebSockets',
		'Push Notifications',
		'Audio Streaming',
		'Video Streaming',
		'App Store Publishing',
		'Core Data',
		'Cocoapods',
		'Swift Package Manager',
		'WebRTC',
		'Bitrise',
		'SQLite'
	];

	let webSkills = [
		'JavaScript',
		'TypeScript',
		'Ruby',
		'Python',
		'Elixir',
		'Java',
		'Rails',
		'Django',
		'Elixir',
		'NodeJS',
		'Express',
		'AWS',
		'Postgres',
		'SQL Server',
		'MongoDB'
	];

	let otherSkills = ['Bash', 'GitHub', 'Linux', 'Content Writing', 'WordPress'];
</script>

<RootSection additionalClasses="bg-base-100">
	<p class="text-4xl text-center">Skills</p>

	<div>
		<p class="text-lg">Mobile</p>
		<div>
			{#each mobileSkills as mobileSkill}
				<SkillBadge name={mobileSkill} />
			{/each}
		</div>
	</div>

	<div>
		<p class="text-lg">Web</p>
		<div>
			{#each webSkills as webSkill}
				<SkillBadge name={webSkill} />
			{/each}
		</div>
	</div>

	<div>
		<p class="text-lg">General</p>
		<div>
			{#each otherSkills as otherSkill}
				<SkillBadge name={otherSkill} />
			{/each}
		</div>
	</div>
</RootSection>
