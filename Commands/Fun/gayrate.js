const { ID } = require('../../Modules/Data/Conf');
const { loadImage } = require('canvas');
const { Canvas } = require('canvas-constructor');
const { get } = require('node-superfetch');

module.exports = {
    name: "gayrate",
    aliases: ["gyrt"],
    category: "Fun",
    description: "apa kamu gay?",
    usage: "[gayrate]",
    run: async (client, message, args) => {
	let user = message.mentions.users.first() || client.users.get(args[0]);
	if(!user) user = message.author;
        if(user.bot)return message.channel.send(`**${message.author.username}**, indeed bots can be gay?`);
	let rate = Math.floor(Math.random()*101);
	if(ID.includes(user.id)) rate = Math.floor(Math.random()*2);
	/* Canvas */
	const { body: plate } = await get('https://cdn.discordapp.com/attachments/447874901274132481/491724669246767114/rainbow.png');
	const { body: ava } = await get(user.displayAvatarURL.replace(/\.gif/g, '.png'));
	const { width, height } = await loadImage(ava);
	const attachment = new Canvas(width, height)
	.addImage(ava, 0, 0, width, height)
	.addImage(plate, 0,0, width, height)
	.toBuffer();
	/* Canvas */
	return message.channel.send({
		embed: {
			author: {
				name: user.username,
				icon_url: user.displayAvatarURL
			},
			title: 'Scanning...',
			thumbnail: {
				url: 'attachment://gay.png'
			},
			description: `${user.username} have ${rate}% gay! :gay_pride_flag:`,
			color: 9384170,
			timestamp: new Date(),
			footer: {
				icon_url: user.displayAvatarURL
			},
			file: { attachment, name: 'gay.png'}
		}
	});
}
}