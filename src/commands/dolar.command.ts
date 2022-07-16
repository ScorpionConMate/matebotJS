import { Client as Context, Message } from 'discord.js';
import { Command, Ready } from '../decorators';
import { MessageUtils } from '../utils/message.utils';
import { BaseCommand } from './Base.command';
import { DolarService } from '../services/index';
import { defaultEmbedData } from '../config/message.config';

/**
 * @description Bot command utils for currencies are created on this file
 */
class DolarCommand implements BaseCommand {
	/**
	 * @description Help command to know about this module
	 * @param {Context} _ctx
	 * @param {Message} _msg
	 * @return {Promise<void>}
	 */
	@Command({ name: 'dolar help', description: 'Muestra la lista de comandos del modulo' })
	async help(_ctx: Context, _msg: Message): Promise<void> {
		const commandList = [
			{
				name: 'help',
				description: 'Muestra la lista de comandos del modulo',
				command: 'dolar help',
			},
			{
				name: 'dolarblue',
				description: 'Trae el valor del dolar blue, tomado de bluelytics',
				command: 'dolarblue',
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
		/** Send message to the channel */
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
	 * @param {Context} _ctx
	 * @param {Message} msg
	 * @description Returns a string with the average price of the ARS/USD pair
	 * @return {Promise<void>}
	 */
	@Command({ name: 'dolarblue' })
	async dolarblue(_ctx: Context, msg: Message): Promise<void> {
		const newMessage = new MessageUtils();
		const dolarAVG = await DolarService.getData();
		/** Send message to the channel */
		newMessage.sendMessageToChannel(dolarAVG, msg.channelId);
	}
}

export default new DolarCommand();
