import reminderCommand from './reminder.command';
import dolarCommand from './dolar.command';

export const Commands = [];

export function InitCommands() {
	// add all active commands in the array
	Commands.push(reminderCommand);
	Commands.push(dolarCommand);
}
