import { Client as Context, Message } from 'discord.js';
import { Command, Ready } from '../decorators';
import * as chrono from 'chrono-node';
import { BaseCommand } from './Base.command';

export class ReminderCommand implements BaseCommand {
	help(_ctx: Context<boolean>, _msg: Message): Promise<void> {
		throw new Error('Method not implemented.');
	}
	@Ready()
	async ready(_ctx: Context) {
		console.log('Remminder ready!');
	}

	@Command({ name: "reminder", prefix: "[" })
	async reminder(_ctx: Context, msg: Message) {
		const strDatetime = msg.content.split(' ').slice(1).join(' ');
		console.log(strDatetime);
		const datetime = chrono.parseDate(strDatetime);
		console.log(datetime);
	}

	@Command({ name: 'reminder list' })
	async list(_ctx: Context, msg: Message) {
		console.log(msg.author);
		try {
			_ctx.users.fetch(msg.author.id).then((user) => {
				user.send('Hola').catch((err) => {
					console.log(err);
				});
			});
		} catch (error) {
			console.error(error);
		}
	}
}
