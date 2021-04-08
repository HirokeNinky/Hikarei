const discord = require('discord.js');
const fs = require('fs');
const { embed_color } = require('../Data/Conf');

module.exports = (client, oldMessage, newMessage) => {
    if (oldMessage.author.bot) return;
    let editEmbed = new discord.MessageEmbed()
    .setAuthor(`${newMessage.author.tag} | Edited message`, newMessage.author.displayAvatarURL())
    .setDescription(`**Message sent by ${newMessage.author} edited in ${oldMessage.channel.toString()}**`) 
    .addField("Before Edited:", `${oldMessage.content}` || "No content")
    .addField("Edited To:", `${newMessage.content}` || "No content")
   .addField("Link to message:", newMessage.url || newMessage.link || 'No URL') 
    .setFooter(`ID: ${newMessage.id}`) 
    .setColor(embed_color).setTimestamp()
  
var log = client.conf.get(`log.${member.guild.id}.toggle`);
let logsetting = client.conf.get(`logsetting.${member.guild.id}.data`);

if(!logsetting[oldMessage.guild.id]){
  logsetting[oldMessage.guild.id] = {
    checker: 1
  };
}
  if(!log[oldMessage.guild.id]) return;
  let values = logsetting[oldMessage.guild.id].checker
  
  if (!logsetting) return;
  if (!log || log == false) {
    console.log("ga nyala");
  } else if (log == true) {
    let channel = member.guild.channels.cache.get(logsetting);
    if (!channel) return;
    channel.send(editEmbed);
  } 
};