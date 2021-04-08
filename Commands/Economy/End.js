const Djs = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "end",
    aliases: [],
    category: "Economy",
    description: "end maining and hunting, delete profile",
    usage: "[end]",
    run: async (client, message, args) => {
  let end = await db.fetch(`wood.${message.author.id}`)
 // let start = await db.Fetch(`sword.${msg.author.id`)
  if (end) return message.channel.send('You end + delete profile')
  
  let optraw = args.slice(0).join(" ");
  let opt = optraw.toLocaleLowerCase();
  let tono = Djs.MessageEmbed;

  let embed1 = new tono()
    .setColor("GREEN")
    .setTitle("****Choose The Emoji****")
    .setDescription(
      `| [:white_check_mark:] » yes | [:x:] » no |`
    )
    .setTimestamp()
    db.set(`pickaxe.${message.author.id}`, 'wood')
  db.set(`sword.${message.author.id}`, 'wood')
  //  db.set(`rank_${msg.author.id}`, "GUEST")
  db.delete(`wood.${message.author.id}`, 0)
  message.channel.send('You has deleted your sword')
}
}