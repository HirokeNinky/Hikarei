module.exports = {
    name: "reload",
    aliases: ["rl"],
    category: "Developer",
    description: "Reloads a command that\'s been modified.",
    usage: "[reload <category> <command>]",
    run: async (client, message, args) => {
  let msg = message;
const { owners_id } = client.config;
  owners_id.forEach(async function(owner) {
    if(message.author.id !== owner) return;
  
  
  if(!args.length) return args.missing(msg, `Must provide a command to reload.`, client.commands.get('reload').help);

  let command;
  if (client.commands.has(args[1])) {
    command = client.commands.get(args[1]);
  } else if (client.aliases.has(args[1])) {
    command = client.commands.get(client.aliases.get(args[1]));
  }
  if(!command) return msg.channel.send(`<a:no:528804256069713933>The command \`${args[1]}\` doesn't seem to exist, nor is it an alias. Try again!`);

  if(command.db) await command.db.close();

  command = command.help.name;

  delete require.cache[require.resolve(`../../commands/${args[0]}/${command}.js`)];
  let cmd = require(`../../commands/${args[0]}/${command}`);
  client.commands.delete(command);
  if(cmd.init) cmd.init(client);
  client.aliases.forEach((cmd, alias) => {
    if (cmd === command) client.aliases.delete(alias);
  });
  client.commands.set(command, cmd);
  cmd.conf.aliases.forEach(alias => {
    client.aliases.set(alias, cmd.help.name);
  });

  message.channel.send(`<a:yes:528804255793152001> The command \`${command}\` has been reloaded`);
  });
                    }
};