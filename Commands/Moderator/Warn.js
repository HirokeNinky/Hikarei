const Djs = require("discord.js");
const fs = require("fs");
const ms = require("ms");
const db = require('quick.db')

module.exports = {
    name: "warn",
    aliases: [],
    category: "Moderator",
    description: "Give a warning",
    usage: "[warn <@mention> <reason>]",
    run: async (client, message, args) => {

  message.delete()
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Nothing can be done!");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Cannot find the user sought");
  if(wUser.hasPermission("ADMINISTRATOR")) return message.reply("it can't be colored because it has ADMINISTRATOR permission...");
  let reason = args.join(" ").slice(22);

  let warns = db.get(`warns_${wUser.id}`)
  if(!warns) warns = 1;

  let warnEmbed = new Djs.MessageEmbed()
  .setDescription("Warn Our Member Logs")
  .setAuthor(message.author.username)
  .setColor("RANDOM")
  .addField("Warned User", `<@${wUser.id}>`)
  .addField("Warned In", message.channel)
  .addField("Number of Warnings", warns)
  .addField("Reason", reason);

  

  message.channel.send(`Users: ${wUser} Has Been warned By :${message.author}, Reason: [${reason}], Warnings Number: [${warns} Warnings]`);
  db.add(`warns_${wUser.id}`, 1)


  if(warns == 2){
    let muterole = message.guild.roles.cache.find(`name`, "Muted");
    if(!muterole) return message.reply("You must make Muted roles first.");

    let mutetime = "5d";
    await(wUser.addRole(muterole.id));
    message.channel.send(`<@${wUser.id}> Has Muted`);

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.reply(`<@${wUser.id}> succeeded in Unmute.`)
    }, ms(mutetime))
  }
  if(warns == 3){
    message.guild.member(wUser).ban(reason);
    message.reply(`<@${wUser.id}> successfully banned.`)
  }

}
}