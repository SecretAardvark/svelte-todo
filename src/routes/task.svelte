<script lang="ts">
	import { taskStore } from './stores';

	export let showMore = false;
	export let task;
	export let deleteTask;
</script>

<article class="task">
	<header>
		<a href="#close" aria-label="Close" class="close" on:click={() => deleteTask(task.id)}> x </a>
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

<style>
	.close {
		float: right;
		font-size: larger;
		color: darkgray;
	}
</style>
