const ytdl = require("discord-ytdl-core");
const Djs = require("discord.js");
const YouTube = require("simple-youtube-api");
const youtube = new YouTube(process.env.YOUTUBE);

module.exports = {
  name: "play",
  aliases: ["p"],
  category: "Music",
  description: "A commands for playing a audio using Youtube API",
  usage: "[name | url]",
  run: async (client, message, args) => {
    message.delete();
    const searchString = args.join(" ");
    const url = args[0] ? args[0].replace(/<(.+)>/g, "$1") : "";
    const serverQueue = client.queue.get(message.guild.id);

    let emb0 = new Djs.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(
        "⚠ | I'm sorry but you need to be in a voice channel to play music!"
      );

    let emb1 = new Djs.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(
        "⚠ | I cannot connect to your voice channel, make sure I have the proper permissions!"
      );

    let emb2 = new Djs.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(
        "⚠ | I cannot speak in this voice channel, make sure I have the proper permissions!"
      );

    let emb3 = new Djs.MessageEmbed()
      .setColor("RANDOM")
      .setDescription("⚠ | You are not in my voice channels to play!");

    let emb4 = new Djs.MessageEmbed()
      .setColor("RANDOM")
      .setDescription("⚠ | No result found.");

    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.channel.send(emb0);
    if (!args[0])
      return message.channel.send(
        `${message.author.tag} | if don't know execute **${client.config.Bot.Prefix}help play** for more info`
      );
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT")) {
      return message.channel.send(emb1);
    }
    if (!permissions.has("SPEAK")) {
      return message.channel.send(emb2);
    }
    if (
      !message.guild.members.cache.get(client.user.id).voice.channelID ||
      message.guild.members.cache.get(client.user.id).voice.channelID ===
        message.guild.members.cache.get(message.author.id).voice.channelID
    ) {
      if (
        url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)
      ) {
        message.channel
          .send("🔍 Searching playlist `" + searchString + "`")
          .then(msg => {
            msg.delete(1000);
          });
        const playlist = await youtube.getPlaylist(url);
        const videos = await playlist.getVideos();
        let video2;
        for (const video of Object.values(videos)) {
          if (youtube.getVideoByID(video.id)) {
            video2 = await youtube.getVideoByID(video.id);
            await client.player.handleVideo(
              video2,
              message,
              voiceChannel,
              true,
              0
            );
          } else return;
        }
        return;
      } else {
        try {
          var video = await youtube.getVideo(url);
        } catch (error) {
          try {
            var response = await `1`;
          } catch (err) {
            console.error(err);
          }

          try {
            var videos = await youtube.searchVideos(searchString, 10);
            let index = 0;
            const videoIndex = await parseInt(response);
            var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
          } catch (err) {
            console.error(err.message);
            return message.channel.send(emb4);
          }
        }
        return client.player.handleVideo(
          video,
          message,
          voiceChannel,
          false,
          0
        );
      }
    } else if (
      message.guild.members.cache.get(client.user.id).voice.channelID !==
      message.guild.members.cache.get(message.author.id).voice.channelID
    ) {
      return message.channel.send(emb3);
    }
  }
};
