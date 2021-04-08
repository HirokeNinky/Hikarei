const db = require('quick.db')

module.exports = {
    name: "balance",
    aliases: ["bal"],
    category: "Economy",
    description: "To show someone Balance Amount",
    usage: "[balance <@mention>]",
    run: async (client, message, args) => {
  if (message.channel.type == "dm") return;  
  
  let member = message.mentions.users.first() || client.users.cache.get(args[0]);
  if (!member) member = message.author;
  if (member.bot) return message.channel.send(`**${message.author.username}**, Bot don't have a balance!`);

  let uBalance = await db.fetch(`userBalance.${member.id}`)
  if (uBalance == 0 || uBalance == null) {
    message.channel.send(`**${member.username} do not have a balance yet! Use h!daily to get balance**`);
  } else {
  message.channel.send(`**${member.username}** have a balance of 💴 **${uBalance}**`);
  }
    }
}