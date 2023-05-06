<script lang="ts">
	import Polygon from '../lib/components/polygon.svelte';
	import fetchApi from '../lib/api/fetchApi';
	import { onMount } from 'svelte';
	import Loader from '$lib/components/loader.svelte';

	let data = {"tezos":{"ghostnet":{"blocks":[{"hash":"BL75xSxCDdG9Pt15XdU9Rvo7kkfQyfVAymrj7QE7efbQ9ddHw9u","height":2576984,"time":1683376991,"txs":1},{"hash":"BLPtecPqMXTyrsWaFUk2HVUaGHAxSEugUkho1D5rqGtMHpkzu4C","height":2576983,"time":1683376983,"txs":4},{"hash":"BL9zkGs8vMgAZWrg158S8tXD2qmd1vBgDds9xLNjsVeUY1ALqpM","height":2576982,"time":1683376975,"txs":0},{"hash":"BMPKa2zqAnuZU2VA18z4DDpyAqnH8MQSGvbMnQyQFsrwf3AbWou","height":2576981,"time":1683376967,"txs":0},{"hash":"BKuJTsMDuAfbNFW38zogLNmq93Y49AmPJdMiUWtY3tAu7eDofZN","height":2576980,"time":1683376959,"txs":1},{"hash":"BKxT1iRGJVWggVkC5hFwEvwJsV4CeyWrH9oNGiSFWkAvifdvH5p","height":2576979,"time":1683376951,"txs":0},{"hash":"BLCZ2acdQuw8nJP6qxF1tByD3faH4Q7UEkZAkuqpU9vyTXyVgQf","height":2576978,"time":1683376943,"txs":0},{"hash":"BM9hTzT4cHisVEk1KKAhbxfHL5Ny1JpLKiCtt42o73Xc5t4t2Tn","height":2576977,"time":1683376935,"txs":1},{"hash":"BKwW8UuCMduRsQGUT9DemkTujt1Gqsu7uUUbVV6TtAJAvc4yuFF","height":2576976,"time":1683376927,"txs":0},{"hash":"BLQ3krhGiEzZ4cHEVoBhVcF1kTXUjPuc3Bis1sEogtWDjxmHrFF","height":2576975,"time":1683376919,"txs":0}],"height":2576984,"last_scrapping_task":1683376998},"mainnet":{"blocks":[{"hash":"BKsPDyF2FGdvwxeRGt5ZzA4WvJHpMNdNa8THSNqr58P1E6kEk58","height":3483963,"time":1683376990,"txs":23},{"hash":"BLP5TvJcZYqexH8cWkaH8CnvHDUAfAyigrrkQi5jWTrYdXEjsjm","height":3483962,"time":1683376975,"txs":27},{"hash":"BKknPPitp2KG5rMwDKjv9t3Avs1jGGh25KnSMMyZdLwdhGBwzq3","height":3483961,"time":1683376960,"txs":13},{"hash":"BLviTE5wmCyuWd52wXuYHNWcMnuABsamxgoqmnfu7QdtyQ6qR7k","height":3483960,"time":1683376945,"txs":19},{"hash":"BLrRFpqktP5cXeKNEuVx8MdLXEsquSn377h12zzdvQiUG8ZGFhk","height":3483959,"time":1683376930,"txs":14},{"hash":"BMUy8UkCfJBz4JWHxByUJKXyTXTgg21sJV8e9rjBQLqT2NnqvkU","height":3483958,"time":1683376915,"txs":23},{"hash":"BLaER91EWJvK5npcxfd1cGiDTH9U46PkQQEU8g5pQWZmD3LdBSV","height":3483957,"time":1683376900,"txs":13},{"hash":"BMV56QJEjtPTwwur238Q6jCWwq3bL1zvG3QHJUnRmsQrgmTnomv","height":3483956,"time":1683376885,"txs":18},{"hash":"BLiEZYyxymhjo26WnkQNRnAnCDd18NhGjfUv9DA1kH4XKpF6E9Q","height":3483955,"time":1683376870,"txs":21},{"hash":"BL9YGS31C7Qr5Qw2y76cVJyL77bsb7wZ2BmpZAMsAknj33NXFqT","height":3483954,"time":1683376855,"txs":10}],"height":3483963,"last_scrapping_task":1683376993}},"bitcoin":{"mainnet":{"blocks":[{"hash":"00000000000000000001f0ee7017087710e5671cc2f44ce0d6fa58122b8cadfd","height":788513,"time":1683376882,"txs":4248},{"hash":"00000000000000000004f93be00b2b94e74a9e03751942e1e25d9c161f272e4e","height":788512,"time":1683376539,"txs":4542},{"hash":"00000000000000000000b1791af93664057246896eefcb2280abf37be75d5ff8","height":788511,"time":1683376094,"txs":4680},{"hash":"000000000000000000042b2937563718d404b8df02fb0664be3f8c5186a5fa8c","height":788510,"time":1683375602,"txs":4150},{"hash":"00000000000000000003c19ecc18e646fcf526764eb054e319547c3b0161df9e","height":788509,"time":1683375234,"txs":4945},{"hash":"0000000000000000000153a87d4864a5c82fe3d96fb0246cbd6a9c2f1f084b2a","height":788508,"time":1683375033,"txs":4853},{"hash":"000000000000000000050e512f8c2bdcc73903dca07c90474a6c4ee4cddb619c","height":788507,"time":1683374979,"txs":3173},{"hash":"000000000000000000017fb07a18172ee2bf4d36379f61bb141c8f84af770a45","height":788506,"time":1683374402,"txs":4981},{"hash":"0000000000000000000355defd9bc680cfef994bcac52f7426ae0a2a5e7d65ca","height":788505,"time":1683374169,"txs":4436},{"hash":"00000000000000000005971f86c5834452b010edd6a7376bd54c9ab84fe014a8","height":788504,"time":1683373514,"txs":3764}],"height":788513,"last_scrapping_task":1683376926},"testnet":{"blocks":[{"hash":"000000009eaa7ec0810dcfb8fd62898797793377f23c358285c2db25f657b475","height":2431951,"time":1683376020,"txs":77},{"hash":"00000000011caaae2d40e351666f5dbbaab828ac6880a09134ac9df70dcb52dc","height":2431950,"time":1683374819,"txs":98},{"hash":"00000000a5071b23ffff88049aefa2294c6034cbe6823f594d2025aa536c888d","height":2431949,"time":1683373618,"txs":93},{"hash":"00000000d4276e3ecb0cb9d59ca1849ee41d4e48db4fa31d7580b6f0aa4e4626","height":2431948,"time":1683372416,"txs":98},{"hash":"0000000000000a89f322fb777d30f08873eeaf816368cf9bc4baf8d1a1567745","height":2431947,"time":1683371215,"txs":70},{"hash":"00000000bd776a321dfdd95ee9cb0b952e766cb95c7096571d3355ca564167f5","height":2431946,"time":1683370005,"txs":92},{"hash":"00000000afc78cc3ae6d17084bfcc404491d7246a5d2ddcde27e79e6a1a9c2c6","height":2431945,"time":1683368795,"txs":84},{"hash":"00000000823e0000e6276fda412d0413a14cc34d33662a99e07962de7de16cab","height":2431944,"time":1683367594,"txs":85},{"hash":"0000000060322f95ae19af00285dce5c46a55dd1f876cc9a3f1ea22d0c196dcb","height":2431943,"time":1683366390,"txs":94},{"hash":"00000000cbb721100db26faf668365b9eedd61690a2552b1f50369c8c59df650","height":2431942,"time":1683365185,"txs":102}],"height":2431951,"last_scrapping_task":1683376026}},"ethereum":{"goerli":{"blocks":[{"hash":"0xc46d58428723934c6ccca5cfa811b889d0d4e1ede2b43353f8dfd0ddceeb422c","height":8952229,"time":1683376992,"txs":66},{"hash":"0x9fd1e316a71d922d7da78d40b4a54bb68242f93c543e80cd3e2c88b47476f928","height":8952228,"time":1683376980,"txs":339},{"hash":"0x3c295dc6e8600a56c86c5dc3863e985080618ba46b0fb412538cf26380a87007","height":8952227,"time":1683376968,"txs":117},{"hash":"0x632a1d821230db0c5afd13bd6921cea663a304c0a59d9d6ef7f897209db0a65e","height":8952226,"time":1683376956,"txs":185},{"hash":"0x6f712917ceb6eb70ed6776bd9ee1694ef526ebb3903bf2ce0dd90243a09a4168","height":8952225,"time":1683376932,"txs":179},{"hash":"0x8bdae67227ed1f1dd2835ff242f56bc70c2f6bf4a93f1c5f086df0b0b74b896c","height":8952224,"time":1683376920,"txs":169},{"hash":"0xb03c6de52bb211b83cf86a34727501eed0f94f11d1c0e36813c44d93e9ba8475","height":8952223,"time":1683376908,"txs":152},{"hash":"0xe0cf5e506d595326c13200647972edd19edddd69b1ac4ec3b84f916a6fada78b","height":8952222,"time":1683376884,"txs":123},{"hash":"0x7f969e574a2fb02c83a3e118af9b2031933549bf82002039b928c53954682f97","height":8952221,"time":1683376872,"txs":163},{"hash":"0x43eed38b23fd44a1e65154f2a66f4641782bde3aeb823f6201c6195edf25cd23","height":8952220,"time":1683376860,"txs":145}],"height":8952229,"last_scrapping_task":1683376995},"mainnet":{"blocks":[{"hash":"0x1a5502eeedec20e6c278fe2e02be85442a28cf0e7f0f512876ec0ab0846551ac","height":17201623,"time":1683376991,"txs":189},{"hash":"0xadba61f43263535940850185a9d654d942bb5838a7d09ffda72191a4524be0d6","height":17201622,"time":1683376979,"txs":130},{"hash":"0x5ec72e8c82570a05b2c1c157b38e744860975e70670960e70398fe11d7f58e67","height":17201621,"time":1683376967,"txs":154},{"hash":"0x3227e01897b1845e787e150d37d7607ed715a9f086bb541bd4efb1d58ffc514f","height":17201620,"time":1683376955,"txs":160},{"hash":"0x86826951640fcee8f4df2b401a3105374fa26c353439eeef1de506b3b0314083","height":17201619,"time":1683376943,"txs":92},{"hash":"0x56971f5df53f801a767d3f125f533b9e5da09e1b324937aa880f7a027ae09ac2","height":17201618,"time":1683376931,"txs":175},{"hash":"0xef53aaf2060fd5a7998e014ec45707323ace6fd42af25f5ef9915491841ac9fe","height":17201617,"time":1683376919,"txs":191},{"hash":"0xaa9af586a6f5bc158f44bf0c097cfa4e273e3c214577fdb675a322168e13e36f","height":17201616,"time":1683376907,"txs":114},{"hash":"0x098b22ab691c1ed32dc01fafcedee5cf7903d7ba9eec98e0878ba3a6e834927e","height":17201615,"time":1683376895,"txs":140},{"hash":"0xed03859c4e23ec0137a856b750f9d30592d87491a9a7e398251dbfa8cddceada","height":17201614,"time":1683376883,"txs":147}],"height":17201623,"last_scrapping_task":1683376993},"sepolia":{"blocks":[{"hash":"0xa2f6575de93cf9aeb2920b51a86d1639966bb99416367d80d6396cef6ba4d867","height":3430403,"time":1683376992,"txs":23},{"hash":"0xe45103fa8ff7bf616e06ce25c05c0d4bb1f8e7159c6f081b869ed47b40a8c21c","height":3430402,"time":1683376980,"txs":25},{"hash":"0xd2be48da0d19b40fa04693581968a5611310d2b9bb3591c1bbf0fd6c5f525fc6","height":3430401,"time":1683376968,"txs":20},{"hash":"0xfb102a6288ef969d98c899a1448de675cdb83163f73838999fcb81af468de3ac","height":3430400,"time":1683376956,"txs":31},{"hash":"0x36a2fa4b7a29ed0e057ca91a44fa82276f39e774141481ffa0eb587a0c228d1a","height":3430399,"time":1683376944,"txs":28},{"hash":"0x28187df5f3a4454d2eb71e9b8bcf41a59397a28e521677aaafc9751e4b2ce171","height":3430398,"time":1683376932,"txs":23},{"hash":"0x11c3170bea18acf11d16a9bce6c664a3a9a9c2165e494176c62a5757200e91d2","height":3430397,"time":1683376920,"txs":17},{"hash":"0x29b61dfa724de044b7de1a78951ed1ef9728aaaa31192584cbf31a039a25a4a2","height":3430396,"time":1683376908,"txs":24},{"hash":"0xbda90b09580fd9964c2717deb52db648921faca92a6e5f98b6230ec71ecd2d4c","height":3430395,"time":1683376896,"txs":35},{"hash":"0xf02080383fafc5da0fffc4923f4494798793ed5b2facbc65ca03abc918b12f29","height":3430394,"time":1683376884,"txs":46}],"height":3430403,"last_scrapping_task":1683376993}}};
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
