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
	},
	{
		id: 3,
		name: 'job interview',
		text: 'Go to dentist appt',
		date: moment('05/20', 'M/D'),
		reminder: true
	},
	{
		id: 4,
		name: 'workout with steve',
		text: 'heh',
		date: moment('4/20/2022'),
		reminder: false
	},
	{
		id: 5,
		name: 'test 3 ',
		text: 'testerino',
		date: moment('3/28', 'M/D'),
		reminder: true
	},
	{
		id: 6,
		name: 'do things',
		text: 'and stuff',
		date: moment('4/20/2022'),
		reminder: false
	}
];

export const taskStore = writable(tasks);
