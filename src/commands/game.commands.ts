import { Client as Context, Message } from 'discord.js';
import { Command, Ready } from '../decorators';
import { MessageUtils } from '../utils/message.utils';
import { BaseCommand } from './Base.command';
import { GameService } from '../services/index';

/**
 * @description Bot command games are created in this file
 */
class GameCommand implements BaseCommand {
	@Ready()
	async ready() {
		console.info('Games ready!');
	}

	/**
	 * @description Generates a random number and returns a template string with an image
	 * @return {Promise<void>}
	 */

	@Command({ name: 'iq' })
	async iq(_ctx: Context, msg: Message): Promise<void> {
		const newMessage = new MessageUtils();
		try {
			newMessage.sendMessageToChannel(GameService.getIq(msg), msg.channelId);
			await msg.delete();
		} catch (err) {
			console.error(err.message);
			throw new Error(err);
		}
	}
}

export default new GameCommand();
