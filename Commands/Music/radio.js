const Djs = require("discord.js");
const ffmpeg = require("ffmpeg-static");
const opusscript = require("opusscript");

module.exports = {
    name: "radio",
    aliases: [],
    category: "Music",
    description: "radio song streaming",
    usage: "[radio]",
    run: async (client, message, args) => {
      if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
          .then(connection => {
            let embed = new Djs.MessageEmbed()
            .setDescription('**Connected!** Playing listen.moe KPOP.')
            .setColor('#A65EA5')
            connection.playArbitraryInput(`https://listen.moe/kpop/opus`);
            message.channel.send(embed);
          })
          .catch(console.log);
      } else {
        message.reply('You are not in a voice channel!');
      }
    }
};