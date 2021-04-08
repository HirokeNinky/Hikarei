const Djs = require("discord.js");
const fs = require("fs");
const { embed_color } = require("../Data/Conf");

module.exports = async (client, member) => {
  let goodbyesettingon = client.conf.get(`goodbye.${member.guild.id}.toggle`);
  let goodbyesettingdatasrv = client.conf.get(`goodbye.${member.guild.id}.data`);

  if (!goodbyesettingdatasrv) return;
  if (!goodbyesettingon || goodbyesettingon == false) {
    console.log("ga nyala");
  } else if (goodbyesettingon == true) {
    let channel = member.guild.channels.cache.get(goodbyesettingdatasrv);
    if (!channel) return;

    let embed = new Djs.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(
        `${member.user.username} Leave`,
        `${member.user.displayAvatarURL()}`
      )
      .setDescription(
        `Goodbye **${member.user.username}** from ${member.guild.name}\nSeeyou next time...\n\n• This Server now has **\`${member.guild.memberCount}\` Members**!`
      );
    channel.send(embed);
  }
};