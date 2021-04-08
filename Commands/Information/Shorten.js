const shorten = require('isgd');

module.exports = {
    name: "shorten",
    aliases: [],
    category: "Information",
    description: "Mempersingkat URL",
    usage: "[shorten <URL> (title)]",
    run: async (client, message, args) => {
    if (!args[0]) return message.channel.send('**Usage: h!shorten <URL> [title]**')
    if (!args[1]) {
    shorten.shorten(args[0], function(res) {
        if (res.startsWith('Error:')) return message.channel.send('**Masukan URL yang valid**');
        message.channel.send(`**<${res}>**`);
    })

    } else {
      shorten.custom(args[0], args[1], function(res) {
          if (res.startsWith('Error:')) return message.channel.send(`**${res}**`);
          message.channel.send(`**<${res}>**`);
      })
    };
}
}