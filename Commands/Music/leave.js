
const Djs = require("discord.js");
const ffmpeg = require("ffmpeg-static");
const opusscript = require("opusscript");

module.exports = {
    name: "leave",
    aliases: ["dc"],
    category: "Music",
    description: "bot leave voice",
    usage: "[leave]",
    run: async (client, message, args) => {
      if (message.member.voiceChannel) {
        message.member.voiceChannel.leave()
        let embed = new Djs.MessageEmbed()
        .setDescription('Left Voice Channel.')
        .setColor('#A65EA5')
      message.channel.send(embed);
    };
  }
}