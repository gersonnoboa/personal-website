<script>
	import RootSection from './RootSection.svelte';
	import SkillBadge from './SkillBadge.svelte';
	let skillCategories = [
		{
			title: 'Mobile',
			skills: [
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
			]
		},
		{
			title: 'Web',
			skills: [
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
			]
		},
		{
			title: 'General',
			skills: ['Bash', 'GitHub', 'Linux', 'Content Writing', 'WordPress']
		}
	];
</script>

<RootSection additionalClasses="bg-base-100">
	<p class="text-4xl text-center">Skills</p>

	{#each skillCategories as skillCategory}
		<div>
			<p class="text-lg">{skillCategory.title}</p>
			<div>
				{#each skillCategory.skills as skill}
					<SkillBadge name={skill} />
				{/each}
			</div>
		</div>
	{/each}
</RootSection>
