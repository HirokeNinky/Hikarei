const Djs = require('discord.js');
const randomPuppy = require('random-puppy')

module.exports = {
    name: "discopanda",
    aliases: [],
    category: "Fun",
    description: "Menampilkan discopanda",
    usage: "[discopanda]",
    run: async (client, message, args) => {
    if(message.author.bot) return;
    if(message.channel.type !== "text") return;
    randomPuppy('panda')
    .then(url => {
        const embed = new Djs.MessageEmbed()
        .setAuthor(`${message.author.tag} | Your panda!`, message.author.displayAvatarURL)
        .setImage(url)
        .setColor("random")
        return message.channel.send({ embed })
    })
}
}