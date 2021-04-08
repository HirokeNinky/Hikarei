const db = require('quick.db');
const yes = ['yes', 'y', 'ye', 'yeah', 'yup', 'yea', 'ya'];
const no = ['no', 'n', 'nah', 'nope', 'nop'];

module.exports = {
    name: "divorce",
    aliases: ["Married"],
    category: "Social",
    description: "divorce with someone you already married with",
    usage: "[divorce <@user>]",
    example: '[divorce @SomeOne]',
    run: async (client, message, args) => {
      
  var user = message.mentions.users.first();
  if(!user) return message.channel.send('Mention the user you want to divorce with');
  
  let married = await db.fetch(`married_${message.author.id}-${user.id}`);
  if(!married) return message.channel.send('You aren\'t married with him, Why don\'t you find that special someone?');
  let marrys = await db.fetch(`married_${user.id}-${message.author.id}`);
  if(!marrys) return message.channel.send('You aren\'t married with him, Why don\'t you find that special someone?');
  let m = await message.reply(`Are you sure you want to divorce with **${user.username}**? Type \`yes\` to confirm or \`no\` to cancel.`) 
  const hit = await client.util.verifyText(message.channel, message.author);
  if(hit) {
    message.channel.send('✅ Now you\'re single. That\'s nice I guess.') 
    db.delete(`marry_${message.author.id}`) 
    db.delete(`married_${message.author.id}-${user.id}`)
    db.delete(`married_${user.id}-${message.author.id}`) 
    db.delete(`marry_${user.id}`)
  } else {
    message.channel.send(`Okay ${message.author}, You are still together with **${user.username}**.`);
  }
    }
}