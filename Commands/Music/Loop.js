const Djs = require("discord.js");

module.exports = {
  name: "loop",
  aliases: ["repeat", "lp"],
  category: "Music",
  description: "A bot commands for looping music.",
  usage: "[prefix]loop",
  run: async (client, message, args) => {
    const { premium } = client.config;
    premium_id.forEach(async function(premium) {
    if (message.author.id !== premium) return;
    await message.delete();
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Ohh, Tidak...");
    const filter = m => m.author.id === message.author.id;
    let serverQueue = client.queue.get(message.guild.id);
    
    let emb3 = new Djs.MessageEmbed()
      .setColor("RANDOM")
      .setDescription("⚠ | You are not in my voice channels to play!");

    let emb4 = new Djs.MessageEmbed()
      .setColor("RANDOM")
      .setDescription("⚠ |I'm not playing anything!");
    
    if (!serverQueue)
      return message.channel.send(
        emb4
      );
    if (
      !message.guild.members.cache.get(client.user.id).voice.channelID ||
      message.guild.members.cache.get(client.user.id).voice.channelID ===
        message.guild.members.cache.get(message.author.id).voice.channelID
    ) {
      let emb = new Djs.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(
          `**__Choose 1 of 3__**\n**[1] - Loop Single**\n**[2] - Loop Queue**\n**[3] - Disable Loop**`
        )
        .setTimestamp()
        .setFooter('Type "cancel" for exit!');
      const m = await message.channel.send(emb);
      await m.react("1️⃣");
      await m.react("2️⃣");
      await m.react("3️⃣");
      async function awaitReaction() {
        const filter = (rect, usr) =>
          ["1️⃣", "2️⃣", "3️⃣"].includes(rect.emoji.name) &&
          usr.id === message.author.id;
        const response = await m.awaitReactions(filter, {
          max: 1,
          time: 1000000
        });
        if (!response.size) {
          return undefined;
        }
        const emoji = response.first().emoji.name;
        if (emoji == "1️⃣") {
          if (serverQueue.loop == "single")
            return message.channel.send(
              "__**MusicManager**__ **| You can't choose this loop, because this loop is used now!**"
            );
          serverQueue.loop = "single";
          let emb = new Djs.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`🔁 **| Single Loop enabled!**`);
          m.edit(emb);
        }
        if (emoji == "2️⃣") {
          if (serverQueue.loop == true)
            return message.channel.send(
              "__**MusicManager**__ **| You can't choose this loop, because this loop is used now!**"
            );
          serverQueue.loop = true;
          let emb = new Djs.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`🔁 **| Queue Loop enabled!**`);
          m.edit(emb);
        }
        if (emoji == "3️⃣") {
          if (serverQueue.loop == false)
            return message.channel.send(
              "__**MusicManager**__ **| You can't Disable the loop, because you are not set in loop!**"
            );
          serverQueue.loop = false;
          let emb = new Djs.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`🔁 **| Loop Disabled!**`);
          m.edit(emb);
        }
        return awaitReaction();
      }
      return awaitReaction();
    } else if (
      message.guild.members.cache.get(client.user.id).voice.channelID !==
      message.guild.members.cache.get(message.author.id).voice.channelID
    ) {
      return message.channel.send(
        emb3
      );
    }
  }
                             );
}                            
};