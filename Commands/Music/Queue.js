const Discord = require("discord.js");
const moment = require("moment");

module.exports = {
  name: "queue",
  aliases: ["q"],
  category: "Music",
  description: "A commands for see a queue list.",
  usage: "[]",
  run: async (client, message, args) => {
    let serverQueue = client.queue.get(message.guild.id);
    const voiceChannel = message.member.voice.channel;

    let emb0 = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(
        "⚠ | I'm sorry but you need to be in a voice channel to play music!"
      );

    let emb3 = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription("⚠ | You are not in my voice channels to play!");

    let emb4 = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription("⚠ |I'm not playing anything!");

    if (
      client.queue.has(message.guild.id) &&
      voiceChannel.id !== client.queue.get(message.guild.id).voiceChannel.id
    )
      return message.channel.send(emb3);
    if (!voiceChannel) return message.channel.send(emb0);
    if (!serverQueue) {
      return message.channel.send(emb4);
    }
    let songs = serverQueue.songs
    let songsa = songs
      .slice(0, 20)
      .map(
        m =>
          `**[${songs.indexOf(m) + 1}]** » ${m.title} | Requested by » ${songs.request}`
      );
    const embed = new Discord.MessageEmbed()
      .setAuthor(`Queue`, message.guild.iconURL())
      .setDescription(songsa.join("\n"))
      .setFooter(`Showing ${songs.length}/${songsa.length} Songs`)
      .setColor("#FFFF00");
    return message.channel.send(embed);
  }
};

function chunk(array, chunkSize) {
  const temp = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    temp.push(array.slice(i, i + chunkSize));
  }
  return temp;
}
