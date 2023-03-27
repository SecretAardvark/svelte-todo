<script lang="typescript">
	import moment from 'moment';

	export let showAdd;
	let id = 0;
	let name = '';
	let text = '';
	let date;
	let reminder = false;

	// const taskStore = writable(tasks);
</script>

<div class="container">
	<dialog open>
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
						console.log(showAdd);
						showAdd = !showAdd;
					}}>submit</button
				>
			</form>
		</article>
	</dialog>
</div>
