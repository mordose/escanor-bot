const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

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
			description: 'A little smug for you!',
			examples: ['smug'],
			guildOnly: true
		});
	}

	run(msg) {
        try {
			neko.sfw.smug().then((smug) => msg.say({embed: {
                "description": "Smug for you !",
                "color": 10592930,
                "image": {
                  "url": smug.url
                }
            }}));
		} catch (e) {
			console.log(e);
			return msg.say('Something went horribly wrong! Please try again later.');
		}
	}
};
