const fs = require('fs');
const Djs = require('discord.js');

module.exports = {
    name: "logging",
    aliases: ["log"],
    category: "Moderator",
    description: "Set the logging to the channel like \`Message Edited\`, \`Message Deleted\`",
    usage: "[logging]",
    run: async (client, message, args) => {
    var option = args.slice(0).join(" ");
    if (!option) {
      let embed = new Djs.MessageEmbed()
        .setDescription(
          `
**Usage**
1. \`h!logging set [#channel]\`
2. \`h!logging toggle\`
`
        )
              .setFooter("Logging Announcement")
              .setTimestamp()
        .setColor("#9C84EF");
      message.channel.send({ embed });
    } else {
      if (option.match("set")) {
        var nick = await client.conf.get(`logs.${message.guild.id}.data`);
        if (!message.member.hasPermission("MANAGE_CHANNELS"))
          return message.channel.send(
            `**${message.author}** OOPS, You lack the **\`MANAGE CHANNELS\` Permissions**!`
          );
        var inputmessage = message.mentions.channels.first();
        if (args[0]) {
          let embed = new Djs.MessageEmbed()
            .setDescription(
              `I set the **Logging** Channels to **${inputmessage}**.`
            )
            .setColor("random");
          message.channel.send({ embed });
          client.conf.set(`logs.${message.guild.id}.data`, inputmessage);
        }
      }
    }
    if (option.match("toggle")) {
      let data = await client.conf.get(`logs.${message.guild.id}.toggle`);
      if (!data || data == false) {
        let embed = new Djs.MessageEmbed()
          .setDescription(`Enabled logging!.`)
          .setColor("random");
        message.channel.send({ embed });
        client.conf.set(`logs.${message.guild.id}.toggle`, true);
      } else if (data == true) {
        let embed = new Djs.MessageEmbed()
          .setDescription(`Disabled logging!.`)
          .setColor("random");
        message.channel.send({ embed });
        client.conf.set(`logs.${message.guild.id}.toggle`, false);
      }
    }
  }
};