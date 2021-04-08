const Djs = require('discord.js');
const moment = require("moment");

module.exports = {
    name: "userinfo",
    aliases: ["uinfo", "ui"],
    category: "Information",
    description: "show your information",
    usage: "[userinfo]",
    run: async (client, message, args) => {
  let status = {
    "online": "**<a:online:525583714000830464> Online**",
"dnd": " **<a:dnd:525583568051765249> Do Not Disturb**",
"idle": "**<a:idle:525583596422037504> Idle**",
"offline": " **<a:offline:525583662285062164> Offline/Invisible**",
  }
      let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  
if(!user) user = message.author;
const member = message.guild.member(user);
const embed = new Djs.MessageEmbed()
.setAuthor(`${member.user.tag}'s Information`, user.avatarURL())
.setColor('RANDOM')
.setThumbnail(user.avatarURL())
.addField("Tag",`${user.tag}`, true)
.addField("ID", `${user.id}`, true)
.addField("Nickname", `${member.nickname !== null ? `${member.nickname}` : 'Nickname is not changed'}`, true)
.addField("Created At", `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
.addField("Joined Server", `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
.addField("Bot?", `${user.bot}`, true)
.addField("Status", `${user.presence.status}`, true)
.addField("Presence Status", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
.addField("Roles", member.roles.cache.map(roles => `<@&${roles.id}>`).join('|'), true)
.setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL())

message.channel.send({embed});

}
}