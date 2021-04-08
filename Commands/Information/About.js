const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "about",
  aliases: [],
  category: "Information",
  description: "Returns all commands, or one specific command info",
  usage: "[About Information]",
  run: async (client, message, args) => {
    let owner = client.users.cache.get("742567583483691010");
    let co = client.users.cache.get("742567583483691010");
    let embed = new MessageEmbed()
      .setColor("RANDOM")
      .setAuthor("Hikarei Bio")
      .setDescription(
        `**Hikarei is a discord bot, this bot has music features,games and much more**
**This bot was created by ${owner.tag}. if you find an error command, please contact ${owner.tag}. if you find a bug in this bot please use the link below**
**Use this link**
[Vote](https://discordbots.org/bot/513174081051557899/vote) [|Support Server](https://discord.gg/4JRcByr) [|Subscribe](https://www.youtube.com/channel/UCUpNvTDDgx2TZ-MyHayP5oA?view_as=subscriber)
**Coopration with : AG Development™ & ${co.tag}`
      )
      .setFooter(`© Hikarei 2021`);
    message.channel.send(embed);
  }
};
