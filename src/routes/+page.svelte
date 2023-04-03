<script lang="ts">
	import '@picocss/pico';

	import Task from './task.svelte';
	import AddTask from './addTask.svelte';
	import { taskStore } from './stores';

	let showAdd: boolean = false;

	$: tasks = $taskStore;

	let deleteTask = (taskId: number) => {
		taskStore.update((tasks) => {
			const index = tasks.findIndex((t) => t.id === taskId);
			if (index !== -1) {
				tasks.splice(index, 1);
			}
			return tasks;
		});
		console.log(`Task with id ${taskId} deleted`);
	};
	//TODO: fix date formatting for initial tasks
	//TODO: add delete task functionality
</script>

<body>
	<main class="container">
		<h1>Task Tracker</h1>
		{#each tasks as task}
			<Task {task} bind:deleteTask />
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
