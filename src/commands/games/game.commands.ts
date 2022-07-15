import { Client as Context, Message } from 'discord.js';
import { Command, Ready } from '../../decorators';
import { MessageUtils } from '../../utils/message.utils';
import { BaseCommand } from '../Base.command';
import { switchIq } from './utils';

/**
 * @description Bot command games are created in this file
 */

class GameCommand implements BaseCommand {
	@Ready()
	async ready() {
		console.info('Games ready!');
	}

	@Command({ name: 'iq' })
	async iq(_ctx: Context, msg: Message) {
		const newMessage = new MessageUtils();
		return newMessage.sendMessageToChannel(switchIq(), msg.channelId);
	}
}

export default new GameCommand();
