module.exports = {
    name: "dime",
    aliases: ["dm"],
    category: "Developer",
    description: "dm user",
    usage: "[dm <mention> <message>]",
    run: async (client, message, args) => {
  const { owners_id } = client.config;
Bot.owners_id.forEach(async function(owner) {
  if (message.author.id !== owner) return;
  await message.delete();
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Ohh, Tidak...");
  
  let user = message.mentions.users.first() || bot.users.get(args[0]);
  if(!user) return message.reply("Please mention a user");
  if(user.bot) return message.reply('Please mention a user, bukan bot!');
  
  let dm = args.join(" ").slice(22);
  if(!dm) return message.channel.send('Masukan Pesan Yang ingin Dikirim');
  
 bot.users.get(user.id).send(dm);
  message.channel.send(`**${user.username}** Sukses di DM`)
  });
}
}