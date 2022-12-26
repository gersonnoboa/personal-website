<script>
	/**
	 * @type {String}
	 */
	export let title;

	/**
	 * @type {String}
	 */
	export let period;

	/**
	 * @type {String}
	 */
	export let description;

	/**
	 * @type {String}
	 */
	export let accomplishments;

	/**
	 * @type {String}
	 */
	export let website = '';
</script>

<div class="card shadow-xl bg-neutral">
	<div class="card-body">
		<h2 class="card-title">{title}</h2>
		<p>{period}</p>
		<p>{description}</p>
		<p>{accomplishments}</p>
		<div class="card-actions justify-end">
			<a href={website} class="btn btn-primary" target="_blank" rel="noreferrer">Website</a>
		</div>
	</div>
</div>
