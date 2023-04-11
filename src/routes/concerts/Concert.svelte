<script>
	/**
	 * @type {number}
	 */
	export let id;

	/**
	 * @type {String}
	 */
	export let artist;

	/**
	 * @type {String}
	 */
	export let date;

	/**
	 * @type {String}
	 */
	export let country;

	/**
	 * @type {String}
	 */
	export let venue;

	/**
	 * @type {String}
	 */
	export let imageUrl;
</script>

<a href="/concerts/{id}">
	<div class="card flex-1 bg-base-200 shadow-xl image-full h-[200px] max-h-[200px]">
		<figure class="">
			<img
				src="{imageUrl}"
				alt=""
				class="h-[50px] w-full"
			/>
		</figure>
		<div class="card-body overflow-hidden">
			<h1 class="text-3xl truncate">{artist}</h1>
			<p>{date}</p>
			<p class="truncate">{venue}</p>
			<p>{country}</p>
		</div>
	</div>
</a>

<style>
</style>
