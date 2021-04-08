const Djs = require("discord.js");
const db = require('quick.db');
const fs = require("fs");
var ms = require('parse-ms');

module.exports = {
    name: "daily",
    aliases: ["daily"],
    category: "Economy",
    description: "To get, Balance Amount",
    usage: "[daily]",
    run: async (client, message, args) => {
  if (message.channel.type == "dm") return;  
  
    let cooldown = 8.64e+7,
    amount = 1000
  
  let lastdaily = await db.fetch(`lastDaily_${message.author.id}`)
  if (lastdaily !== null && cooldown - (Date.now() - lastdaily) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastdaily))
        let eh = require('../../Modules/Handler/cooldownAns.json');
        let ops = eh[Math.floor(Math.random() * eh.length)];
        message.channel.send(`**${message.author.username}**, ${ops} (Ratelimited)\n**You'll be able to collect your next daily in ${timeObj.hours} hours, ${timeObj.minutes} minutes and ${timeObj.seconds} seconds**`)
    } else  {
        db.set(`lastDaily_${message.author.id}`, Date.now());       
    
          db.add(`userBalance.${message.author.id}`, amount)
          message.channel.send(`**${message.author.username}, collected daily 💴 ${amount} balance**`);
          
  } 
}
}