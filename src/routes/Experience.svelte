<script>
	import ExperienceCard from './ExperienceCard.svelte';
</script>

<div class="experience bg-base-200 personal-website-section gap-8">
	<p class="text-3xl text-center">Recent Experience</p>
	<ExperienceCard
		title="Glia · Senior Software Engineer"
		period="July 2020 - Present"
		description="Work on the mobile SDKs that are integrated into our customers' apps, in order to create rich,
	native digital customer service experiences."
		accomplishments="During my time here, the native SDK has been released and integrated by multiple
	companies. I led the implementation of push notifications for both platforms and massive improvements
	to our CI/CD workflow in Bitrise. I interviewed multiple mobile candidates and have been directly responsible
	in the hiring of several developers."
		website="https://www.glia.com"
	/>

	<ExperienceCard
		title="Pipedrive · iOS Developer"
		period="January 2020 - July 2020"
		description="Worked on the native Pipedrive iOS application."
		accomplishments="I improved our weekly deployments through Fastlane and Testflight. I was responsible for
		introducing Quick and Nimble to the codebase. Also, I was part of a project to implement
		functionality for sending a phone call request from the web application to the mobile
		devices using push notifications."
		website="https://www.pipedrive.com"
	/>

	<ExperienceCard
		title="Proekspert · Software Engineer"
		period="April 2018 - December 2019"
		description="Worked on the self-service iOS application for Telia Finland, which boasts around 100k monthly users."
		accomplishments="I led the deployment of Clean Swift for the project. I was directly responsible for
		the implementation of translations, after compiling concerns raised by customers and
		presenting them to key stakeholders. I was part of the implementation of features
		like store locator, booking appointments through the app, and a complete visual revamp."
		website="https://www.proekspert.com"
	/>
</div>
