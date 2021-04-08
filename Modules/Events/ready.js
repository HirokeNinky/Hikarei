const Discord = require("discord.js");
const moment = require("moment");
const fs = require("fs");
let folder = ["Music", "Information", "Developer", "Economy", "Moderator", "Fun"];

module.exports = client => {
  try {
    folder.forEach(function(a) {
      fs.readdir(`./Commands/${a}`, async (err, files) => {
        console.log(
          `【 CommandsHandler 】 HikareiCommands : ${files.length} Commands in Category : ${a}`
        );
        if (err) return null;
      });
    });
    console.log(
      `Servers ${client.guilds.cache.size.toLocaleString()}`,
      `Channels ${client.channels.cache.size.toLocaleString()}`,
      `Users : ${client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString()} Users`
    );// yakin prefix nya "night!" | yaakin lah:v | ga kepanjangan? | atau | pake + aja lah | ok
     var sts = [ 
       
      `Mentioned Me`,
      `Hi, My Name Hikarei`,
      `◈ h!help ◈ h!about ◈ h!invite ◈`,
      `🌐 ${client.guilds.cache.size.toLocaleString()} Servers!`,
      `📊 ${client.channels.cache.size.toLocaleString()} Channels!`,
      `💹 ${client.guilds.cache 
          .reduce((a, b) => a + b.memberCount, 0)
          .toLocaleString()} Users`
     ];
    setInterval(async () => {
      const random = Math.floor(Math.random() * sts.length);
      try {
        await client.user.setPresence({
          activity: {
            name: `${sts[random]}`,
          },
          status: "dnd",
          type: "streaming"
        });
      } catch (error) {
        console.error(error);
      }
    }, 20000);
  } catch (e) {
    return null;
  }
};
