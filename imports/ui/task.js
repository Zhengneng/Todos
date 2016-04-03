import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';


import { Tasks } from '../api/tasks.js';

import './task.html';

Template.task.events({
	'click .toggle-checked'() {
		Metor.call('tasks.setChecked', this._id, !this.checked);
	},
	'click .delete'() {
		Metor.call('tasks.remove', this._id);
	},
});
