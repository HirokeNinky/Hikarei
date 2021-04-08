const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "cserver",
    aliases: ["cs", "guilds"],
    category: "Developer",
    description: "Reloads a command that\'s been modified.",
    usage: "[reload <category> <command>]",
    run: async (client, message, args) => {
    const guildArray = client.guilds.cache.map((guild) => {
    return`Guild name count : ${guild.name} : ${guild.memberCount} \nGuilds Id : ${message.guild.cache.id} \nGuilds Count : ${client.guilds.cache.size} `
    })
    
    message.channel.send(`\`\`\`${guildArray.join("\n")}\`\`\``)
}
}