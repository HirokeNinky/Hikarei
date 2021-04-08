const Djs = require('discord.js');
const randomPuppy = require('random-puppy')

module.exports = {
    name: "bird",
    aliases: [],
    category: "Fun",
    description: "Menampilkan Burung secara acak",
    usage: "[bird]",
    run: async (client, message, args) => {
    if(message.author.bot) return;
    if(message.channel.type !== "text") return;
    randomPuppy('bird')
    .then(url => {
        const embed = new Djs.MessageEmbed()
        .setAuthor(`${message.author.tag} | Your bird!`, message.author.displayAvatarURL)
        .setImage(url)
        .setColor("random")
        return message.channel.send({ embed })
    })
}  
}
