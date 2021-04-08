const Discord = require("discord.js");
const fs = require("fs");

module.exports = async (client, message) => {
  try {
    var msg = message;
    let Data = client.config;

    if (
      message.content == `<@${client.user.id}>` ||
      message.content == `<@!${client.user.id}>`
    ) {
      message.channel.send(
        `Hello im **${client.user.username}** | My prefixes is \`${Data.Bot.Prefix}\` | Execute help commands for more info.`
      );
    }
    
    if (message.author.bot || message.channel.type === "dm") return;
    if (!msg.guild) return null;
    let prefix = Data.Bot.Prefix;
    msg.prefix = prefix;
    if (!msg.content.startsWith(prefix)) return;
    if (!msg.member) msg.member = await msg.guild.fetchMember(msg);
    const args = msg.content
      .slice(prefix.length)
      .trim()
      .split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));
    if (command == undefined || command == null) return;
    try {
      if (command) command.run(client, msg, args);
    } catch (e) {
      console.log(e);
    } finally {
      console.log(`${msg.author.username} Menggunakan Command: ${cmd}`);
    }
  } catch (e) {
    console.log(e);
  }
};