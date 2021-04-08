module.exports = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0,
    name: "pause",
    aliases: [],
    category: "Music",
    description: "Pauses the music",
    usage: "[pause]",
    run: async (client, message, args) => {
  const queue = client.queue.get(message.guild.id);
  
      if (queue && queue.playing) {
            queue.playing = false;
            queue.connection.dispatcher.pause();
            return message.channel.send('⏸ Paused the music for you!');
        }
        return message.channel.send('There is nothing playing.');
    
}
}