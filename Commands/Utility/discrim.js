const Discord = require('discord.js');

module.exports = {
    name: "discrim",
    aliases: ["disciminator"],
    category: "Utility",
    description: "Show some discord usernames that have discrim",
    usage: "[discrim <user discriminitor>]",
    run: async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setColor('RANDOM');
    
    if (isNaN(args[0]) || args[0] > 9999 || args[0] < 1) {
        
        embed.setFooter('Sorry, please enter valid discrimination.');
        
        return message.channel.send(embed);
        
    }
    
   let respond = '';
   
   client.users.map(function(user) {
       
       if (user.discriminator == args[0]) return respond += `${user.username}\n`;
       else return; // If not, return
       
   })
   
    // Add embed options
    embed.setTitle(`Username with Discrim: ${args[0]}`)
         .setDescription(respond);
        
    // Send Embed
    message.channel.send(embed);
  
}
}