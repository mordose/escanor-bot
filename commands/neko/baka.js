const { Command } = require('discord.js-commando');

// Neko client
const nekoClient = require('nekos.life');
const neko = new nekoClient();

module.exports = class BakaCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'baka',
			aliases: [],
			group: 'neko',
			memberName: 'baka',
			description: 'Gets a URL of a baka image/gif',
			examples: ['baka'],
			guildOnly: false
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
			neko.sfw.baka().then((baka) => msg.say({embed: {
              "description": "Baka for you !",
              "color": 10592930,
              "image": {
                "url": baka.url
              }
            }}));
		} catch (e) {
			console.log(e);
			return msg.say('Something went horribly wrong! Please try again later.');
		}
	}
};
