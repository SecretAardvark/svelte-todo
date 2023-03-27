<script lang="typescript">
	let showMore = false;
	export let task;
</script>

<article class="task">
	<header>
		<h4>{task.name}</h4>
	</header>
	<p>{task.date}</p>
	{#if showMore}
		<p>{task.text}</p>
	{/if}
	<footer>
		<button
			on:click={() => {
				showMore = !showMore;
				console.log(showMore);
			}}
			>show More
		</button>
	</footer>
</article>
