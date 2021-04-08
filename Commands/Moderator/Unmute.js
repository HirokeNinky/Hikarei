module.exports = {
    name: "unmute",
    aliases: [],
    category: "Moderator",
    description: "Unmute someone",
    usage: "[unmute]",
    run: async (client, message, args) => {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`**${message.author.username}**,Sorry you can't use this command!`).then(msg=>msg.delete(5000));
    if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.channel.send(`**${message.author.username}**, Sorry I don't have permission \`MANAGE_ROLES\` untuk melakukannya!`).then(msg=>msg.delete(5000));

    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!member) return message.channel.send(`**${message.author.username}**, Sorry I can't find the member you mean!`).then(msg=>msg.delete(5000));
    
    let muterole = message.guild.roles.cache.find(x => x.name === 'Muted');
    if (!member.roles.cache.has(muterole.id)) return message.channel.send(`**${message.author.username}**, he hasn't muted, try muting him first :)`).then(msg=>msg.delete(5000));
    await (member.removeRole(muterole.id));
    message.channel.send(`<@${member.id}> congratulations you are unmute.`);
}
}