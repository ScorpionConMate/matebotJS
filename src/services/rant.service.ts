import { MessageUtils } from '../utils/message.utils';

export class RantService {
	getSong() {
		const song = MessageUtils.withBacktick(`la concha de tu madre all boys
la concha de tu madre all boys
te vamos a quemar floresta
la re puta madre que te re pario`.toUpperCase(), 3);
		return song;
	}
}
