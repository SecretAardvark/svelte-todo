<script lang="ts">
	import '@picocss/pico';

	import Task from './task.svelte';
	import AddTask from './addTask.svelte';
	import { taskStore } from './stores.js';

	let showAdd: boolean = false;

	$: tasks = $taskStore;
</script>

<body>
	<main class="container">
		<h1>Task Tracker</h1>
		{#each tasks as task}
			<Task {task} />
		{/each}
		<button
			on:click={() => {
				showAdd = !showAdd;
				// console.log(showAdd);
			}}>Add Task</button
		>
		{#if showAdd}
			<AddTask bind:showAdd />
		{/if}
	</main>
</body>
