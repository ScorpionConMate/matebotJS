import fs from 'fs';
export const Commands = [];
const exceptionFiles = ['index', 'Base', 'example'];

export function InitCommands() {
	// add all active commands in the array
	//	Commands.push(reminderCommand);
	const files = fs.readdirSync('./src/commands');
	files
		.map((file) => file.split('.')[0])
		.filter((file) => !exceptionFiles.includes(file))
		.forEach(async (file) => {
			console.log(`Command ${file} loaded!`);
			const command = await import(`./${file}.command.js`);
			const classValue = Object.values(command)[0] as any;
			if (!(Object.keys(command)[0] === 'default')) {
				Commands.push(new classValue());
			}
		});
}
