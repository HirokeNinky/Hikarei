module.exports = {
    enabled: true,
    guildOnly: true,
    permLevel: 0,
    name: "resume",
    aliases: [],
    category: "Music",
    description: "Continues a paused song",
    usage: "[resume]",
    run: async (client, message, args) => {
  const queue = client.queue.get(message.guild.id);
  
      if (queue && !queue.playing) {
            queue.playing = true;
            queue.connection.dispatcher.resume();
            return message.channel.send('▶ Resumed the music for you!');
        }
        return message.channel.send('There is nothing playing.');
    
}
};