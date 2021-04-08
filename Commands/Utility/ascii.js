const figlet = require('figlet');

module.exports = {
    name: "ascii",
    aliases: [],
    category: "Utility",
    description: "turn text into ascii format",
    usage: "[ascii]",
    run: async (client, message, args) => {
  
  message.delete()
  if(args.join(' ').length > 400) return message.channel.send('Can only accept 400 letters!') 
  if (!args.join(' ')) return message.channel.send('Enter the text you want to convert to ASCII format'); 
    figlet(args.join(' '), (err, data) => {
      message.channel.send('```' + data + '```')
    })
    }
};