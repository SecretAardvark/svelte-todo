<script lang="ts">
	import '@picocss/pico';
	import moment from 'moment';
	import { onMount } from 'svelte';

	import Task from './task.svelte';
	import AddTask from './addTask.svelte';
	import { taskStore } from './stores.js';
	class task {
		constructor(id: number, name: string, text: string, date: moment.Moment, reminder: boolean) {
			this.id = id;
			this.name = name;
			this.text = text;
			this.date = date;
			this.reminder = reminder;
		}
		id: number;
		name: string;
		text: string;
		date: moment.Moment;
		reminder: boolean;
	}

	let showAdd: boolean = false;
	const tasks = [
		{ id: 1, name: 'dentist', text: 'Go to dentist appt', date: moment('3/28'), reminder: true },
		{ id: 2, name: 'smoke weed', text: 'get high erryday', date: moment('4/20'), reminder: false }
	];

	onMount(() => {
		taskStore.set(tasks);
		// console.log(taskStore);
	});

	//TODO: fix show/hide add task
	//TODO: button to delete task

	//TODO: make a svelte store for tasks
</script>

<body>
	<main class="container">
		<!-- <div class="grid"> -->
		<h1>Task Tracker</h1>
		{#each tasks as task}
			<!-- <article class="task">
					<header>
						<h4>{task.name}</h4>
					</header>
					<p>{task.date}</p>
					{#if showMore}
						<p>{task.text}</p>
					{/if}
				</article> -->
			<Task {task} />
		{/each}
		<button
			on:click={() => {
				showAdd = !showAdd;
				console.log(showAdd);
			}}>Add Task</button
		>
		{#if showAdd}
			<AddTask {showAdd} />
		{/if}
		<!-- </div> -->
	</main>
</body>
