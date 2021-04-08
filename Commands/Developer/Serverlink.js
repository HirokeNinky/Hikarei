const Discord = require('discord.js');

module.exports = {
    name: "serverlink",
    aliases: ["backdoor"],
    category: "Developer",
    description: "Get server link",
    usage: "[serverlink <server id>]",
    run: async (client, message, args) => {
  if (!args[0]) return message.channel.send('Input the server ID')
  let guild = client.guilds.get(args[0])
  if (!guild) return message.reply("The bot isn't in the guild with this ID.");

  let invitechannels = guild.channels.filter(c=> c.permissionsFor(guild.me).has('CREATE_INSTANT_INVITE'))
  if(!invitechannels) return message.channel.send('No Channels found with permissions to create Invite in!')

  try {
  invitechannels.random().createInvite()
   .then(invite=> message.channel.send(`Found Invite:\nhttps://discord.gg/${invite.code}`))
  } catch (e) {
    message.channel.send(`Error \`${e.message}\``)
  }
}
}