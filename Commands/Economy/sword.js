const Djs = require('discord.js');
const fs = require('fs');
const db = require('quick.db');

module.exports = {
    name: "sword",
    aliases: [],
    category: "Economy",
    description: "To see sword",
    usage: "[sword]",
    run: async (client, message, args) => {
  let sword = db.get(`sword.${message.author.id}`)
  let bal = db.get(`userBalance.${message.author.id}`)
  
  let swords; // wait
  if(swords  == 'iron') {
     sword = '<:571950328422072320:574427363975102480>' //:v
  } else if (sword == 'diamond') {
     sword = `<:571950593988362259:574427604107526144>` 
  } else if (sword == 'emerald') {
     sword = `<:571950725702221835:574427604271235082>`
  } else {
    sword = '<:571950186994204691:574427348061913098>';
  
  }
  
  message.channel.send(`**${message.author.username}**, Your current sword is: ${sword}`)
}
}