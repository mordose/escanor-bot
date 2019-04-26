const { Command } = require('discord.js-commando');
const { text } = require('../../assets/why');

module.exports = class WhyCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'why',
			aliases: [],
			group: 'info',
			memberName: 'why',
			description: 'Gets a question',
			examples: ['why'],
			guildOnly: false,
			throttling: {
				usages: 1,
				duration: 5
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
			return msg.say(text[Math.floor(Math.random() * text.length)]);
		} catch (e) {
			console.log(e);
			return msg.say('Something went horribly wrong! Please try again later.');
		}
	}
};
