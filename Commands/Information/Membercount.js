const Djs = require("discord.js");
const client = new Djs.Client();

module.exports = {
    name: "membercount",
    aliases: [],
    category: "Information",
    description: "MemberCount list server",
    usage: "[membercount]",
    run: async (client, message, args) => {
  let sicon = message.guild.iconURL;
 const embed = new Djs.MessageEmbed()
    .setAuthor(message.guild.name, sicon)
    .setColor('RANDOM')
    .setThumbnail(sicon)
    .addField('Member', `**${message.guild.memberCount.cache}**`, true)
        .addField('Usercount', `**${message.guild.membersCount.cache.filter(x => x === x.bot)}**`, true)
        .addField('Bots', `**${message.guild.members.cache.filter(member => member.user.bot).size}**`, true)
         .addField('Member Status', `**${message.guild.members.cache.filter(o => o.presence.status === 'online').size}** Online\n**${message.guild.members.cache.filter(i => i.presence.status === 'idle').size}** Idle/Away\n**${message.guild.members.cache.filter(dnd => dnd.presence.status === 'dnd').size}** Do Not Disturb\n**${message.guild.members.cache.filter(off => off.presence.status === 'offline').size}** Offline/Invisible\n**${message.guild.members.cache.filter(s => s.presence.status === 'streaming').size}** Streaming`, true)
        .setFooter(`Owner: ${message.guild.owner.user.tag}`)
    message.channel.send(embed)
}
};