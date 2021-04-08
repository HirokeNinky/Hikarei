const djs = require('discord.js');
const arraySort = require('array-sort'); 

module.exports = {
    name: "leaderboard",
    aliases: ['inviteboard'],
    category: "Information",
    description: "Show leaderboard invite in server",
    usage: "leaderboard",
    run: async (client, message, args) => {

    let invites = await message.guild.fetchInvites().catch(error => { 
        return message.channel.send({embed: { color: 0xFF0000, description: 'Sorry, I don\'t have the proper permissions to view invites!' }});
    }) 

    invites = invites.array();

    arraySort(invites, 'uses', { reverse: true }); 

    let possibleinvites = [];
    let index = 0;
    invites.forEach(function(invites) {
        possibleinvites.push(`**${++index}**. 🔰 **${invites.inviter.tag}** 》 \`${invites.uses}\` **invites**`)
    })

    const embed = new djs.MessageEmbed()
        .setTitle(`🎖 INVITE LEADERBOARD 🎖`)
        .setColor('RANDOM')
        .setThumbnail(message.guild.iconURL)
        .setDescription(`${possibleinvites.join('\n')}`)
        .setFooter(`• Message For ${message.author.tag}`, message.author.displayAvatarURL)
        .setTimestamp();
    message.channel.send(embed);
 }
}