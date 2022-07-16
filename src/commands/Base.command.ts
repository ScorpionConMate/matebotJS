import { Message, Client as Context } from 'discord.js';

export class BaseCommand {}

export type TCommand = {
	message?: Message;
	args?: string[];
};
