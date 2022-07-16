import { Client as Context, Message, MessageEmbed } from 'discord.js';
import { Command, Ready } from '../decorators';
import { CommandExecute } from '../decorators/command.decorator';
import { RantService } from '../services/rant.service';
import { CommandError } from '../utils/error.utils';
import { MessageUtils } from '../utils/message.utils';
import { BaseCommand } from './Base.command';
import { UserUtils } from '../utils/user.utils';
import { setDefaultEmbedFooter } from '../config/message.config';
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
				name: 'say',
				description: 'Hace que el bot te salude en el canal actual',
				command: 'rant say',
			},
		];
		const messageUtils = new MessageUtils();
		const embed2 = new MessageEmbed();
		embed2.setTitle('Mensaje de ayuda');
		embed2.setFields(...commandList.map(v => {
			return {
				name: v.command,
				value: v.description,
				inline: false,
			};
		}));
		setDefaultEmbedFooter(embed2);

		await messageUtils.sendMessageToChannel(embed2, _msg.channelId);
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

	@Command({ name: 'rant say', description: 'Hace que el bot te salude en el canal actual' })
	say(ctx: Context, msg: Message) {
		const messageUtils = new MessageUtils();
		const message = `${UserUtils.getUserId(msg.author)} QUE PASA GORDO CEMENTERIO DE RAVIOLES`;
		messageUtils.sendMessageToChannel(message, msg.channel.id);
	}
}
