<script>
	import { onMount } from 'svelte';
	import mapboxgl from 'mapbox-gl';

	let map;

	let location = [-71.412788, 41.825188];

	onMount(() => {
		mapboxgl.accessToken = 'pk.eyJ1IjoibGFtb2IiLCJhIjoiY2trOG10YWd0MG54ZTJ6bzBienFlNDBpdCJ9.e65J6b9meUMMK7s2UEvWWQ';
		map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [-71.411788, 41.825188],
			zoom: 15
		});
	});

	function dropEr() {
		new mapboxgl.Marker()
			.setLngLat(location)
			.addTo(map);
	}
</script>

<svelte:head>
	<title>Nuggit</title>
</svelte:head>

<button on:click={dropEr} class="p-2 w-12 h-12 bg-black text-white hover:text-green-200 rounded-full shadow fixed z-50 top-4 left-4">
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
	</svg>
</button>
<div id="map"></div>

<style>
	#map {
		height: 100%;
		width: 100%;
	}

	/* .button {
		background: #000;
		color: #FFF;
		padding: 4px;
		position: fixed;
		top: 2rem;
		left: 2rem;
	} */
</style>