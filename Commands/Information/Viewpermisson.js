const Discord = require("discord.js")

module.exports = {
    name: "viewpermission",
    aliases: ["vp"],
    category: "Information",
    description: "memperlihatkan permission",
    usage: "viewpermission",
    run: async (client, message, args) => {
  
  let permiss = message.member.permissions.toArray();
for (x=0; x<permiss.length; x++) {
    permiss[x] = permiss[x].replace(/_/g, ' ');
}
let result = permiss.join("\n - ").toLowerCase();
  let embed = new Discord.MessageEmbed()
  .setTitle("Views permission")
  .setColor("RANDOM")
  .setDescription(`- **${result}**`)
  .setFooter(`Permission for ${message.author.tag}`)
message.channel.send(embed)

} 
}