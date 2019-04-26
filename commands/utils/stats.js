const {
	Command
} = require('discord.js-commando');

const moment = require('moment');
require('moment-duration-format');
const { stripIndents } = require('common-tags');

const { version } = require('../../package');

module.exports = class StatsCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'stats',
			aliases: [],
			group: 'utils',
			memberName: 'stats',
			description: 'Displays statistics about the bot.',
			examples: ['stats'],
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
     */
	run(msg) {
		try {
			msg.say({
				embed: {
					title: '**Bot Statistics**',
					color: 10592930,
					fields: [
						{
							name: '❯ Uptime',
							value: moment.duration(this.client.uptime).format('d[ days], h[ hours], m[ minutes, and ]s[ seconds]'),
							inline: true
						},
						{
							name: '❯ Memory usage',
							value: `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`,
							inline: true
						},
						{
							name: '❯ General Stats',
							value: stripIndents`
                            • Shard: ${this.client.shard.id} out of ${this.client.config.bot.shards}
                            • Guilds: ${this.client.guilds.size}
                            • Channels: ${this.client.channels.size}
                            • Users: ${this.client.guilds.map(guild => guild.memberCount).reduce((a, b) => a + b)}
                            `,
							inline: true
						},
						{
							name: '❯ Version',
							value: `v${version}`,
							inline: true
						}
					]
				}
			});
		} catch (e) {
			console.log(e);
			return msg.say('Something went horribly wrong! Please try again later.');
		}
	}
};
