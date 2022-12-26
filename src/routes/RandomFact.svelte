<script>
	/**
	 * @type {string}
	 */
	export let title;

	/**
	 * @type {string}
	 */
	export let value;

	/**
	 * @type {string}
	 */
	export let description = '';
</script>

<div class="stats shadow-xl bg-neutral">
	<div class="stat">
		<div class="stat-title">{title}</div>
		<div class="stat-value">{value}</div>
		<div class="stat-desc">{description}</div>
	</div>
</div>
