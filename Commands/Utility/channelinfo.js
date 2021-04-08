const Discord = require("discord.js")
const LOL =
      {
        "false": "<a:no:528804256069713933> No NSFW channel",
        "true": "<a:yes:528804255793152001> This is NSFW channel"
      }


module.exports = {
    name: "channelinfo",
    aliases: ["ci"],
    category: "Utility",
    description: "See channel info",
    usage: "[channelinfo]",
    run: async (client, message, args) => {
  let ch = message.channel
  
  let embed = new Discord.MessageEmbed()
  .setAuthor("Channel Information", message.guild.iconURL())
  .setColor("RANDOM")
  .addField("General Information", `Name: ${ch.name}\nID: ${ch.id}\nAge: ${ch.createdAt}\nType: ${ch.type}\nTopic: ${ch.topic}`)
  .addField("Other Information", `Position: ${ch.position}\nLast message: ${ch.lastMessage} | \`${ch.lastMessageID}\`\nNSFW: ${LOL[ch.nsfw]}`)
  .setFooter(`Replying to: ${message.author.tag}`)
  
  
  
  message.channel.send(embed)
}
}