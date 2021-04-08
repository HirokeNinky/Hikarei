const Discord = require('discord.js')

module.exports = async (client, oldState, newState) => {
  let dbs = new Discord.Collection()
  let serverQueue = client.queue.get(newState.guild.id)
  if(!serverQueue) return null;
  let bot_channel_id = newState.guild.members.cache.get(client.user.id).voice.channelID
  if(bot_channel_id === null || !bot_channel_id || bot_channel_id === undefined) return null;
  let autoleave = client.channels.cache.get(bot_channel_id)
  if(autoleave === undefined || !autoleave || autoleave === null) return null;
  if(autoleave) {
    if(client.user.id) {
      let channel_filter = autoleave.members.filter(x => x.user.bot !== true)
      let size = channel_filter.size
      console.log(size)
      if(size === 0) {
        let embed1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription('⚠ | Stopping playing and leaving voice channel in 15 seconds if no one will join.')
        let m = await serverQueue.textChannel.send(embed1)
        m.delete({ timeout: 15000 })
        dbs.set(5000)
        setTimeout(async () => {
          let embed3 = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(
          "⚠ | I have leave the voice channel, Reason » due to inactivity!"
        );
          await serverQueue.textChannel.send(embed3)
          await serverQueue.voiceChannel.leave()
          await client.queue.delete(newState.guild.id)
        }, 10000)
      }
    }
  }
}