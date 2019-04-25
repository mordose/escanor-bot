const Discord = require('discord.js');
const config = require('./configs/app.json');

const Manager = new Discord.ShardingManager('./index.js');

Manager.spawn(config.bot.shards);

/*** Logs ***/
Manager.on('launch', shard => {
  console.log(`Launching Shard ${shard.id} [ ${shard.id + 1} of ${Manager.totalShards} ]`);
});