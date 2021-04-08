const fs = require('fs');
const db = require('quick.db')
module.exports = {
    name: "transfer",
    aliases: ["tf"],
    category: "Economy",
    description: "transfer you balance <someone>",
    usage: "[transfer]",
    run: async (client, message, args) => {
  
  let user = message.mentions.users.first() || client.users.get(args[0]);
  let f = args[1]
    if(!user) return message.channel.send(`**${message.author.username}**, No user found! Please mention someone!`);
  if (user.id == message.author.id) return message.channel.send('You can\'t transfer to yourselft!');
  if(user.bot) return message.channel.send(`${message.author.username}, You can't transfer your balance to bot!`);
  if(!f) return message.channel.send('Please provided the value to transfer');
	if(isNaN(f)) return message.channel.send('Type the valid value!');

  let bal = await db.fetch(`userBalance.${message.author.id}`)

  if(bal == null || bal < args[1]) return message.channel.send(`Check again **${message.author.username}**, You dont have \💴**${args[1]}**`);
  
  db.add(`userBalance.${user.id}`, + f)
  db.add(`userBalance.${message.member.id}`, -f)
    user.send(`\🏧  | **Transfer Receipt**\`\`\`You have received 💴 ${f} from user ${message.author.tag}\n(ID: ${message.author.id})\`\`\``);
    message.channel.send(`Transaction completed! **${message.author.username}**, :yen: **${f}** has been deducted from your balance.`); 
}
}