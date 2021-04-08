const Djs = require("discord.js");
const fs = require("fs");
const { embed_color } = require("../Data/Conf");

module.exports = async (client, member) => {
  let welcomesettingon = client.conf.get(`welcome.${member.guild.id}.toggle`);
  let welcomesettingdatasrv = client.conf.get(`welcome.${member.guild.id}.data`);

  if (!welcomesettingdatasrv) return;
  if (!welcomesettingon || welcomesettingon == false) {
    console.log("ga nyala");
  } else if (welcomesettingon == true) {
    let channel = member.guild.channels.cache.get(welcomesettingdatasrv);
    if (!channel) return;

    let embed = new Djs.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(
        `${member.user.username} Joined`,
        `${member.user.displayAvatarURL()}`
      )
      .setDescription(
        `Welcome **${member.user.username}**! To **${member.guild.name}** Server \nHope You Enjoy...\n\n• This Server now has **\`${member.guild.memberCount}\` Members**!`
      );
    channel.send(embed);
  }
};