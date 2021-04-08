const Discord = require('discord.js');

module.exports = {
    name: "dmall",
    aliases: ["dms"],
    category: "Developer",
    description: "This Commands just for owner",
    usage: "[dmall]",
    run: async (client, message, args) => {
const { owners_id } = client.config;
  owners_id.forEach(async function(owner) {
  if (message.author.id !== owner) return;
  await message.delete();
  
  let dm = args.join(" ");
  if(!dm) return message.channel.send('Masukan Pesan Yang ingin Dikirim');
  
  message.guild.members.forEach(member => {
    if (member.id != bot.user.id && !member.user.bot) member.send(dm);
    });
  message.channel.send('Sukses Dm All Member on this server')
  });
}
}