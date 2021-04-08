const db = require('quick.db')
const ms = require('parse-ms')
const Djs = require('discord.js')

module.exports = {
    name: "monthly",
    aliases: [],
    category: "Economy",
    description: "Give someone reputation point",
    usage: "[monthly]",
    run: async (client, message, args) => {


    let cooldown = 8.64e+7
    let amount = 1420
    // random amount: Math.floor(Math.random() * 1000) + 1;


  let monthly = await db.fetch(`monthly_${message.author.id}`)
  if (monthly !== null && cooldown - (Date.now() - monthly) > 0) {
        let timeObj = ms(cooldown - (Date.now() - monthly))
        let eh = require('../../Modules/Handler/cooldownAns.json');
        let ops = eh[Math.floor(Math.random() * eh.length)];
        message.channel.send(`**${message.author.username}**, ${ops} (Ratelimited)\n**You'll be able to collect your next monthly in ${timeObj.hours} hours, ${timeObj.minutes} minutes and ${timeObj.seconds} seconds**`)
    } else  {
        db.set(`monthly_${message.author.id}`, Date.now());       
    
          db.add(`userBalance.${message.author.id}`, amount)
          message.channel.send(`**${message.author.username}, collected monthly 💴 ${amount} balance**`);
          
  } 
}
}