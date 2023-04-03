<script lang="typescript">
	import moment from 'moment';
	import { taskStore } from './stores';
	import Task from './task.svelte';

	export let showAdd;
	let id = 0;
	let name = '';
	let text = '';
	let date;
	let reminder = false;

	// const taskStore = writable(tasks);
</script>

<div class="container">
	<dialog open class="">
		<article>
			<form>
				<div class="container">
					<input type="text" bind:value={name} placeholder="task name" />
					<input type="text" bind:value={text} placeholder="description" />
					<input type="date" bind:value={date} placeholder="date" />
					<input type="checkbox" on:click={() => (reminder = !reminder)} /> reminder
				</div>
				<button
					on:click={() => {
						taskStore.update((tasks) => {
							tasks.push({
								id: id++,
								name: name,
								text: text,
								date: date,
								reminder: reminder
							});
							console.log(`Added task ${name} to store`);
							return tasks;
						});
						console.log($taskStore);
						showAdd = false;
					}}>submit</button
				>
			</form>
		</article>
	</dialog>
</div>
