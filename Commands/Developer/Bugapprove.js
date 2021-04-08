const Djs = require("discord.js");

module.exports = {
    name: "bugapprove",
    aliases: [],
    category: "Developer",
    description: "Bug Approved",
    usage: "[bugapprove]",
    run: async (client, message, args) => {
 const { owners_id } = client.config;
  owners_id.forEach(async function(owner) {
  if (message.author.id !== owner) return;
  await message.delete();
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Ohh, Tidak...")
  
  let user = client.users.get(args[0])
  if(!user) return message.reply("Please specify user ID")
  let reason = args.slice(1).join(" ")
  if(!reason) return message.reply("Please give some reason")
  
 user.send(`Your bug has been approve by developer, detail: \`\`\`${reason}\`\`\``)
 message.channel.send(`Bug from **${user.tag}** has been approve by developer`) 
  
  
  
})}
}