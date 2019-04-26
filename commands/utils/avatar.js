const {
    Command
} = require('discord.js-commando');

module.exports = class AvatarCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'avatar',
            aliases: [],
            group: 'utils',
            memberName: 'avatar',
            description: 'Sends the avatar of a user.',
            examples: ['avatar', 'avatar @user', 'avatar user'],
            guildOnly: true,
            args: [
                {
                    type: "user",
                    prompt: "Which user would you like to get the avatar of ?",
                    key: "user",
                    default: msg => msg.author
                }
            ],
			throttling: {
				usages: 1,
				duration: 15
			}
        });
    }

    /**
     *
     * @param msg
     * @param user
     */
    run(msg, { user }) {
        try {
            msg.say({
                embed: {
                    "title": `${user.tag}'s avatar`,
                    "color": 10592930,
                    "url": user.displayAvatarURL,
                    "image": {
                        "url": user.displayAvatarURL
                    }
                }
            });
        } catch (e) {
            console.log(e);
            return msg.say('Something went horribly wrong! Please try again later.');
        }
    }
};