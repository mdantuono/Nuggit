<script>
	import { onMount } from 'svelte';
	import mapboxgl from 'mapbox-gl';
	import {v4 as uuid} from 'uuid';

	let map;
	let pins = [];
	let pinsVisible = false;

	let location = [-71.412788, 41.825188];

	onMount(() => {
		mapboxgl.accessToken = 'pk.eyJ1IjoibGFtb2IiLCJhIjoiY2trOG10YWd0MG54ZTJ6bzBienFlNDBpdCJ9.e65J6b9meUMMK7s2UEvWWQ';

		navigator.geolocation.getCurrentPosition(position => {
			location = [position.coords.longitude, position.coords.latitude];

			map = new mapboxgl.Map({
				container: 'map',
				style: 'mapbox://styles/mapbox/streets-v11',
				center: location,
				zoom: 15
			});
		});
	});

	function dropPin() {
		let title = prompt("Pin Name");
		if (!title)
			return;
		pins = [...pins, {
			title: title,
			_id: uuid(),
			coordinates: location
		}];

		new mapboxgl.Marker()
			.setLngLat(location)
			.addTo(map);

		console.log(pins);
	}

	function showPins() {
		pinsVisible = !pinsVisible;
	}
</script>

<svelte:head>
	<title>Nuggit</title>
</svelte:head>

<div class="fixed z-50 top-4 left-4 flex flex-row space-x-2">
	<div class="flex flex-col space-y-2">
		<button on:click={showPins} class="p-2 w-12 h-12 bg-black text-purple-200 hover:text-purple-500 rounded-full shadow">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
				<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
				<line x1="4" y1="6" x2="20" y2="6" />
				<line x1="4" y1="12" x2="20" y2="12" />
				<line x1="4" y1="18" x2="20" y2="18" />
			  </svg>
		</button>
		<button on:click={dropPin} class="p-2 w-12 h-12 bg-black text-green-200 hover:text-green-500 rounded-full shadow">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
			</svg>
		</button>
	</div>
	{#if pinsVisible}
		<div class="flex flex-col space-y-2">
			{#each pins as pin}
				<div class="bg-gray-100 rounded-full shadow py-2 px-4 font-bold">{pin.title}</div>
			{/each}
		</div>
	{/if}
</div>
<div id="map" class="h-full w-full"></div>