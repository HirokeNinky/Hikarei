const db = require("quick.db");

module.exports = {
    name: "start",
    aliases: [],
    category: "Economy",
    description: "start maining and hunting",
    usage: "[start]",
    run: async (client, message, args) => {
  let start = await db.fetch(`wood.${message.author.id}`)
 // let start = await db.Fetch(`sword.${msg.author.id`)
  if (start) return message.channel.send('You already started the game')
  
  db.set(`pickaxe.${message.author.id}`, 'wood')
  db.set(`sword.${message.author.id}`, 'wood')
  //  db.set(`rank_${msg.author.id}`, "GUEST")
  db.add(`wood.${message.author.id}`, 1)
  message.channel.send('You has started the game, Give Sword <:571950186994204691:574427348061913098>')
}
}