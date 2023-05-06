<script lang="ts">
	export let from: String;
	export let to: String;
	let randomGradient = Math.floor(Math.random() * 6);	
</script>

<div class="relative justify-center items-center">
	<svg
		width="167"
		height="189"
		viewBox="0 0 167 189"
		class="relative"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			opacity="0.05"
			d="M78.5 1.88675C81.594 0.100422 85.406 0.100423 88.5 1.88675L161.205 43.8633C164.299 45.6496 166.205 48.9508 166.205 52.5235V136.477C166.205 140.049 164.299 143.35 161.205 145.137L88.5 187.113C85.406 188.9 81.594 188.9 78.5 187.113L5.79457 145.137C2.70056 143.35 0.794571 140.049 0.794571 136.477V52.5235C0.794571 48.9508 2.70056 45.6496 5.79457 43.8632L78.5 1.88675Z"
			fill={`url(#paint-${from})`}
		/>
		<path
			d="M78.5 30.8868C81.594 29.1004 85.406 29.1004 88.5 30.8868L136.091 58.3632C139.185 60.1496 141.091 63.4508 141.091 67.0235V121.976C141.091 125.549 139.185 128.85 136.091 130.637L88.5 158.113C85.406 159.9 81.594 159.9 78.5 158.113L30.9093 130.637C27.8153 128.85 25.9093 125.549 25.9093 121.977V67.0235C25.9093 63.4508 27.8153 60.1496 30.9093 58.3632L78.5 30.8868Z"
			fill={`url(#paint-${from})`}
		/>
		<linearGradient
			id={`paint-${from}`}
			x1="41.9624"
			y1="24.2981"
			x2="91.6033"
			y2="125.453"
			gradientUnits="userSpaceOnUse"
		>
			<stop offset="0.114583" style={`stop-color:var(--color-${from});`} />
			<stop offset="1" style={`stop-color:var(--color-${to});`} />
		</linearGradient></svg
	>
	<div class="absolute top-[58px] left-[62px]">
		<slot />
	</div>
	{#if randomGradient == 0}
		<span class="absolute top-4 left-0 text-2xl animate-[floating_2.5s_ease-in-out_infinite]" style={`color:var(--color-${to});`}>&#x2B22;</span>
		<span class="absolute top-40 left-40" style={`color:var(--color-${to});`}>&#x2B22;</span>
	{/if}
	{#if randomGradient == 1}
		<span class="absolute top-4 left-0 text-xl" style={`color:var(--color-${to});`}>&#x2B22;</span>
	{/if}
	{#if randomGradient == 2}
	<span class="absolute top-40 left-40" style={`color:var(--color-${to});`}>&#x2B22;</span>
	{/if}
	{#if randomGradient == 3}
		<span class="absolute top-40 left-40 animate-[floating_3s_ease-in-out_infinite]" style={`color:var(--color-${to});`}>&#x2B22;</span>
		<span class="absolute top-0 left-36 text-2xl" style={`color:var(--color-${to});`}>&#x2B22;</span>
	{/if}
	{#if randomGradient == 4}
	<span class="absolute top-4 left-0 text-xl" style={`color:var(--color-${to});`}>&#x2B22;</span>
		<span class="absolute top-0 left-36 animate-[floating_3.5s_ease-in-out_infinite]" style={`color:var(--color-${to});`}>&#x2B22;</span>
	{/if}
	{#if randomGradient == 5}
		<span class="absolute top-0 left-12 text-xl" style={`color:var(--color-${to});`}>&#x2B22;</span>
	{/if}

</div>
