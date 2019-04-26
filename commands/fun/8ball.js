const {
    Command
} = require('discord.js-commando');
const Requester = require('../../utils/requester');

module.exports = class EightBallCommand extends Command {
    constructor(client) {
        super(client, {
            name: '8ball',
            aliases: [],
            group: 'fun',
            memberName: '8ball',
            description: 'Ask the magic 8ball a question !',
            examples: ['8ball <question>'],
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
            let question = msg.content.split(/\s+/g).slice(1).join(" ");

            if (!question) {
                return msg.say('You must provite a question !');
            }

            Requester("https://nekos.life/api/v2/8ball", (response) => {
                msg.say({
                    embed: {
                        "description": response.response,
                        "color": 10592930,
                        "image": {
                            "url": response.url
                        }
                    }
                })
            }, (err) => {
                console.log(err)
            })
        } catch (e) {
            console.log(e);
            return msg.say('Something went horribly wrong! Please try again later.');
        }
    }
};