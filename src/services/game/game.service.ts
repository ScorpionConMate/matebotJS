/* eslint-disable indent */
class GameService {
	/** Message for the IQ method  * */
	private readonly MessageDefault = '🧠 Tu IQ es: ';

	/**
	 * @description Function to calculate your iq and display an image of it.
	 * @returns {String}
	 */

	public switchIq(): string {
		/** Generate a random number  **/
		const randomTo200 = Math.floor(Math.random() * 200);
		switch (true) {
			case randomTo200 == 200:
				return `${this.MessageDefault}${randomTo200} https://c.tenor.com/aMdHQyej-hgAAAAC/atat%C3%BCrklisesindeokudumamagerizekaliyim-9a.gif`;
			case randomTo200 == 0:
				return `${this.MessageDefault}${randomTo200} https://c.tenor.com/wgDTOc2-ObgAAAAM/retarded.gif`;
			case randomTo200 < 15:
				return `${this.MessageDefault}${randomTo200} https://c.tenor.com/-8FN3600BesAAAAM/down-syndrome.gif`;
			case randomTo200 >= 16 && randomTo200 <= 69:
				return `${this.MessageDefault}${randomTo200} https://tenor.com/view/downs-down-syndrome-huh-look-back-what-gif-12361802`;
			case randomTo200 >= 70 && randomTo200 <= 100:
				return `${this.MessageDefault}${randomTo200} https://c.tenor.com/iXq_oSpqtssAAAAd/sad-sad-face.gif`;
			case randomTo200 >= 101 && randomTo200 <= 150:
				return `${this.MessageDefault}${randomTo200} https://c.tenor.com/kTX3PiTNHz8AAAAC/wojak-wojak-sunset.gif`;
			case randomTo200 >= 151 && randomTo200 <= 200:
				return `${this.MessageDefault}${randomTo200} https://c.tenor.com/Mx9N3q-86OgAAAAM/big-brain-big-brain-wojak.gif`;
			default:
				return `${this.MessageDefault}${randomTo200} https://c.tenor.com/9ka4oY-LsQsAAAAd/confused-indian.gif`;
		}
	}
}

export default new GameService();
