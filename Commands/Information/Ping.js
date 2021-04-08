const { MessageEmbed } = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");

module.exports = {
  name: "ping",
  aliases: ["pang", "peng", "pong"],
  category: "Information",
  description: "A commands for checking code with JS language!",
  run: async (client, message, args) => {
    try{
  	let msgping1 = new Date();
    let msgping2 = new Date() - message.createdAt;
		const m = await message.channel.send('Ping...');
		const embed = new MessageEmbed()
    .setColor("random")
		.addField(':stopwatch: Time', `__**${m.createdTimestamp - message.createdTimestamp}ms**__`)
		.addField(':hourglass_flowing_sand: Latency', `__**${msgping2}ms**__`)
		.addField(':heartbeat: API', `__**${Math.floor(client.ping)}ms**__`)
		return m.edit(`🏓 P${'o'.repeat(Math.floor(client.ws.ping)%5 === 0 ? 0 : Math.floor(Math.random()*5))}ng..`, {embed: embed});
	  }catch(e){
		return message.channel.send(`Oh no an error occured :( ${e.message} try again later`);
	 }
  }
};