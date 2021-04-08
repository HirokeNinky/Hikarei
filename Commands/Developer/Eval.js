const Djs = require("discord.js");
const { inspect } = require("util")
const fs = require("fs");
const { post } = require('node-fetch');

const warningTokenMessage = ["Token not found!", "Couldn't find token"]

module.exports = {
  name: "eval",
  aliases: ["ev"],
  category: "Developer",
  description: "A commands for checking code with JS language!",
  run: async (client, msg, args) => {
    this.client = client;
    this.db = client.db;
    this.config = client.config;
    this.aliases = client.aliases;
    this.commands = client.commands;
    this.categories = client.categories;
    this.queue = client.queue;
    var serverQueue = client.queue.get(msg.guild.id)
    if(msg.author.id !== "271995898911916032") return;
	if (!args[0]) return msg.channel.send("You missing 1 argument in here.")
    const embed = new Djs.MessageEmbed()
    .setColor("RANDOM")
    .addField('📥 | Input', '```js\n' + args.join(" ") + '```')
    var message = msg

    try {
        let code = args.join(' ');
        // Evaled Time
        let evaled;
        if (code.includes(`token`)) {
          evaled = warningTokenMessage[Math.floor(Math.random() * warningTokenMessage.length)];
          console.log(`${msg.author.tag} use this eval to against the tokens and privacy.`)
        } else {
          evaled = await eval(code);
          }
        
        if (typeof evaled !== 'string')
            evaled = require('util').inspect(evaled, { depth: 0 });
      let output = clean(evaled);
      if(code.includes(`link`)) output = 'https://discord.com/oauth2/authorize?client_id=706724318805229600&permissions=8&scope=bot'
      if (output.length > 1024) {
          const { body } = await post('https://hasteb.in/documents').send(output);
          embed.addField('📤 | Output', `https://hasteb.in/${body.key}.js`);
      } else {
          embed.addField('📤 | Output', '```js\n' + output + '```');
      }
      message.channel.send(embed);
    } catch (e) {
      let error = clean(e);
      if (error.length > 1024) {
          const { body } = await post('https://hasteb.in/documents').send(error);
          embed.addField('❌ | Error', `https://hasteb.in/${body.key}.js`);
      } else {
          embed.addField('❌ | Error', '```js\n' + error + '```');
      }
      message.channel.send(embed);
    }
  }
};

function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}