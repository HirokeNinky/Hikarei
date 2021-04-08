const Djs = require('discord.js');
const { get } = require('node-superfetch');

module.exports = {
    name: "advice",
    aliases: ["adviceslip"],
    category: "Fun",
    description: "Dapatkan beberapa saran (Dalam bahasa inggris)",
    usage: "[advice]",
    run: async (client, message, args) => {
  let { body } = await get('http://api.adviceslip.com/advice');
  let advice = JSON.parse(body);
  let embed = new Djs.MessageEmbed()
  .setFooter('Powered by adviceslip.com')
  .setTimestamp()
  .setColor("RANDOM")
  .setTitle('Advice Slip #' + advice.slip.slip_id)
  .setDescription(advice.slip.advice);
  message.channel.send(embed);
}
}