const Discord = require("discord.js");
const malScraper = require('mal-scraper');
const config = require('../../Modules/Data/Conf');

module.exports = {
  name: "anime",
  aliases: [],
  category: "Information",
  description: "search anime list",
  usage: "[anime <anime name>]",
  run: async (client, message, args) => {
const prefix = config.Bot_Prefix;
  const search = `${args}`;

  malScraper.getInfoFromName(search)
    .then((data) => {
    const malEmbed = new Discord.MessageEmbed()
      .setAuthor(`My Anime List search result for ${args}`.split(',').join(' '))
      .setThumbnail(data.picture)
      .setColor('#ffc1cc') //I personally use bubblegum pink!
      .addField('English Title', data.englishTitle, true)
      .addField('Japanese Title', data.japaneseTitle, true)
      .addField('Type', data.type, true)
      .addField('Episodes', data.episodes, true)
      .addField('Rating', data.rating, true)
      .addField('Aired', data.aired, true)
      .addField('Score', data.score, true)
      .addField('Score Stats', data.scoreStats, true)
      .addField('Link', data.url);

      message.channel.send(malEmbed);

      //console.log(data);
    })
    .catch((err) => console.log(err));
}
}