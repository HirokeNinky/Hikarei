const Djs = require("discord.js");
const { YOUTUBE } = process.env;
const fs = require("fs"); 
const moment = require('moment');
const yt = require('ytdl-core');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube(YOUTUBE);
const opus = require("opusscript");
const gyp = require("node-gyp");

module.exports = {
    name: "volume",
    aliases: ["vol", "v"],
    category: "Music",
    description: "Adjust the volume of music if you have a hard ear",
    usage: "[volume <1-100>]",
    run: async (client, message, args) => {
    const args1 = message.content.split(' ');
    const searchString = args1.slice(1).join(' ');
    const url = args1[1] ? args1[1].replace(/<(.+)>/g, '$1') : '';
  	const serverQueue = client.queue.get(message.guild.id);

    if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!');
		if (!serverQueue) return message.channel.send('There is nothing playing.');
		if (!args1[1]) return message.channel.send(`The current volume is: **${serverQueue.volume}**`);
		serverQueue.volume = args1[1];
    if (args1[1] > 5) return message.reply("Your ear will bleeding!");
        serverQueue.connection.dispatcher.setVolumeLogarithmic(args1[1] / 5);
        
        let vEmbed = new Djs.MessageEmbed()
        .setDescription(`I set the volume to: **${args1[1]}**`)
        .setColor("random");
        
        message.channel.send(vEmbed);
        
async function handleVideo(video, message, voiceChannel, playlist = false) {
  const serverQueue = client.queue.get(message.guild.id);
  console.log(video);
  const song = {
    id: video.id,
    title: video.title,
    url: `https://www.youtube.com/watch?v=${video.id}`
  };
  if (!serverQueue) {
    const queueConstruct = { 
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      skippers: [],
      songs: [],
      volume: 5,
      playing: true
    };
    client.queue.set(message.guild.id, queueConstruct);

    queueConstruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueConstruct.connection = connection;
      play(message.guild, queueConstruct.songs[0]);
    } catch (error) {
      console.error(`I could not join the voice channel: ${error}`);
      client.queue.delete(message.guild.id);
      return message.channel.send(`I could not join the voice channel: ${error}`);
    }
  } else {
    serverQueue.songs.push(song);
    console.log(serverQueue.songs);
    if (playlist) return undefined;
    else return message.channel.send(`✅ **${song.title}** has been added to the queue!`);
  }
  return undefined;
}

function play(guild, song) {
  const serverQueue = client.queue.get(guild.id);

  if (!song) {
    serverQueue.voiceChannel.leave();
    client.queue.delete(guild.id);
    return;
  }
  console.log(serverQueue.songs);

const dispatcher = serverQueue.connection.playStream(yt(song.url))
        .on('end', reason => {
            if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
            else console.log(reason);
            serverQueue.songs.shift();
            setTimeout(() => {
                play(guild, serverQueue.songs[0]);
            }, 250);
        })
        .on('error', error => console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

    serverQueue.textChannel.send(`🎶 Start playing: **${song.title}**`);
}
}
}