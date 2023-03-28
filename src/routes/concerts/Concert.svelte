<script>
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
</script>

<!-- <div class="card bg-base-200 shadow-xl">
	<img src="https://placeimg.com/640/480/any" class="object-fill h-48" />
	<div class="card-body">
		<h2 class="card-title">
			{artist}
		</h2>
		<p>{date}</p>
		<p>{venue}, {country}</p>
	</div>
</div> -->

<div class="card flex-1 bg-base-200 shadow-xl image-full h-[200px] max-h-[200px]">
	<figure class="">
		<img src="https://placeimg.com/400/225/arch" alt="Shoes" class="h-[50px] w-full" />
	</figure>
	<div class="card-body overflow-hidden">
		<h1 class="text-3xl truncate">{artist}</h1>
		<p>{date}</p>
		<p class="truncate">{venue}</p>
		<p>{country}</p>
	</div>
</div>

<style>
</style>
