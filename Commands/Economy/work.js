const Discord = require("discord.js");
const db = require("quick.db");
const talkedRecently = new Set();
const cdseconds = 1.5;
const now = Date.now();
const expirationTime = cdseconds;

module.exports = {
    name: "work",
    aliases: ["job"],
    category: "Economy",
    description: "To get, job and Balance Amount",
    usage: "[work]",
    run: async (client, message, args) => {
  let amount = Math.floor(Math.random() * 1604)
  let job = [ "Butcher", "Fisherman", "YouTuber", "Developer", "The Officer", "Hacker", "Thief", "Builder", "Driver", "Seller", "Buskers", "Thug", "Mecahnic", "Yakuza", "Cartel", "Mafia", "Bikers", "Ems", "Police"]
  let jobr = Math.floor(Math.random() * job.length)
    message.channel.send(`💸 | you jobs As **${job[jobr]}** Get \💳**$${amount} Credits\**`)
    db.add(`userBalance.${message.author.id}`, amount)
}
}
