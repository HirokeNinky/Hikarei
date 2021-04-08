const { MessageEmbed } = require("discord.js");
const { owners_id, Prefix, color } = require('../../Modules/Data/Conf');
const { stripIndents } = require("common-tags");
const db = require("quick.db")
const moment = require("moment")

module.exports = {
    name: "help",
    aliases: ["h" , "cmds", "cmdlist"],
    category: "Information",
    description: "Returns all commands, or one specific command info",
    usage: "[Cmd Name | Cmd Aliases]",
    run: async (client, message, args) => {
  let prefix = Prefix;
    const embed = new MessageEmbed()
    .setImage('https://www.gambaranimasi.org/data/media/562/animasi-bergerak-garis-0448.gif')
    .setDescription("Use `h!help <command>` for more information about command. \n**Example :** `h!help invite` \n**Remind :** Hooks such as  [] or <> are not to be used when using commands. if you have any question, consider joining our **[Support Server](https://bit.ly/36okKZI)**")
    .setColor("RANDOM")
      .setTitle("Information & Commands Guides")
      .addField(`<:spy:455810041027756053>  | Developer`, `\`No See | No Permission\``)
      .addField(`<a:giphy:574880692312473601> | Core`, `\`About\` | \`Anime\` | \`Help\` | \`Bot\` | \`Leaderboard\` | \`License\` | \`Membercount\` | \`Ping\` | \`Rolelist\` | \`Serveremoji\` | \`Servericon\` | \`Serverinfo\` | \`Translate\` | \`Uptime\` | \`Userinfo\` | \`Shorten\``)
      .addField(`<a:NeedyCostlyGermanshorthairedpoin:574877988110204928> | Economy`, `\`Transfer\` | \`Work\` | \`Balance\` | \`Weekly\` | \`Daily\` | \`Monthly\` | \`Start\` | \`End\` | \`Hunt\` | \`Inventory\` | \`Sell\` | \`Sword\` | \`Profile\` | \`Rep\` | \`Divorce\``)
      .addField(`<:Moderator:599576536085037064> | Moderator`, `\`Coming Soon\``)
      .addField(`<:video_game:636087338807853057> | Games`, `\`fortnite\` | \`mcserver\` | \`mcskin\` | \`mcuser\``)
      .addField(`<a:blobParty:596242988863324192> | Fun`, `\`Coming Soon\``)
      .addField(`<a:music:596242974879514634> | Music`, `\`loop\` | \`play\` | \`stop\` | \`pause\` | \`resume\` | \`leave\` | \`Forceplay\` | \`Np\` | \`Queue\` | \`lyrics\` | \`pause\` | \`radio\` | \`skip\` | \`spotify\` | \`volume\``)
      .addField(`<:no_entry_sign:595867895876288524> | NSFW`, `\`Comming soon\``)
      .addField(`<:robot:539766935521460240> | Support Bot`, `\`Coming soon\``)
      .addField(`:tickets:  | Ticket`, `\`Coming Soon\``)
      .addField(`<:utility:596243019364171786> | Utility`, `\`ascii\` | \`avatar\` | \`calculator\` | \`channelinfo\` | \`discrim\` | \`docs\` | \`emojify\` | \`google\` | \`instagram\` | \`invitebot\` | \`reminder\` | \`say\` | \`sayembed\` | \`searchimage\` | \`steam\` | \`weather\` | \`youtube\``)
    .setThumbnail(client.user.displayAvatarURL())
    .setAuthor(client.user.username + ' Help', client.user.displayAvatarURL())
    .setFooter(`© Hikarei 2021 | AG Development | Version: 0.3Beta | To find out how to use the command, type h!help <commands> // Total commands : ${client.commands.size}`)
    message.channel.send(embed);
}
}