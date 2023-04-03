import moment from 'moment';
import { writable } from 'svelte/store';

interface task {
	id: number;
	name: string;
	text: string;
	date: moment.Moment;
	reminder: boolean;
}

let tasks: task[] = [
	{
		id: 1,
		name: 'dentist',
		text: 'Go to dentist appt',
		date: moment('3/28', 'M/D'),
		reminder: true
	},
	{
		id: 2,
		name: 'smoke weed',
		text: 'get high erryday',
		date: moment('4/20/2022'),
		reminder: false
	}
];

export const taskStore = writable(tasks);
