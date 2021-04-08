const Discord = require('discord.js');

module.exports = {
    name: "poll",
    aliases: [],
    category: "Information",
    description: "poll voting",
    usage: "[poll <text/message>]",
    run: async (client, message, args) => {
    if (args == 0) return message.channel.send({
        embed: {
            description: `Enter a suggestion h!poll[text], Example: h!poll How are you`
        }
    })
    let embed = new Discord.MessageEmbed()
    .setTitle(`Saran dari ${message.author.username}`)
    .setColor("#ffff00")
    .setDescription(`${args}`.split(',').join(' '));
    return message.channel.send(embed).then(message.delete())
    .then(function (message, str) {
        message.react("✅")
        message.react("❎")
    }).catch(function() {
    });
    }
};