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

<div class="card flex-1 bg-base-200 shadow-xl image-full h-[200px] max-h-[200px]">
	<figure class="">
		<img
			src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
			alt="Shoes"
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

<style>
</style>
