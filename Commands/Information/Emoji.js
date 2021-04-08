const Djs = require("discord.js");

module.exports = {
    name: "emoteinfo",
    aliases: [],
    category: "Information",
    description: "See the emoji",
    usage: "[emoteinfo]",
    run: async (client, message, args) => {
  const emoji = client.emojis.get(args[0]);
// const emoteurl = emoji.url
  const eembed = new Djs.Embed()
  .setAuthor("Emote Info"," https://discordemoji.com/assets/emoji/owo.png")
  .addField("» Emote Name",emoji.name)
  // .setThumbnail(emoteurl)
    .addField("» Emote Id",emoji.id)
    .addField("» Created At",emoji.createdAt)
   
if(isNaN(args[0])) return message.channel.send("Emote Name bust be NaN or an id")
  
  message.channel.send(eembed)

}
}