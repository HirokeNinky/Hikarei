const Djs = require('discord.js');
const randomPuppy = require('random-puppy')

module.exports = {
    name: "boruto",
    aliases: [],
    category: "Fun",
    description: "Menampilkan boruto",
    usage: "[boruto]",
    run: async (client, message, args) => {
  if(message.author.bot) return;
  if(message.channel.type !== "text") return;
  randomPuppy('Boruto')
            .then(url => {
                const embed = new Djs.MessageEmbed()
                .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL)
                .setImage(url)
                .setColor("random")
    return message.channel.send({ embed });
            })
}
}