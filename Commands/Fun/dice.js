const Djs = require('discord.js');

module.exports = {
    name: "dice",
    aliases: [],
    category: "Fun",
    description: "Cobalah untuk melempar dadu dan dapatkan keberuntunganmu.",
    usage: "[dice]",
    run: async (client, message, args) => {
  
  let number = args.join('');
  if (!args[0]) number = 6; // astaga 
  if(isNaN(args[0])) return message.channel.send('Kamu hanya dapat menggunakan angka dalam sebuah dadu');
  
  
  let roll = Math.floor(Math.random() * number) + 1;
  const embed = new Djs.MessageEmbed() 
  .setColor("RANDOM")
  .setThumbnail('https://gilkalai.files.wordpress.com/2017/09/dice.png?w=640')
  .setAuthor(message.author.username, message.author.avatarURL)
  .setTitle(`Rolling a ${number} sided dice.`)
  .setDescription(`Kamu mendapatkan angka ${roll}`)
  return message.channel.send(embed);
}
}