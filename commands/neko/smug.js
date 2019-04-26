const {
	Command
} = require('discord.js-commando');

// Neko client
const nekoClient = require('nekos.life');
const neko = new nekoClient();

module.exports = class SmugCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'smug',
			aliases: [],
			group: 'neko',
			memberName: 'smug',
			description: 'Gets a URL of a smug image/gif',
			examples: ['smug'],
			guildOnly: false,
			throttling: {
				usages: 1,
				duration: 15
			}
		});
	}

	/**
	 *
	 * @param msg
	 * @param args
	 * @param fromPattern
	 * @returns {Promise<Message|Message[]>}
	 */
	run(msg, args, fromPattern) {
		try {
			neko.sfw.smug().then(smug => msg.say({
				embed: {
					description: 'Smug for you !',
					color: 10592930,
					image: {
						url: smug.url
					}
				}
			}));
		} catch (e) {
			console.log(e);
			return msg.say('Something went horribly wrong! Please try again later.');
		}
	}
};
