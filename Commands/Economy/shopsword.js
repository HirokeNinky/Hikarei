const Djs= require("discord.js")
const db = require("quick.db")
 
module.exports = {
    name: "shopsword",
    aliases: [],
    category: "Economy",
    description: "buy sword",
    usage: "[shopsword]",
    run: async (client, message, args) => {
  //variable
  let bal = await db.fetch(`userBalance.${message.author.id}`)
 
 
if (!args[0]) {
  let embed = new Djs.MessageEmbed()
.setTitle("Sword Shop ")
.setDescription("To purchase a Sword, type » h!shop-sword buy <id>")
.setColor("RANDOM")
.addField("Sword shop", `1. Iron Sword > Price: $30000\n2. Diamond Sword > Price: $500000   \n3. Emerald Sword > Price: $9000000  `)
//.setImage("https://cdn1.iconfinder.com/data/icons/marketing-cartoon/512/g7133-512.png")
//.setFooter("Wsssp")
.setTimestamp()
message.channel.send(embed)
} else if (args[0] == 'buy') {
   
  
        if (args[1] == "1") {
          if (bal <= '30000') return message.reply(`You don't have enough balance`);
          const buy = new Djs.MessageEmbed()
          .setTitle(`I set yout sword to`)
          .setColor(`RANDOM`)
          .setFooter(`Sword`)
          .setImage(`https://cdn.discordapp.com/emojis/566862085397676050.png?v=1`)
          message.channel.send(buy)
          db.set(`sword.${message.author.id}`, 'iron')
          db.subtract(`userBalance.${message.member.id}`, 30000)
            return;
          //https://cdn.discordapp.com/emojis/566862226284347402.png?v=1
        } //wait
        if (args[1] == "2") {
          if (bal <= '500000') return message.reply(`You don't have enough balance`);
          const buy = new Djs.MessageEmbed()
          .setTitle(`I set your sword to`)
          .setColor(`RANDOM`)
          .setFooter(`Sword`)
          .setImage(`https://cdn.discordapp.com/emojis/566862193413324811.png?v=1`)
          message.channel.send(buy)
          db.set(`sword.${message.author.id}`, 'diamond')
          db.subtract(`userBalance.${message.member.id}`, 500000)
          return;
                
        }
        if (args[1] == "3") {
          if (bal <= '9000000') return message.reply(`You don't have enough balance`);
          const buy = new Djs.MessageEmbed()
          .setTitle(`I set your sword to`)
          .setColor(`RANDOM`)
          .setFooter(`Sword`)
          .setImage(`https://cdn.discordapp.com/emojis/566862226284347402.png?v=1`)
          message.channel.send(buy)
          db.set(`sword.${message.author.id}`, 'emerald')
          db.subtract(`userBalance.${message.member.id}`, 9000000)
          return;
        }
  
}
}
}