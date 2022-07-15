import gameCommands from './game.commands';
import reminderCommand from './reminder.command';

export const Commands = [];

export function InitCommands() {
	// add all active commands in the array
	Commands.push(reminderCommand);
	Commands.push(gameCommands);
}
