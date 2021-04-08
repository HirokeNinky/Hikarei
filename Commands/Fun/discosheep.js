  const Djs = require("discord.js");

module.exports = {
    name: "discosheep",
    aliases: [],
    category: "Fun",
    description: "Menampilkan Discosheep",
    usage: "[discosheep]",
    run: async (client, message, args) => {
    let embed = new Djs.MessageEmbed()
        .setTitle("Disco Sheep!")
        .setDescription("[Direct link](https://cdn.discordapp.com/attachments/469543587344809984/499887002532184085/Disco_sheep_by_lockrikard-d6xo4oa.gif)")
        .setImage("https://cdn.discordapp.com/attachments/469543587344809984/499887002532184085/Disco_sheep_by_lockrikard-d6xo4oa.gif")
        .setColor("#4286f4")
        .setFooter("Show discosheep", client.user.displayAvatarURL())
    message.channel.send(embed);
  }
  }