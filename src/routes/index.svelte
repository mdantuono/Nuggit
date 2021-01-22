<script>
	import { onMount } from 'svelte';
	import mapboxgl from 'mapbox-gl';

	onMount(() => {
		mapboxgl.accessToken = 'pk.eyJ1IjoibGFtb2IiLCJhIjoiY2trOG10YWd0MG54ZTJ6bzBienFlNDBpdCJ9.e65J6b9meUMMK7s2UEvWWQ';
		const map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [-71.411788, 41.825188],
			zoom: 15
		});

		var marker = new mapboxgl.Marker()
			.setLngLat([-71.411788, 41.825188])
			.addTo(map);
	});
</script>

<svelte:head>
	<title>Nuggit</title>
</svelte:head>

<div id="map"></div>

<style>
	#map {
		height: 100%;
		width: 100%;
	}
</style>