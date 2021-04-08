const { get } = require ('node-superfetch');
module.exports = {
    name: "docs-djs",
    aliases: ["doc"],
    category: "Utility",
    description: "Search docs of discord.js",
    usage: "[docs-djs <docs name>]",
    run: async (client, message, args) => {

  if (!args[0]) 
    return message.channel.send("No code was provide")

  let branch = args[1] || 'stable'

  let project = 'main';

  if (branch === 'commando' || branch === 'rpc') {

  project = branch;
branch = 'master;'

}
try {
const { body } = await get(`https://djsdocs.sorta.moe/${project}/${branch}/embed`)
.query({q: args[0]}); 
return message.channel.send({embed: body});
} catch(e) {
  console.log(e)
return message.channel.send(`Oh no an error occured\`${e.message}\`\ try again later`);
}
}
}
