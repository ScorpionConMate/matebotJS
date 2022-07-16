import { Client as Context, Message } from 'discord.js';
import { Command, Ready } from '../decorators';
import { MessageUtils } from '../utils/message.utils';
import { BaseCommand } from './Base.command';
import { DolarService } from '../services/index';
import { help } from 'yargs';
import { defaultEmbedData } from '../config/message.config';

/**
 * @description Bot command utils for currencies are created on this file
 */
class DolarCommand implements BaseCommand {
	@Command({ name: 'dolar help', description: 'Muestra la lista de comandos del modulo' })
	async help(_ctx: Context, _msg: Message) {
		const commandList = [
			{
				name: 'help',
				description: 'Muestra la lista de comandos del modulo',
				command: 'dolar help',
			},
			{
				name: 'dolarblue',
				description: 'Trae el valor del dolar blue, tomado de bluelytics',
				command: 'rant lcdtmAb',
			},
		];
		const messageUtils = new MessageUtils();
		const embed = messageUtils.buildEmbed({
			title: 'Mensaje de ayuda',
			fields: [
				...commandList.map((v) => {
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

	/**
	 * @description When the bot is ready do something
	 */
	@Ready()
	async ready(_ctx: Context) {
		console.log('Dolar  ready!');
	}
	/**
	 * @description Returns a string with the average price of the ARS/USD pair
	 * @return {Promise<void>}
	 */
	@Command({ name: 'dolarblue' })
	async iq(_ctx: Context, msg: Message): Promise<void> {
		const newMessage = new MessageUtils();
		const dolarAVG = await DolarService.getData();
		/** Send message to the channel */
		newMessage.sendMessageToChannel(dolarAVG, msg.channelId);
	}
}

export default new DolarCommand();
