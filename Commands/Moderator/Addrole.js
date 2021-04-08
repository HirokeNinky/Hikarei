const Djs = require("discord.js");

module.exports = {
    name: "addrole",
    aliases: [],
    category: "Moderator",
    description: "addrole tag <someone>",
    usage: "[addrole]",
    run: async (client, message, args) => {

  let uEmbed = new Djs.MessageEmbed()
    .setDescription(':x: **Missing argument**')
    .addField("You're missing the ``Member`` argument.", "**Usage: ``h!addrole <@user> <role> ``**")
    .setColor("#e05959")
    .setFooter(`Add role command executed by ${message.author.username}`, message.author.avatarURL());

  if (args.length === 0)
    return message.channel.send(uEmbed);

  if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("You're missing the `MANAGE_ROLES` permission.");

  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!rMember) return message.reply("Couldn't find that user.");
  let role = args.slice(1).join(" ");

  let pEmbed = new Djs.MessageEmbed()
    .setDescription(':x: Missing argument')
    .addField("You're missing the ``role`` argument.", "**Usage: ``h!addrole <@user> <role> ``**")
    .setColor("#e05959")
    .setFooter(`Add role command executed by ${message.author.username}`, message.author.avatarURL());
  if (!role) return message.channel.send(pEmbed);

  let gRole = message.guild.roles.cache.find(c => c.name === role);
  if (!gRole) return message.reply("Couldn't find that role.");

  if (rMember.roles.cache.has(gRole.id)) return message.reply(`This user already has the "${gRole.name}" role.`);
  await (rMember.addRole(gRole.id));

  try {
    await rMember.send(`Congrats, you have been given the "${gRole.name}" role.`)
  } catch (e) {
    let nEmbed = new Djs.MessageEmbed()
      .addField("Role added", `The ${gRole.name} role has been given to ${rMember}.`)
      .setColor("#e05959")
      .setFooter(`Add role command executed by ${message.author.username}`, message.author.avatarURL());
    message.channel.send(nEmbed);
  }

}
}