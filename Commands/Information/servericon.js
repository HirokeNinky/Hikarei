const Djs = require("discord.js");

module.exports = {
    name: "servericon",
    aliases: ["picture", "icon", "ava"],
    category: "Information",
    description: "Server Icon",
    usage: "[servericon]",
    run: async (client, message, args) => {
  let embed = new Djs.MessageEmbed()
      .setTitle("Direct Link")
      .setDescription(`**${message.guild.name} Server Icon**`)
      .setImage(message.guild.iconURL())
      .setURL(message.guild.iconURL())
      .setColor("#4286f4")
      .setFooter("© Hikarei 2021", client.user.displayAvatarURL())
  message.channel.send(embed);
}
}