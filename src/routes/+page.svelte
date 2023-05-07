<script lang="ts">
	import Polygon from '../lib/components/polygon.svelte';
	import fetchApi from '../lib/api/fetchApi';
	import { onMount } from 'svelte';
	import Loader from '$lib/components/loader.svelte';

	let data:any = {};
	let loading = true;
	let error = false;

    const getData = async () => {
        try {
			const response = await fetchApi('/protocols', 'GET');
			data = await response.json();
			loading = false;
		} catch (e) {
			error = true;
			loading = false;
		}
    }

	onMount(async () => {
        getData();
        setInterval(() => {
            getData();
        }, 4000);
	});
</script>

{#if loading}
	<Loader />
{:else if error}
	<p class="text-white font-normal">Something went wrong</p>
{:else}
	<div class="flex flex-col justify-center items-center gap-2 z-10">
		<Polygon from="blue-primary10" to="blue-primary20">
			<img src="protocols/eth.svg" alt="ethereum" />
		</Polygon>
		<div class="flex flex-col gap-1 text-white font-light text-sm text-center">
			<p>
				{(data.ethereum.mainnet.blocks[0].height).toLocaleString().slice(0, -3)}<span class="font-semibold"
					>{(data.ethereum.mainnet.blocks[0].height).toString().slice(-3)}</span
				>
			</p>
			<p class="opacity-60 text-xs">
				{(data.ethereum.mainnet.blocks[1].height).toLocaleString().slice(0, -3)}<span class="font-semibold"
					>{(data.ethereum.mainnet.blocks[1].height).toString().slice(-3)}</span
				>
			</p>
			<p class="opacity-20 text-xs">
				{(data.ethereum.mainnet.blocks[2].height).toLocaleString().slice(0, -3)}<span class="font-semibold"
					>{(data.ethereum.mainnet.blocks[2].height).toString().slice(-3)}</span
				>
			</p>
		</div>
	</div>
	<div class="flex flex-col justify-center items-center gap-2 z-10">
		<Polygon from="orange-primary10" to="orange-primary20">
			<img src="protocols/btc.svg" alt="bitcoin" />
		</Polygon>
		<div class="flex flex-col gap-1 text-white font-light text-sm text-center">
			<p>
				{(data.bitcoin.mainnet.blocks[0].height).toLocaleString().slice(0, -3)}<span class="font-semibold"
					>{(data.bitcoin.mainnet.blocks[0].height).toString().slice(-3)}</span
				>
			</p>
			<p class="opacity-60 text-xs">
				{(data.bitcoin.mainnet.blocks[1].height).toLocaleString().slice(0, -3)}<span class="font-semibold"
					>{(data.bitcoin.mainnet.blocks[1].height).toString().slice(-3)}</span
				>
			</p>
			<p class="opacity-20 text-xs">
				{(data.bitcoin.mainnet.blocks[2].height).toLocaleString().slice(0, -3)}<span class="font-semibold"
					>{(data.bitcoin.mainnet.blocks[2].height).toString().slice(-3)}</span
				>
			</p>
		</div>
	</div>
    <div class="flex flex-col justify-center items-center gap-2 z-10">
		<Polygon from="green-primary10" to="green-primary20">
			<img src="protocols/tez.svg" alt="tezos" />
		</Polygon>
		<div class="flex flex-col gap-1 text-white font-light text-sm text-center">
			<p>
				{(data.tezos.mainnet.blocks[0].height).toLocaleString().slice(0, -3)}<span class="font-semibold"
					>{(data.tezos.mainnet.blocks[0].height).toString().slice(-3)}</span
				>
			</p>
			<p class="opacity-60 text-xs">
				{(data.tezos.mainnet.blocks[1].height).toLocaleString().slice(0, -3)}<span class="font-semibold"
					>{(data.tezos.mainnet.blocks[1].height).toString().slice(-3)}</span
				>
			</p>
			<p class="opacity-20 text-xs">
				{(data.tezos.mainnet.blocks[2].height).toLocaleString().slice(0, -3)}<span class="font-semibold"
					>{(data.tezos.mainnet.blocks[2].height).toString().slice(-3)}</span
				>
			</p>
		</div>
	</div>
    <!-- <div class="flex flex-col justify-center items-center gap-2 z-10">
		<Polygon from="purple-primary10" to="purple-primary20">
			<img class="mt-4" src="protocols/ewf.svg" alt="ewf" />
		</Polygon>
		<div class="flex flex-col gap-1 text-white font-light text-sm text-center">
			<p>
				{(data.tezos.mainnet.blocks[0].height).toLocaleString().slice(0, -3)}<span class="font-semibold"
					>{(data.tezos.mainnet.blocks[0].height).toString().slice(-3)}</span
				>
			</p>
			<p class="opacity-60 text-xs">
				{(data.tezos.mainnet.blocks[1].height).toLocaleString().slice(0, -3)}<span class="font-semibold"
					>{(data.tezos.mainnet.blocks[1].height).toString().slice(-3)}</span
				>
			</p>
			<p class="opacity-20 text-xs">
				{(data.tezos.mainnet.blocks[2].height).toLocaleString().slice(0, -3)}<span class="font-semibold"
					>{(data.tezos.mainnet.blocks[2].height).toString().slice(-3)}</span
				>
			</p>
		</div>
	</div> -->
{/if}
