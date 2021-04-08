const Djs = require('discord.js');

module.exports = {
    name: "lisence",
    aliases: [],
    category: "Information",
    description: "show license of goruto",
    run: async (client, message, args) => {
let embed = new Djs.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor("Hikarei License")
      .setDescription(`MIT License
Copyright (c) 2021 Hikarei
`)
      .setFooter(`© Hikarei 2021`);             
     message.channel.send(embed);
    }
}