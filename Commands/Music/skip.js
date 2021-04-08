const Djs = require('discord.js');

module.exports = {
    name: "skip",
    aliases: [],
    category: "Music",
    description: "skip song queue",
    usage: "[skip]",
    run: async (client, message, args) => {
    try{
        const queue = client.queue.get(message.guild.id);
        if(!queue) return message.channel.send('There is no queue to skip');
        if(!message.member.voiceChannel) return message.channel.send('You must be on the voice channel');
        queue.connection.dispatcher.end();
        return message.channel.send(':fast_forward: Skipping current songs');
    } catch (err) {
        return message.channel.send(err.stack, { code: 'ini' });
    }
}
}