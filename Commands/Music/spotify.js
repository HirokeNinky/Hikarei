const Djs = require('discord.js');

module.exports = {
    name: "spotify",
    aliases: [],
    category: "Music",
    description: "Checking track info Spotify from a useri",
    usage: "[spotify <@mention user | your self if u without mention someone>]",
    run: async (client, message, args) => {

    var user = message.mentions.users.first() || client.users.get(args[0]) || message.author;

    if (user.presence.game.name === 'Spotify' && user.presence.game.type === 2) {
        try {
            var trackImg = user.presence.game.assets.largeImageURL;
            var trackUrl = `https://open.spotify.com/track/${user.presence.game.syncID}`;
            var trackName = user.presence.game.details;
            var trackAlbum = user.presence.game.assets.largeText;
            var trackAuthor = user.presence.game.state;

            const embed = new Djs.MessageEmbed()
                .setAuthor('Spotify Information', `https://cdn.discordapp.com/attachments/570740974725103636/582005158632882176/Spotify.png`)
                .setColor('#83f15c')
                .addField("🎵 | Song name:", trackName, true)
                .addField("📀 | Album:", trackAlbum, true)
                .addField("🎤 | Author(s)", trackAuthor, true)
                .addField(":link: | Url:", `[${trackName}](${trackUrl})`, true)
                //.setDescription(`[${trackName}](${trackUrl})`)
                //.addField('Listen to this track :', `[${trackUrl}](${trackUrl})`, false)
                .setImage(trackImg)
                .setTimestamp()
                .setFooter(`${user.username} Listening at:`)

            return message.channel.send(embed);

        } catch (error) {
            return console.log(error.stack);
        }

    } else {
        return message.channel.send(`<:Error:575148612166746112> | ${user.username} is not listening to spotify`);
    }
}
};