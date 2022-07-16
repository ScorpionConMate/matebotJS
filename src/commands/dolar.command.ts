import { Client as Context, Message } from 'discord.js';
import { Command, Ready } from '../decorators';
import { MessageUtils } from '../utils/message.utils';
import { BaseCommand } from './Base.command';
import { DolarService } from '../services/index';

/**
 * @description Bot command utils for currencies are created on this file
 */
class DolarCommand implements BaseCommand {
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
		/** Delete author Message */
		await msg.delete();
	}
}

export default new DolarCommand();
