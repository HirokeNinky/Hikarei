const Djs = require('discord.js');
 
module.exports = {
    name: "uptime",
    aliases: [],
    category: "Information",
    description: "show uptime bot",
    usage: "[uptime]",
    run: async (client, message, args) => {
    const os = require('os');
    const arch = os.arch()
    const used = process.memoryUsage().heapUsed / 1024 / 1024;

    let totalSeconds = process.uptime();
    let realTotalSecs = Math.floor(totalSeconds % 60);
    let days = Math.floor((totalSeconds % 31536000) / 86400);
    let hours = Math.floor((totalSeconds / 3600) % 24);
    let mins = Math.floor((totalSeconds / 60) % 60);
function parseDur (ms){
    let seconds = ms / 1000;
    let days = parseInt(seconds / 86400);
    seconds = seconds % 86400;
    let hours = parseInt(seconds / 3600);
    seconds = seconds % 3600;
    let minutes = parseInt(seconds / 60);
    seconds = parseInt(seconds % 60);
    let fin = [];
    if(days) fin.push(`${days}d`);
    if(hours) fin.push(`${hours}h`);
    if(minutes) fin.push(`${minutes}m`);
    fin.push(`${seconds}s`);
    return fin.join(' ');
}
 let inline = true;
    var ping = (client.ping).toFixed(2)
     const uptime = parseDur(client.uptime);
    const embed = new Djs.MessageEmbed()
  .setTimestamp()
  .setThumbnail(message.author.iconURL)
  //.addField(':clock: uptime', 'Bot\'s uptime', true)
  .addField(':runner: Running on:', `**${client.guilds.size}** servers`, true)
  .addField(':white_check_mark: Active for:',  `${uptime}`)
   // .addField('<a:thisright:589468840585592853> Uptime Shard:', `${uptime}`, inline)
  .setColor(6583245);
    message.channel.send({embed})
  .catch(console.error);
}
}