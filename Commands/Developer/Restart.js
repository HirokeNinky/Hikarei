  const Discord = require('discord.js')
const bot = new Discord.Client();

module.exports = {
    name: "reboot",
    aliases: ["restart"],
    category: "Developer",
    description: "Rebooting bot",
    usage: "[reboot]",
    run: async (client, message, args) => {

    const token = process.env.TOKEN; // Dh Ku Bantu Mas :V
     if (message.author.id !== "742567583483691010" || message.author.id !== "742567583483691010") return // lp gk b
      message.channel.send("Rebooting...").then(async message => {
  setTimeout(() => {
   message.edit('Success');
  }, 3000); 
});
      resetBot(message.channel);
            function resetBot(channel) {
                message.react('✅')
                    .then(message => bot.destroy())
                    .then(() => bot.login(process.env.TOKEN));
              
            }
}
}