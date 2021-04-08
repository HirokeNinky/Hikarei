const Discord = require("discord.js");
const superagent = require("snekfetch");

module.exports = {
    name: "dog",
    aliases: [],
    category: "Fun",
    description: "Menampilkan dog secara acak",
    usage: "[dog]",
    run: async (client, message, args) => {
    let {body} = await superagent
    .get(`https://random.dog/woof.json`);

    message.delete()
    let dogembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("🐕 Dog")
    .setImage(body.url);

    message.channel.send(dogembed);
}
}