const Djs = require("discord.js");

module.exports = {
    name: "rolelist",
    aliases: [],
    category: "Information",
    description: "role list in server",
    usage: "rolelist",
    run: async (client, message, args) => {

    var embed = new Djs.MessageEmbed()
    .setAuthor(`${message.guild.name}`, message.guild.iconURL())
    .setDescription(`💳 | ID : ${message.guild.id}`)
    .setThumbnail(message.guild.iconURL())
    .setColor("RANDOM")
    .addField(`🔒 | Roles List [${message.guild.roles.size}]`, `${message.guild.roles.cache.map(roles => roles).join(' \n ')}`, true)
    .setFooter(`Requested By : ${message.author.tag}`)

    message.channel.send(embed)
}
}