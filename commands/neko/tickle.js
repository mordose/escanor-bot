const {
    Command
} = require('discord.js-commando');

// Neko client
const nekoClient = require('nekos.life');
const neko = new nekoClient();

module.exports = class TickleCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'tickle',
            aliases: [],
            group: 'neko',
            memberName: 'tickle',
            description: 'Gets a URL of a tickle image/gif',
            examples: ['tickle'],
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
            neko.sfw.tickle().then((tickle) => msg.say({
                embed: {
                    "description": "Tickle for you !",
                    "color": 10592930,
                    "image": {
                        "url": tickle.url
                    }
                }
            }));
        } catch (e) {
            console.log(e);
            return msg.say('Something went horribly wrong! Please try again later.');
        }
    }
};