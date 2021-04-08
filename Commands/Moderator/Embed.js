const Discord = require('discord.js');

module.exports = {
    name: "embed",
    aliases: [],
    category: "Information",
    description: "message you want. ",
    usage: "[embed <text/message>]",
    run: async (client, message, args) => {
  message.delete()
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`❌ | **${message.author.username}**, Sorry you can't use this command!`);
    let specifyembed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`${message.author},Please enter a word or message to embed.`)
        .setTimestamp();

    var text = args.join(" ");
    if (!text) return message.channel.send(specifyembed);

    let postMsg = await message.channel.send('**Please wait a moment...**');
    let embedsay = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setDescription(`${text}`);
        message.channel.send(embedsay).then(() => { postMsg.delete();});
    }
};