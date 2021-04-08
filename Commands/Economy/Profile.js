const Djs = require('discord.js');
const moment = require("moment");
const db = require("quick.db")

module.exports = {
    name: "profile",
    aliases: ["prfl"],
    category: "Social",
    description: "Retrieves your current user profile",
    usage: "profile [@SomeOne | id]",
   example: ['profile @SomeOne', 'profile 123456789'],
    run: async (client, message, args) => {
  let user = message.mentions.users.first() || message.author
  var balance = await db.fetch(`userBalance.${user.id}`)
//  let xp = require("../xp.json");
  // let curlvl = xp[message.author.id].level;
  //let curxp = xp[message.author.id].xp;
let status = await db.fetch(`status.${user.id}`)
if(!status) return   db.set(`status.${message.author.id}`, "No Status")
  let rank = await db.fetch(`rank.${message.author.id}`)
    const marry = await db.fetch(`marry_${user.id}`);
 
  const embed = new Djs.MessageEmbed()
  
  .setAuthor(`${user.username} Profile's`, user.avatarURL) // display?
  .setColor('#91e244') 
  .setThumbnail(user.avatarURL) 
  .addField('Name', `${user.username}`)
  .addField(':pencil:  Bio', `\`\`\`\n${status}\n\`\`\``) 
  .addField(':second_place:  Reputation', await db.fetch(`reputation.${user.id}`) ? await db.fetch(`reputation.${user.id}`) : 0, true)
  .addField(':dollar: Balance', balance ? balance : 0, true)
  .addField('♥ Married with', `${marry ?  `${marry}` : 'Nobody'}`) 
  //.addField(':label: Rank', `\`\`\`\n${rank}\n\`\`\``)
 .setImage('https://cdn.discordapp.com/attachments/519028852647919648/542879692622004245/multicolours_1.gif')
  //.setFooter(`View your inventory use $,inventory`) 
  

  message.channel.send(embed);
 }
}