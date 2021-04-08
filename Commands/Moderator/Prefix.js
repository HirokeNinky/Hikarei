const Discord = require("discord.js");
const fs = require("fs"); //ugh ternyata sama kek punya ku dlu

module.exports = {
    name: "prefix",
    aliases: [],
    category: "Moderator",
    description: "set custom prefix",
    usage: "[prefix]",
    run: async (client, message, args) => {

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Sorry, You need permission \`ADMINISTRATOR\` to use this command!");
  if(!args[0] || args[0 == "help"]) return message.reply("h!prefix (new prefix).");

  let prefixes = client.conf.get(`prefixes.${member.guild.id}.data`);

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  let sEmbed = new Discord.MessageEmbed()
  .setColor("#FF9900")
  .setTitle("Prefix Set!")
  .setDescription(`Set to ${args[0]}`);

  message.channel.send(sEmbed);
  }
}