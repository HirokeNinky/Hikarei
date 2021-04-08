const db = require('quick.db')
const ms = require('parse-ms')
const Djs = require('discord.js')

module.exports = {
    name: "weekly",
    aliases: [],
    category: "Economy",
    description: "To get, Balance Amount",
    usage: "[weekly]",
    run: async (client, message, args) => {


    let cooldown = 8.64e+7
    let amount = 2000
    // random amount: Math.floor(Math.random() * 1000) + 1;


  let weekly = await db.fetch(`weekly_${message.author.id}`)
  if (weekly !== null && cooldown - (Date.now() - weekly) > 0) {
        let timeObj = ms(cooldown - (Date.now() - weekly))
        let eh = require('../../Modules/Handler/cooldownAns.json');
        let ops = eh[Math.floor(Math.random() * eh.length)];
        message.channel.send(`**${message.author.username}**, ${ops} (Ratelimited)\n**You'll be able to collect your next weekly in ${timeObj.hours} hours, ${timeObj.minutes} minutes and ${timeObj.seconds} seconds**`)
    } else  {
        db.set(`weekly_${message.author.id}`, Date.now());       
    
          db.add(`userBalance.${message.author.id}`, amount)
          message.channel.send(`**${message.author.username}, collected weekly 💴 ${amount} balance**`);
          
  } 
}
}