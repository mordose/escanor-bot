const Discord = require('discord.js');
const { shards } = require('./configs/app.json');

const Manager = new Discord.ShardingManager('./index.js');

Manager.spawn(shards);

/*** Logs ***/
Manager.on('launch', shard => {
  console.log(`Launching Shard ${shard.id} [ ${shard.id + 1} of ${Manager.totalShards} ]`);
});