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

<div id="map"></div>
<button on:click={dropEr} class="button">Drop</button>

<style>
	#map {
		height: 100%;
		width: 100%;
	}

	.button {
		background: #000;
		color: #FFF;
		padding: 4px;
		position: fixed;
		top: 2rem;
		left: 2rem;
	}
</style>