const djs = require("discord.js");

module.exports = {
    name: "purge",
    aliases: ['prune', 'clear'],
    category: "Moderator",
    description: "Delete message 2 - 99 [MANAGE_MESSAGES]",
    usage: "purge <2 - 99>",
    run: async (client, message, args) => {
      
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have permission to use this command");
  if(!args[0]) return message.channel.send("Provide Delete message 2 - 99");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Clear ${args[0]} messages.`).then(msg => msg.delete(2000));
});

}
}