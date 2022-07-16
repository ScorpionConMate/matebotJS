import { Client as Context, Message } from 'discord.js';
import { Command, Ready } from '../decorators';
import { CommandExecute } from '../decorators/command.decorator';
import { RantService } from '../services/rant.service';
import { CommandError } from '../utils/error.utils';
import { MessageUtils } from '../utils/message.utils';
import { BaseCommand } from './Base.command';
import { UserUtils } from '../utils/user.utils';
import { defaultEmbedData } from '../config/message.config';
export class RantCommand implements BaseCommand {

	@Command({ name: 'rant help', description: 'Muestra la lista de comandos del modulo' })
	async help(_ctx: Context, _msg: Message) {
		const commandList = [
			{
				name: 'help',
				description: 'Muestra la lista de comandos del modulo',
				command: 'rant help',
			},
			{
				name: 'lcdtmAb',
				description: 'La concha de tu madre AllBoys',
				command: 'rant lcdtmAb',
			},
			{
				name: 'list',
				description: 'Muestra la lista de comandos del modulo',
				command: 'rant list',
			},
			{
				name: 'say',
				description: 'Hace que el bot te salude en el canal actual',
				command: 'rant say',
			},
		];
		const messageUtils = new MessageUtils();
		const embed = messageUtils.buildEmbed({
			title: 'Mensaje de ayuda',
			fields: [
				...commandList.map(v => {
					return {
						name: v.command,
						value: v.description,
						inline: false,
					};
				}),
			],
			...defaultEmbedData,
		});

		await messageUtils.sendMessageToChannel(embed, _msg.channelId);
	}

	@Ready()
	async ready(_ctx: Context) {
		console.log('Rant ready!');
	}

	@Command({ name: 'rant lcdtmAb' })
	async lcdtmAb(ctx: Context, msg: Message) {
		const msgUtil = new MessageUtils();

		try {
			await msgUtil.sendMessageToChannel(new RantService().getSong(), '997323661847572641');
			console.log('Cancion cantada con exito');
		} catch (error) {
			console.error(error);
			throw new CommandError({
				message: 'Error al intentar cantar la cancion',
				delete: true,
				deleteAfter: 5,
			});
		}
	}

	// TODO: Mover esto a donde corresponda
	@Command({ name: 'rant list', description: 'Lista de comandos' })
	async list(ctx: Context, msg: Message) {
		const commandList = [];
		CommandExecute.forEach((v) => {
			commandList.push({
				name: v.name,
				description: v.description,
				prefix: v.prefix,
			});
		});
		const messageUtils = new MessageUtils();
		const embed = messageUtils.buildEmbed({
			isEmbed: true,
			title: 'Lista de comandos',
			fields: [
				...commandList.map((v) => {
					return {
						name: `${v.prefix}${v.name}`,
						value: v.description || 'Sin descripcion',
						inline: false,
					};
				}),
				{
					name: 'Para mas informacion',
					value: 'Para ver la descripcion de un comando use `<comando> help`',
					inline: true,
				},
			],
			author: {
				name: 'Bondiol Bot Helper',
				iconURL:
					'https://scontent.faep4-3.fna.fbcdn.net/v/t1.6435-9/33791064_156169605239071_1345637335718428672_n.png?_nc_cat=103&ccb=1-7&_nc_sid=85a577&efg=eyJpIjoidCJ9&_nc_eui2=AeFpXBDaH5oJkRes3rd2RWjiWai0_5pKCOlZqLT_mkoI6dU4CD3NPLWkce68nEs1tpNWuJIPXDyQntfvE-iSS7KK&_nc_ohc=rlyBUrwsx6cAX_Dkh0f&_nc_ht=scontent.faep4-3.fna&oh=00_AT-WwRRIIjxVkqAGn7JYeK7Fl_fwtT-ZzC-zEb8k3_Lg8Q&oe=62F63DEB',
			},
			footer: {
				text: 'Gracias por usar al Bondiol Bot Helper',
			},
			image:
				'https://pbs.twimg.com/media/D723tWPWsAA2jrP.png',
			color: [0, 194, 3],
			thumbnail: 'https://scontent.faep4-3.fna.fbcdn.net/v/t1.6435-9/33791064_156169605239071_1345637335718428672_n.png?_nc_cat=103&ccb=1-7&_nc_sid=85a577&efg=eyJpIjoidCJ9&_nc_eui2=AeFpXBDaH5oJkRes3rd2RWjiWai0_5pKCOlZqLT_mkoI6dU4CD3NPLWkce68nEs1tpNWuJIPXDyQntfvE-iSS7KK&_nc_ohc=rlyBUrwsx6cAX_Dkh0f&_nc_ht=scontent.faep4-3.fna&oh=00_AT-WwRRIIjxVkqAGn7JYeK7Fl_fwtT-ZzC-zEb8k3_Lg8Q&oe=62F63DEB',
		});
		messageUtils.sendMessageToChannel(embed, msg.channel.id);
	}

	@Command({ name: 'rant say', description: 'Hace que el bot te salude en el canal actual' })
	say(ctx: Context, msg: Message) {
		const messageUtils = new MessageUtils();
		const message = `${UserUtils.getUserId(msg.author)} QUE PASA GORDO CEMENTERIO DE RAVIOLES`;
		messageUtils.sendMessageToChannel(message, msg.channel.id);
	}
}
