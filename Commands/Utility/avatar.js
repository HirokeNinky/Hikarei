const Discord = module.require ("discord.js");

module.exports = {
    name: "avatar",
    aliases: ["usericon"],
    category: "Utility",
    description: "see someones avatar",
    usage: "[avatar <@mention>]",
    run: async (client, message, args) => {
const member = message.mentions.members.first () || message.guild.members.get (args [0]) || message.member;
   let avatarembed = new Discord.MessageEmbed ()
   .setColor ("RANDOM")
   .setAuthor (member.user.tag)
   .setImage (member.user.displayAvatarURL);

    message.channel.send (avatarembed);

}
}