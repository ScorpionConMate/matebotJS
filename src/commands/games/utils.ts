/* eslint-disable indent */
const mensajeGeneral = '🧠 Tu IQ es: ';

/**
 * @description Function to calculate your iq and display an image of it.
 * @returns {String}
 */

export function switchIq(): string {
	/** Generate a random number  **/
	const randomTo200 = Math.floor(Math.random() * 200);
	switch (true) {
		case randomTo200 == 200:
			return `${mensajeGeneral}${randomTo200} https://c.tenor.com/aMdHQyej-hgAAAAC/atat%C3%BCrklisesindeokudumamagerizekaliyim-9a.gif`;
		case randomTo200 == 0:
			return `${mensajeGeneral}${randomTo200} https://c.tenor.com/wgDTOc2-ObgAAAAM/retarded.gif`;
		case randomTo200 < 15:
			return `${mensajeGeneral}${randomTo200} https://c.tenor.com/-8FN3600BesAAAAM/down-syndrome.gif`;
		case randomTo200 >= 16 && randomTo200 <= 69:
			return `${mensajeGeneral}${randomTo200} https://tenor.com/view/downs-down-syndrome-huh-look-back-what-gif-12361802`;
		case randomTo200 >= 70 && randomTo200 <= 100:
			return `${mensajeGeneral}${randomTo200} https://c.tenor.com/iXq_oSpqtssAAAAd/sad-sad-face.gif`;
		case randomTo200 >= 101 && randomTo200 <= 150:
			return `${mensajeGeneral}${randomTo200} https://c.tenor.com/kTX3PiTNHz8AAAAC/wojak-wojak-sunset.gif`;
		case randomTo200 >= 151 && randomTo200 <= 200:
			return `${mensajeGeneral}${randomTo200} https://c.tenor.com/Mx9N3q-86OgAAAAM/big-brain-big-brain-wojak.gif`;
		default:
			return `${mensajeGeneral}${randomTo200} https://c.tenor.com/9ka4oY-LsQsAAAAd/confused-indian.gif`;
	}
}
