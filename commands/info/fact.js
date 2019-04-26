const { Command } = require('discord.js-commando');
const { text } = require('../../assets/facts');

module.exports = class FactCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'fact',
			aliases: [],
			group: 'info',
			memberName: 'fact',
			description: 'Gets a random fact',
			examples: ['fact'],
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
