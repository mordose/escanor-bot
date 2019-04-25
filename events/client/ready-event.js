const Event = require('./event');
const c = require('ansi-colors');

module.exports = class ReadyEvent extends Event {
	constructor(client) {
		super(client);
	}

	handle() {
		this.client.on('ready', () => {
			console.log(c.bold.green(`[SUCCESS] Bot has started, with ${this.client.users.size} users, in ${this.client.channels.size} channels of ${this.client.guilds.size} guilds.`));
			this.client.user.setActivity(`[SHARD ${this.client.shard.id}/${this.client.config.bot.shards}] ${this.client.config.bot.default_cmd_prefix}help |  ${this.client.users.size} users, in ${this.client.channels.size} channels of ${this.client.guilds.size} guilds.`);
		});
		return this;
	}
};
